<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;

Route::redirect('/', "/dashboard");


Route::middleware(['auth','verified'])->group(function() {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/users', function () {
    return Inertia::render('Users/User');
});

Route::get('/shop', [ProductController::class, 'index'])->name('shop.index');

Route::get('/shop/{product}', [ProductController::class, 'show'])->name('shop.show');

Route::post('/shop/{product}', [ReviewController::class, 'store'])->name('reviews.store');



require __DIR__.'/auth.php';
