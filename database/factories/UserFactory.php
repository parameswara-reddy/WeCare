<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'mobile_number' => $faker->e164PhoneNumber,
        'role' => $faker->randomElement(['clinic_admin','doctor', 'patient']),
        'password' => (string)$faker->numberBetween($min = 1000, $max = 9999), // secret
        'remember_token' => str_random(10),
        'doctor_id' => function() {
            return App\User::all()->pluck('id')->random();
        },
    ];
});
