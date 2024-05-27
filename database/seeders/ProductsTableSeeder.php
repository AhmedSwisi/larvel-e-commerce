<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'name' => 'Product 1',
                'description' => 'Description for product 1',
                'stock' => 10,
                'price' => 29.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 4.5, 'reviews' => 10]),
                'image_path' => 'images/product1.jpg',
            ],
            [
                'name' => 'Product 2',
                'description' => 'Description for product 2',
                'stock' => 5,
                'price' => 49.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 4.0, 'reviews' => 8]),
                'image_path' => 'images/product2.jpg',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Description for product 3',
                'stock' => 20,
                'price' => 19.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 5.0, 'reviews' => 15]),
                'image_path' => 'images/product3.jpg',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Description for product 3',
                'stock' => 20,
                'price' => 19.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 5.0, 'reviews' => 15]),
                'image_path' => 'images/product3.jpg',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Description for product 3',
                'stock' => 20,
                'price' => 19.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 5.0, 'reviews' => 15]),
                'image_path' => 'images/product3.jpg',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Description for product 3',
                'stock' => 20,
                'price' => 19.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 5.0, 'reviews' => 15]),
                'image_path' => 'images/product3.jpg',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Description for product 3',
                'stock' => 20,
                'price' => 19.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 5.0, 'reviews' => 15]),
                'image_path' => 'images/product3.jpg',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Description for product 3',
                'stock' => 20,
                'price' => 19.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 5.0, 'reviews' => 15]),
                'image_path' => 'images/product3.jpg',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Description for product 3',
                'stock' => 20,
                'price' => 19.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 5.0, 'reviews' => 15]),
                'image_path' => 'images/product3.jpg',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Description for product 3',
                'stock' => 20,
                'price' => 19.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 5.0, 'reviews' => 15]),
                'image_path' => 'images/product3.jpg',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Description for product 3',
                'stock' => 20,
                'price' => 19.99,
                'created_at' => now(),
                'updated_at' => now(),
                'rating' => json_encode(['rating' => 5.0, 'reviews' => 15]),
                'image_path' => 'images/product3.jpg',
            ],
        ]);
    }
}
