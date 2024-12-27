<?php

namespace App\Http\Controllers\Backend\Certifications;

use App\Http\Controllers\Controller;
use App\Models\Certification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificationController extends Controller
{
    public function index()
    {
        $certifications = Certification::where('is_pro', false)->get();
        $certificationsPro = Certification::where('is_pro', true)->get();
        $promotions = Certification::whereNotNull('discount')->get();

        return Inertia::render('Certifications/Index', [
            'certifications' => $certifications,
            'certificationsPro' => $certificationsPro,
            'promotions' => $promotions,
        ]);
    }

    public function show($id)
    {
        $certification = Certification::findOrFail($id);
        return Inertia::render('Certifications/Show', ['certification' => $certification]);
    }

    public function requestCertificate(Request $request)
    {
        // Logique pour demander une certification
        // Vous pouvez ajouter la logique pour vérifier si l'utilisateur a terminé le cours, etc.
        return response()->json(['message' => 'Certificate request sent successfully']);
    }
}
