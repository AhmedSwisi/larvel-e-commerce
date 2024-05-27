<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;
use App\Models\Product;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReviewRequest $request, $product)
    {
        if (!auth()->check()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Check if the user has already reviewed this product
        $existingReview = Review::where('user_id', auth()->id())
                                 ->where('product_id', $product)
                                 ->first();

        if ($existingReview) {
            return back()->withErrors(['error' => 'You have already reviewed this product.']);
        }

        $validated = $request->validate([
            'comment' => 'required|string|max:255',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $product_object = Product::find($product);
        if (!$product_object) {
            return back()->withErrors(['error' => 'Product not found.']);
        }

        $review = new Review();
        $review->product_id = $product;
        $review->comment = $validated['comment'];
        $review->user_id = auth()->user()->id;
        $review->rating = $validated['rating'];
        $review->save();

        $rating = $product_object->rating ? json_decode($product->rating, true) : [
            '1' => 0,
            '2' => 0,
            '3' => 0,
            '4' => 0,
            '5' => 0,
            'average' => 0,
            'total' => 0
        ];

        $rating[$validated['rating']] += 1;
        $rating['total'] += 1;
        $totalRating = 0;
        for ($i = 1; $i <= 5; $i++) {
            $totalRating += $i * $rating[$i];
        }

        $rating['average'] = $totalRating / $rating['total'];

        // Save the updated rating back to the product
        $product_object->rating = $rating;
        $product_object->save();
        return redirect()->back()->with('success', 'Review added successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReviewRequest $request, Review $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        //
    }
}
