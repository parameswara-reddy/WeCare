<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Clinic::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'contact_number' => $faker->e164PhoneNumber,
        'description' => $faker->paragraph,
        'admin_id' => function(){
            return App\User::where('role', 'clinic_admin')->get()->pluck('id')->random();
        }
    ];
});
