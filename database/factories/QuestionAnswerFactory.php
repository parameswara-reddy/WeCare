<?php

use Faker\Generator as Faker;

$factory->define(App\Model\QuestionAnswer::class, function (Faker $faker) {
    return [
        'question_id' => $faker->randomNumber,
        'survey_id' => function() {
            return App\Model\Survey::all()->pluck('id')->random();
        },
        'value' => $faker->sentence
    ];
});
