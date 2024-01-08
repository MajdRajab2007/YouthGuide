<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class CreateSuperUser extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i=0; $i <7 ; $i++) { 

        $admin = new User;
        $admin->name="Admin.$i";
        $admin->email = "admin.$i@youthguide.com";
        $admin->password = Hash::make("adminpassword.$i");
        $admin->is_super = true;
        $admin->save();
        }
    }
}
