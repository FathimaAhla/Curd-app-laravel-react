<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Shops/Index', [
            'shops' => Shop::with('user')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Shops/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'website' => 'required|url',
            'contact' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'description' => 'required|string',
        ], [
            'name.required' => 'The name field is required.',
            'website.required' => 'The website field is required.',
            'website.url' => 'The website must be a valid URL.',
        ]);

        $request->user()->shops()->create($validated);

        return redirect(route('shops.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Shop $shop)
    {
        return Inertia::render('Shops/Show', [
            'shop' => $shop->load('user'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Shop $shop)
    {
        return Inertia::render('Shops/Edit', [
            'shop' => $shop,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Shop $shop)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'website' => 'required|url',
            'contact' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'description' => 'required|string',
        ], [
            'name.required' => 'The name field is required.',
            'website.required' => 'The website field is required.',
            'website.url' => 'The website must be a valid URL.',
        ]);

        $shop->update($validated);

        return redirect(route('shops.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shop $shop)
    {
        $shop->delete();

        return response()->json(['message' => 'shop deleted successfully']);
    }
}
