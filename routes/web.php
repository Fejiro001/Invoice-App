<?php

use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->middleware('guest');

Route::get('/home', [InvoiceController::class, 'index'])->middleware(['auth', 'verified'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/invoices/{invoice}', [InvoiceController::class, 'show'])->name('invoice.show');
    Route::get('/invoices/create', [InvoiceController::class, 'create'])->name('invoice.create');
    Route::post('/invoices', [InvoiceController::class, 'store'])->name('invoice.store');
    Route::get('/invoices/{invoice}/edit', [InvoiceController::class, 'edit'])->name('invoice.edit');
    Route::patch('/invoices/{invoice}', [InvoiceController::class, 'update'])->name('invoice.update');
    Route::delete('/invoices/{invoice}', [InvoiceController::class, 'destroy'])->name('invoice.destroy');
});

require __DIR__ . '/auth.php';
