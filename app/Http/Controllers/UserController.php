<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $users = User::get();
        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(),[
                'first_name' => 'required|max:255',
                'last_name' => 'required|max:255',
                'email' => ['required', 'email', 'unique:users'],
                'password' => ['required', 'min:8']
            ]);

            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }

            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input);

            return response()->json([
                'message' => 'User created',
                'user' => $user
            ], 201);

        }
        catch (\Exception $e) {
            \Log::error($e, ['type' => 'Save User']);
            // //\Sentry\captureException($e);
            return $this->sendError('Something went wrong', $e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user->toArray());
    }


    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|max:255',
                'last_name' => 'required|max:255',
                'email' => 'required|email|unique:users,email,'.$request->id,
            ]);

            if ($validator->fails()) {
                return $this->sendError('Validation Error', $validator->errors());
            }
            $data = [
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'mobile_number' => $request->mobile_number??null,
            ];
            if($request->password) {
                $data['password'] = bcrypt($request->password);
            }
            User::updateOrCreate(['id' => $request->id],$data);
            return $this->sendResponse([], 'User has been updated successfully.');
        } catch (\Exception $e) {
            return $this->sendError('Something went wrong', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        try{
            User::find($id)->delete();
            return $this->sendResponse([], 'User has been deleted successfully.', 200);
        }catch (\Exception $e) {
            return $this->sendError('Something went wrong', $e->getMessage(), 500);
        }
    }

}
