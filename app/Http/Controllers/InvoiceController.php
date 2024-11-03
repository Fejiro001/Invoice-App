<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    /**
     * Display all invoices from the database.
     */
    public function index(Request $request)
    {
        $statusQuery = Invoice::query();
        $status = $request->input('status');

        $totalInvoices = $statusQuery->count();

        $invoices = $statusQuery
            ->statusFilter($status)
            ->paginate(8);

        return Inertia::render('Invoice/Index', [
            'invoice' => $invoices,
            'totalInvoice' => $totalInvoices
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     return Inertia::render('Invoice/Create');
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice)
    {
        $invoice->sender_address = json_decode($invoice->sender_address);
        $invoice->client_address = json_decode($invoice->client_address);

        // Load related invoice items
        $invoice->load('items');

        return Inertia::render('Invoice/Show', [
            'invoice' => $invoice
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
