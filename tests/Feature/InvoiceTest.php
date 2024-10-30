<?php

namespace Tests\Feature;

use App\Models\Invoice;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InvoiceTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_index_shows_all_invoices(): void
    {
        // Create a user and authenticate
        $user = User::factory()->create();
        $this->actingAs($user);

        Invoice::factory()->count(count: 8)->create();

        $response = $this->get('/home');

        $response->assertStatus(200)
            ->assertInertia(fn($page) => $page
                ->component('Invoice/Index')
                ->has('invoice.data', 8));

    }
    public function test_show_displays_selected_invoice(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $invoice = Invoice::factory()->create();

        $response = $this->get(route('invoice.show', $invoice->invoice_id));

        $response->assertStatus(200)
            ->assertInertia(fn($page) => $page
                ->component('Invoice/Show')
                ->has('invoice', fn($page) => $page
                    ->where('invoice_id', $invoice->invoice_id)
                    ->etc()));
    }
}
