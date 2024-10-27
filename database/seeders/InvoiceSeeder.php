<?php

namespace Database\Seeders;

use App\Models\Invoice;
use App\Models\InvoiceItem;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class InvoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Invoice::factory()
            ->count(10)
            ->create()
            ->each(function ($invoice) {
                InvoiceItem::factory()
                    ->count(3)
                    ->create(['invoice_id' => $invoice->invoice_id]);
            });
    }
}
