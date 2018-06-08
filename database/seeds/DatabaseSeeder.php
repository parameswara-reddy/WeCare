<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 100)->create();
        factory(App\Model\Clinic::class, 5)->create();
        factory(App\Model\Survey::class, 50)->create();
        factory(App\Model\QuestionAnswer::class, 500)->create();
    }
}
