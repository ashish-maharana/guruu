<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;
class CategoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::where('parent_id', '=', 0)->get();
        $allCategories = Category::pluck('name','id')->all();
        return response()->json($category);
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
                'name' => 'required|unique:categories,name',
            ];

            $validator = Validator::make($request->all(), $rules);

            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }
            $input = $request->all();
            $input['parent_id'] = empty($input['parent_id']) ? 0 : $input['parent_id'];
            $category = Category::create($input);

            return response()->json([
                'message' => 'Category created',
                'category' => $category
            ], 201);

        }
        catch (\Exception $e) {
            \Log::error($e, ['type' => 'Save Category']);
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
        $category = Category::find($id);
        return response()->json($category->toArray());
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
                'name' => 'required|unique:categories,name',
            ];

            $validator = Validator::make($request->all(), $rules);

            if($validator->fails()){
                return $this->sendError('Please check your entered data', $validator->errors(), 500);
            }

            $data =  $request->all();

            Category::updateOrCreate(['id' => $request->id],$data);
            return $this->sendResponse([], 'Category has been updated successfully.');

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
            Category::find($id)->delete();
            return $this->sendResponse([], 'Category has been deleted successfully.', 200);
        }catch (\Exception $e) {
            return $this->sendError('Something went wrong', $e->getMessage(), 500);
        }
    }

}
