<?php

namespace App\Model;

use App\Model\QuestionAnswer;
use App\User;

use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    protected $fillable = [
        'user_id'
    ];
    public function answers() {
        return $this->hasMany(QuestionAnswer::class);
    }
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
