<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //change password after seeding
        User::create(['first_name'=>'Nandkishore', 'last_name'=>'Ojha', 'email'=>'nk@broadweb.com.au', 'mobile_number'=>'9509523850', 'password'=>bcrypt('12345678')]);
    }
}
