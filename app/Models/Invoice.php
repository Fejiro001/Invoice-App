<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Database\Eloquent\Builder;
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

    /**
     * Define actions to be performed when the 'Invoice' model is booted.
     * Automatically sets the 'invoice_id' attribute using the 'generateUniqueID' method on creation.
     */
    protected static function booted()
    {
        static::creating(function ($invoice) {
            $invoice->invoice_id = self::generateUniqueID();
        });
    }

    public static function generateRandomLetters($length = 2)
    {
        $characters = 'abcdefghijklmnopqrstuvwxyz';
        $characterLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $characterLength - 1)];
        }
        return $randomString;
    }

    /**
     * Generate a unique invoice ID.
     * 
     * This method generates a random unique ID for an invoice in the format of XX1234.
     * It ensures the uniqueness of the generated ID by checking if it already exists in the database.
     *
     * @return string The unique invoice ID generated.
     */
    // Method to generate a unique ID in the format of XX1234
    public static function generateUniqueID()
    {
        do {
            // Generate a random ID: 2 uppercase letters + 4 digits
            $id = strtoupper(self::generateRandomLetters()) . rand(1000, 9999);
        } while (self::where('invoice_id', $id)->exists()); // Ensure uniqueness

        return $id;
    }

    /**
     * Get all the items associated with the invoice.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany The items associated with the invoice.
     */
    public function items()
    {
        return $this->hasMany(InvoiceItem::class, 'invoice_id');
    }

    /**
     * Update an invoice total amount due by summing up the total of all associated items and saving the updated total.
     */
    public function updateTotal()
    {
        $this->total = $this->items()->sum('total');
        $this->save();
    }

    /**
     * Calculate and update the payment due date for the invoice.
     *
     * This method calculates the payment due date by adding the payment terms
     * to the invoice date and saves the updated payment due date to the database.
     *
     * @throws \Exception If the invoice date is not set.
     */
    public function calculatePaymentDue()
    {
        if ($this->invoice_date) {
            $this->payment_due = Carbon::parse($this->invoice_date)->addDays($this->payment_terms);
            $this->save();
        } else {
            throw new \Exception("Invoice Date is not set.");
        }
    }

    /**
     * Filter the query results by the given status.
     *
     * If the provided status is an array and not empty, filters the query to include only records with the specified status.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query The query builder instance.
     * @param mixed $status The status or array of statuses to filter by.
     * @return \Illuminate\Database\Eloquent\Builder The modified query builder instance.
     */
    public function scopeStatusFilter($query, $status)
    {
        if (is_array($status) && !empty($status)) {
            $query->whereIn('status', $status);
        }

        return $query;
    }
}
