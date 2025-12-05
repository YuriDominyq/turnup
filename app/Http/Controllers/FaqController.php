<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::where('admin_id', Auth::id())
                    ->orderByDesc('id')
                    ->get();

        return Inertia::render('operator/information', [
            'faqs' => $faqs,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required|string|max:255',
            'answer'   => 'required|string',
            'category' => 'required|string|max:100',
        ]);

        $validated['admin_id'] = Auth::id(); 

        $faq = Faq::create($validated);

        return back()->with(['faq' => $faq]);
    }
   
    public function update(Request $request, Faq $faq)
    {
        $this->authorize('update', $faq); 

        $validated = $request->validate([
            'question' => 'required|string|max:255',
            'answer'   => 'required|string',
            'category' => 'required|string|max:100',
        ]);

        $faq->update($validated);

        return back()->with(['faq' => $faq]);
    }

    public function destroy(Faq $faq)
    {
        $this->authorize('delete', $faq); 

        $faq->delete();

        return response()->json(['message' => 'FAQ deleted successfully']);
    }
}
