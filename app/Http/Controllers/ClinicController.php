<?php

namespace App\Http\Controllers;

use App\Model\Clinic;
use App\Http\Resources\Clinic\ClinicResource;
use App\Http\Requests\ClinicRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

class ClinicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ClinicResource::collection(Clinic::all());
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
    public function store(ClinicRequest $request)
    {
        $clinic = new Clinic;
        $clinic->name = $request->get('name');
        $clinic->contact_number = $request->get('contact_number');
        $clinic->description = $request->get('description');
        $clinic->admin_id = $request->get('admin_id');
        $clinic->save();
        return response($clinic, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Clinic  $clinic
     * @return \Illuminate\Http\Response
     */
    public function show(Clinic $clinic)
    {
        return new ClinicResource($clinic);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Clinic  $clinic
     * @return \Illuminate\Http\Response
     */
    public function edit(Clinic $clinic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Clinic  $clinic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Clinic $clinic)
    {
        $clinic->name = $request->get('name');
        $clinic->contact_number = $request->get('contact_number');
        $clinic->description = $request->get('description');
        $clinic->admin_id = $request->get('admin_id');
        $clinic->save();
        return response($clinic, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Clinic  $clinic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Clinic $clinic)
    {
        $clinic->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
