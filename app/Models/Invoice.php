<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Invoice extends Model
{
    /** @use HasFactory<\Database\Factories\InvoiceFactory> */
    use HasFactory;

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'invoice_id';

    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The data type of the primary key ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    // Boot method to automatically generate an ID on creation
    protected static function booted()
    {
        static::creating(function ($invoice) {
            $invoice->invoice_id = self::generateUniqueID();
        });
    }

    // Method to generate a unique ID in the format of XX1234
    public static function generateUniqueID()
    {
        do {
            // Generate a random ID: 2 uppercase letters + 4 digits
            $id = strtoupper(Str::random(2)) . rand(1000, 9999);
        } while (self::where('invoice_id', $id)->exists()); // Ensure uniqueness

        return $id;
    }
}
