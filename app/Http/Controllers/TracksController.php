<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tracks;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class TracksController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $trackType = Tracks::get();
        return response()->json($trackType);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(),[
                'title' => 'required',
                'track_type_id' => 'required',
                'track_frequency' => 'required',
                'duration_in_mins' => 'required',
                'skip_weekends' => 'required',
                'start_date' => 'required',
                'has_end_date' => 'required',
                'student_capacity' => 'required',
                'medium_of_instruction' => 'required',
                'delivery_method'=> 'required',
                'is_first_class_free'=> 'required'
            ]);

            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }
            
            $languages = explode("," ,$request->medium_of_instruction);
            $json_languages = json_encode($languages);
            $tracks = Tracks::create([
                'title' => $request->title,
                'track_type_id' => $request->track_type_id,
                'track_frequency' => $request->track_frequency,
                'duration_in_mins' => $request->duration_in_mins,
                'skip_weekends' => $request->skip_weekends,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'has_end_date' => $request->has_end_date,
                'student_capacity' => $request->student_capacity,
                'medium_of_instruction' => $json_languages,
                'delivery_method' => $request->delivery_method,
                'rate_per_class' => $request->rate_per_class,
                'is_first_class_free' => $request->is_first_class_free,
                'enrolment_start_date' => $request->enrolment_start_date,
                'enrolment_end_date'=> $request->enrolment_end_date
            ]);

            return response()->json([
                'message' => 'Track Created',
                'tracks' => $tracks
            ], 201);

        }
        catch (\Exception $e) {
            \Log::error($e, ['type' => 'Save Tracks']);
            // //\Sentry\captureException($e);
            return $this->sendError('Something went wrong', $e->getMessage(), 500);
        }
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $trackType = TrackType::find($id);
        return response()->json($trackType->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            $rules =[
                'name' => 'required|unique:track_types,name',
            ];

            $validator = Validator::make($request->all(), $rules);

            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }

            $data =  $request->all();

            TrackType::updateOrCreate(['id' => $request->id],$data);
            return $this->sendResponse([], 'TrackType has been updated successfully.');

        } catch (\Exception $e) {
            return $this->sendError('Something went wrong', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            TrackType::find($id)->delete();
            return $this->sendResponse([], 'TrackType has been deleted successfully.', 200);
        }catch (\Exception $e) {
            return $this->sendError('Something went wrong', $e->getMessage(), 500);
        }
    }

}
