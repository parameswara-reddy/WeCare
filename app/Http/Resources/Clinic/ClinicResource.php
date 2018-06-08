<?php

namespace App\Http\Resources\Clinic;

use Illuminate\Http\Resources\Json\JsonResource;

class ClinicResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "contact_number" => $this->contact_number,
            "description" => $this->description,
            "admin" => $this->admin
        ];
    }
}
