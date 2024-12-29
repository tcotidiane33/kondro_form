<?php

namespace App\Http\Controllers\Backend\Business;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class BusinessController extends Controller
{
    public function index()
    {
        $services = [
            'Formation en entreprise',
            'Consultation en technologie',
            'Développement de compétences',
            'Solutions de cybersécurité',
            'Gestion de projets IT'
        ];

        $testimonials = [
            ['name' => 'Client 1', 'feedback' => 'Excellent service et support.', 'company' => 'Entreprise A'],
            ['name' => 'Client 2', 'feedback' => 'Formation de haute qualité.', 'company' => 'Entreprise B'],
            // Ajoutez d'autres témoignages ici...
        ];

        $jobOpenings = [
            ['title' => 'Consultant en Technologie', 'location' => 'Paris, France', 'type' => 'Temps plein'],
            ['title' => 'Chef de Projet IT', 'location' => 'Lyon, France', 'type' => 'Temps plein'],
            // Ajoutez d'autres offres d'emploi ici...
        ];

        return Inertia::render('Business/Index', [
            'services' => $services,
            'testimonials' => $testimonials,
            'jobOpenings' => $jobOpenings
        ]);
    }
}
