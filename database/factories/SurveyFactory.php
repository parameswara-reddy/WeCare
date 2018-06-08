<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Survey::class, function (Faker $faker) {
    return [
        'user_id' => function(){
            return App\User::where('role', 'patient')->get()->pluck('id')->random();
        }
    ];
});
