<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{
    public function admin() {
        return $this->belongsTo(User::class, 'admin_id');
    }
}
