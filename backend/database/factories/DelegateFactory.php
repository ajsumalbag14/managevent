<?php

use Faker\Generator as Faker;

$factory->define(App\Delegate::class, function (Faker $faker) {
    return [
        'firstname' => $faker->name,
        'lastname' => $faker->lastname,
        'email' => $faker->unique()->safeEmail,
        'mobile' =>$faker->e164PhoneNumber,
        'dateofbirth' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'organization' => $faker->company,
        'position' => $faker->jobTitle,
        'image' => $faker->imageUrl(640, 480, 'cats')
    ];
});
