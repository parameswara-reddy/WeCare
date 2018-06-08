<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'display_name' => $this->first_name . ' ' . $this->last_name,
            'email' => $this->email,
            'mobile_number' => $this->mobile_number,
            'role' => $this->role,
            $this->mergeWhen($this->role == "doctor", [
                'patients' => $this->patients
            ]),
            $this->mergeWhen($this->role == "patient", [
                'doctor' => new UserResource($this->doctor)
            ])
            
        ];
    }
}
