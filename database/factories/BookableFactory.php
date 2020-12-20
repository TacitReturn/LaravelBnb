<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bookable;
use Faker\Generator as Faker;
use Illuminate\Support\Arr;

$suffix = [
    'Villa',
    'House',
    'Cottage',
    'Luxary Villas',
    'Cheap House',
    'Rooms',
    'Cheap Rooms',
    'Luxary Rooms',
    'Fancy Rooms'
];

$factory->define(Bookable::class, function (Faker $faker) use ($suffix) {
    return [
        'title' => $faker->title . ' ' . Arr::random($suffix),
        'description' => $faker->text(),
        'price' => rand(100, 1000)
    ];
});

