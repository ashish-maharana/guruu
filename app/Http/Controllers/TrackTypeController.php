<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TrackType;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class TrackTypeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $trackType = TrackType::get();
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
            $rules =[
                'name' => 'required|unique:track_types,name',
            ];

            $validator = Validator::make($request->all(), $rules);

            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }
            $input = $request->all();
            $trackType = TrackType::create($input);

            return response()->json([
                'message' => 'TrackType created',
                'trackType' => $trackType
            ], 201);

        }
        catch (\Exception $e) {
            \Log::error($e, ['type' => 'Save TrackType']);
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
