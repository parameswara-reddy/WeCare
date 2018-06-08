<?php

namespace App\Http\Controllers;

use App\Model\Survey;
use App\Http\Requests\SurveyRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Resources\Survey\SurveyResource;

use Illuminate\Http\Request;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SurveyResource::collection(Survey::all());
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
    public function store(SurveyRequest $request)
    {
        $survey = new Survey;
        $survey->user_id = $request->get('user_id');
        $survey->save();
        return response(new SurveyResource($survey), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function show(Survey $survey)
    {
        return new SurveyResource($survey);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function edit(Survey $survey)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Survey $survey)
    {
        $survey->user_id = $request->get('user_id');
        $survey->save();
        return response(new SurveyResource($survey), Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function destroy(Survey $survey)
    {
        $survey->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}