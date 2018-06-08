<?php

namespace App\Model;

use App\Model\Survey;
use Illuminate\Database\Eloquent\Model;

class QuestionAnswer extends Model
{
    public function survey() {
        $this->belongsTo(Survey::class, 'survey_id');
    }
}