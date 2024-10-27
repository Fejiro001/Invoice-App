<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Model representing an invoice item.
 * 
 * This class extends the Eloquent Model and uses the HasFactory trait.
 * It defines a relationship with the Invoice model and includes a method to update the total of the associated invoice when an item is saved or deleted.
 */
class InvoiceItem extends Model
{
    /** @use HasFactory<\Database\Factories\InvoiceItemFactory> */
    use HasFactory;

    /**
     * Define a relationship where an InvoiceItem belongs to an Invoice.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    /**
     * Perform actions when the 'InvoiceItem' model is booted.
     * Updates the total of the associated invoice when an item is saved or deleted.
     */
    protected static function booted()
    {
        static::saved(function ($item) {
            if ($item->invoice) {
                $item->invoice->updateTotal();
            }
        });

        static::deleted(function ($item) {
            if ($item->invoice) {
                $item->invoice->updateTotal();
            }
        });
    }
}
