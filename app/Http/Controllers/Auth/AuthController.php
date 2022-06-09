<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Profile;
use App\Models\LearnSubject;
use App\Models\TeachSubject;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Twilio\Rest\Client;
use Craftsys\Msg91\Facade\Msg91;
use \Craftsys\Msg91\Support\Response;
use Spatie\Permission\Models\Role;
use \Craftsys\Msg91\Exceptions\ResponseErrorException; 

class AuthController extends BaseController
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), 
                [
                    'first_name' => ['required', 'string'],
                    'last_name' => ['required', 'string'],
                    'email' => ['required', 'email', 'unique:users'],
                    'password' => ['required', 'min:8'],
                    'mobile_number' => ['required'],
                ],
                [
                    'email.unique' => 'An account already exists with that email address.'
                ]
            );

            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }

            $countryCode = "+91";
            $userNumber = $request->mobile_number;
            $userPhoneNumber = $countryCode.''.$userNumber;
            $user = User::create([
                'first_name' => $request->first_name??null,
                'last_name' => $request->last_name??null,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'mobile_number' => $request->mobile_number??null,
                ]);
            $user->assignRole($request->roles);
            Msg91::otp()->to($userPhoneNumber)->send();
            if (Auth::attempt($request->only('email', 'password'))) {
                $user = Auth::user();
                $success = [];
                if($user){
                    $success['token'] = $user->createToken($user->email)->plainTextToken;
                    $success['user'] =  $user;
                }
                if($request->roles === "Student"){
                    return $this->sendResponse($success, 'Student registration successfully.',200);
                }
                if($request->roles === "Teacher"){
                    return $this->sendResponse($success, 'Teacher registration successfully.',201);
                }
            }else{
                return $this->sendError('User registration failed.', 500);
            }
        }catch (\Exception $e) {
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    /**
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            $success = [];
            if($user){
                $success['token'] = $user->createToken($user->email)->plainTextToken;
                $success['user'] =  $user;
            }
            return $this->sendResponse($success, 'User login successfully.');
        }

        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
            'password' => ['The provided credentials are incorrect.']
        ]);
    }

    public function forgotPassword(Request $request)
    {
        try{
            $request->validate([
                'email' => 'required|email|exists:users',
            ]);
            $token = Str::random(64);
            DB::table('password_resets')->insert(
                ['email' => $request->email, 'token' => $token, 'created_at' => Carbon::now()]
            );
            Mail::send('emails.verify', ['token' => $token], function($message) use($request){
                $message->to($request->email);
                $message->subject('Reset Password Notification');
            });
            return $this->sendResponse([], 'We have e-mailed your password reset link!');
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function resetPassword(Request $request)
    {
        try{
            $request->validate([
                'token' => 'required',
                'password' => 'required|string|min:6|confirmed',
                'password_confirmation' => 'required',

            ]);
            $updatePassword = DB::table('password_resets')
                ->where(['token' => $request->token])
                ->first();
            if(!$updatePassword) {
                return $this->sendError('Invalid token!', [], 500);
            }
            $user = User::where('email', $updatePassword->email)
                ->update(['password' => bcrypt($request->password)]);
            DB::table('password_resets')->where(['email'=> $updatePassword->email])->delete();
            return $this->sendResponse([], 'Password has been reset successfully!');
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function verify(Request $request)
    {
        try{
            if(auth()->user()->mobile_number_IsVerified){
                return $this->sendResponse([], 'Mobile Number is already verified', 201);
            }
            $userMobileNumber = (int) "+91".auth()->user()->mobile_number;
            $data = $request->validate([
                'verification_code' => ['required'],
            ]);
            $number = ($data['verification_code']+0);
            $verify = Msg91::otp($number)->to($userMobileNumber)->verify();
            $statusCode = $verify->getStatusCode();
            if($statusCode === 200)
            {
                $user = tap(User::where('mobile_number', auth()->user()->mobile_number))->update(['mobile_number_IsVerified' => true]);
                return $this->sendResponse([], 'OTP Verified.', 200);
            }
            if(!$statusCode){
                return $this->sendError([], 'OTP Not Verified.', 500);
            }
            
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }

    }

    public function profilePage(Request $request)
    {
        try{
            $data = $request->validate([
                'dob' => ['required'],
                'gender' => ['required', 'string'],
            ]);
            $ProfileImagePath = '';

            if ($request->hasFile('image_path'))
            {
                $file      = $request->file('image_path');
                $filename  = str_replace(' ', '_', $file->getClientOriginalName());
                //$extension = $file->getClientOriginalExtension();
                $image_path   = date('His').'-'.$filename;
                //move image to s3
                // $store = store('public/images');
                // Storage::disk('s3')->put($bucketPath, file_get_contents($file), 'public');
                // $data = array_merge($data, ['logo_image_path'=>$bucketPath]);
                $ProfileImagePath = $image_path;

            }
            $user = Profile::where('user_id', '=', auth()->user()->id)->first();
            if ($user === null) {
                // user doesn't exist
                Profile::create([
                    'user_id'=>auth()->user()->id,
                    'image_path' => $ProfileImagePath??null,
                    'dob'=> isset($request->dob)&&!empty($request->dob)?Carbon::parse($request->dob)->format('Y-m-d'):null,
                    'gender' => $request->gender,
                ]);
                return $this->sendResponse([], 'Profile has been created successfully', 200);
            }
            if ($user != null) {
                // Record does exist
                Profile::where('user_id', auth()->user()->id)->update(array(
                    'image_path' => $ProfileImagePath??null,
                    'dob'=> isset($request->dob)&&!empty($request->dob)?Carbon::parse($request->dob)->format('Y-m-d'):null,
                    'gender' => $request->gender
                ));
                return $this->sendResponse([], 'Profile has been updated successfully', 201);
            }  
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }

    }

    public function aboutPage(Request $request)
    {
        try{
            $data = $request->validate([
                'about' => ['required', 'string'],
            ]);
            $user = Profile::where('user_id', '=', auth()->user()->id)->first();
            if ($user != null) {
                // Record does exist
                Profile::where('user_id', auth()->user()->id)->update(array('about' => $request->about));
                return $this->sendResponse([], 'About details saved successfully', 200);
            }
            if ($user === null) {
                // user doesn't exist
                return $this->sendError([], 'Error in saving about details', 500);
            }   
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function learn(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'learn' => ['required'],
            ]);
            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }
            $user = LearnSubject::where('user_id', '=', auth()->user()->id)->first();
            if ($user === null) {
                LearnSubject::create([
                    'user_id'=>auth()->user()->id,
                    'learn'=>$request->learn
                ]);
            }
            if ($user != null) {
                LearnSubject::where('user_id', auth()->user()->id)->update(array('learn' => $request->learn));
            }
            return $this->sendResponse([], 'Students preferences saved successfully', 200);
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function teach(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'teach' => ['required'],
            ]);
            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }
            $user = TeachSubject::where('user_id', '=', auth()->user()->id)->first();
            if ($user === null) {
                TeachSubject::create([
                    'user_id'=>auth()->user()->id,
                    'teach'=>$request->teach
                ]);
            }
            if ($user != null) {
                TeachSubject::where('user_id', auth()->user()->id)->update(array('teach' => $request->teach));
            }
            return $this->sendResponse([], 'Teachers preferences saved successfully', 200);
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function resendOTP(Request $request)
    {
        try{
            if(auth()->user()->mobile_number_IsVerified){
                return $this->sendResponse([], 'Mobile Number is already verified', 201);
            }else{
            $userMobileNumber = (int) "+91".auth()->user()->mobile_number;
            Msg91::otp()->to($userMobileNumber)->viaText()->resend();
            return $this->sendResponse([], 'OTP Resent successfully', 200);
            }
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function getUserPhoneNumber()
    {
        try{
            $user = Auth::check() ? Auth::user()->id : null ;
            $userDetails =  User::where('id',$user)->first();
            $userMobileNumber = $userDetails->mobile_number;
            return $this->sendResponse($userMobileNumber, 'Mobile number fetched', 200);
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function logout()
    {
        Auth::logout();
        return response()->json('user has been logged out successfully');
    }

    public function getProfileDetails(Request $request)
    {
        try{
            $user = Profile::where('user_id', '=', auth()->user()->id)->first();
            return $this->sendResponse($user, 'Profile details fetched', 200);
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function getTeachingPreferences(Request $request)
    {
        try{
            $getTeachingPreferences = TeachSubject::where('user_id', '=', auth()->user()->id)->first();
            return $this->sendResponse($getTeachingPreferences, 'Teaching Preferences fetched', 200);
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function getLearningPreferences(Request $request)
    {
        try{
            $getLearningPreferences = LearnSubject::where('user_id', '=', auth()->user()->id)->first();
            return $this->sendResponse($getLearningPreferences, 'Learning Preferences fetched', 200);
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }

    public function editPhoneNumber(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'mobile_number' => 'required|min:10|max:10|unique:users,mobile_number,'.Auth::user()->id,
            ],
            [
                'mobile_number.unique' => 'An account already exists with that phone number.'
            ]);
            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }
            $user = Auth::check() ? Auth::user()->id : null ;
            if ($user === null) {
                return $this->sendResponse([], 'Please register', 201);
            }
            if ($user != null) {
                $countryCode = "+91";
                $userNumber = $request->mobile_number;
                $userPhoneNumber = $countryCode.''.$userNumber;
                User::where('id', auth()->user()->id)->update(array('mobile_number' => $request->mobile_number));
                Msg91::otp()->to($userPhoneNumber)->send();
                return $this->sendResponse([], 'Phone number updated successfully', 200);
            }
        }catch (\Exception $e){
            return $this->sendError($e->getMessage(), [], 500);
        }
    }
}
