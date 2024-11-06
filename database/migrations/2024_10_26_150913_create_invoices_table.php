<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Query\Expression;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->string('invoice_id')->primary();
            $table->date('invoice_date');
            $table->date('payment_due')->default('2024-01-01');
            $table->string('description');
            $table->integer('payment_terms');
            $table->string('client_name');
            $table->string('client_email');
            $table->string('status');
            $table->json('sender_address');
            $table->json('client_address');
            $table->decimal('total', 10, 2)->default(0.00);

            $table->timestamps(); //created_at column
        });

        Schema::create('invoice_items', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_id');
            $table->foreign('invoice_id')->references('invoice_id')->on('invoices')->cascadeOnDelete();
            $table->string('name');
            $table->integer('quantity');
            $table->decimal('price', 10, 2);
            $table->decimal('total', 10, 2);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
        Schema::dropIfExists('invoice_items');
    }
};
