<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reviews')->insert([
            [
                'product_id' => 1,
                'user_id' => 1,
                'rating' => 5,
                'comment' => 'Great product!',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 2,
                'user_id' => 1,
                'rating' => 4,
                'comment' => 'Very good, but could be improved.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 1,
                'user_id' => 1,
                'rating' => 5,
                'comment' => 'Excellent product, highly recommend!',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 1,
                'user_id' => 2,
                'rating' => 4,
                'comment' => 'Very good quality, but a bit expensive.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 2,
                'user_id' => 1,
                'rating' => 3,
                'comment' => 'Average product, meets expectations.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 2,
                'user_id' => 3,
                'rating' => 4,
                'comment' => 'Good product, but delivery was late.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 3,
                'user_id' => 2,
                'rating' => 5,
                'comment' => 'Amazing! Exceeded my expectations.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 3,
                'user_id' => 3,
                'rating' => 2,
                'comment' => 'Not satisfied, had some issues.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 4,
                'user_id' => 4,
                'rating' => 5,
                'comment' => 'Perfect, just what I needed.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 4,
                'user_id' => 5,
                'rating' => 3,
                'comment' => 'It is okay, could be better.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 5,
                'user_id' => 5,
                'rating' => 4,
                'comment' => 'Good value for money.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 5,
                'user_id' => 4,
                'rating' => 4,
                'comment' => 'Satisfied with the purchase.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more test data as needed
        ]);
    }
}

