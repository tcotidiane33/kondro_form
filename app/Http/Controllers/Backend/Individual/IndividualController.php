<?php

namespace App\Http\Controllers\Backend\Individual;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class IndividualController extends Controller
{
    public function index()
    {
        $courses = [
            ['title' => 'Introduction à la Programmation', 'description' => 'Apprenez les bases de la programmation.', 'duration' => '4 semaines'],
            ['title' => 'Développement Web Avancé', 'description' => 'Maîtrisez les techniques avancées de développement web.', 'duration' => '8 semaines'],
            // Ajoutez d'autres cours ici...
        ];

        $testimonials = [
            ['name' => 'Étudiant 1', 'feedback' => 'Les cours sont très bien structurés et faciles à suivre.', 'course' => 'Introduction à la Programmation'],
            ['name' => 'Étudiant 2', 'feedback' => 'J\'ai beaucoup appris grâce à ce programme.', 'course' => 'Développement Web Avancé'],
            // Ajoutez d'autres témoignages ici...
        ];

        return Inertia::render('Individual/Index', [
            'courses' => $courses,
            'testimonials' => $testimonials
        ]);
    }

    public function apply()
    {
        return Inertia::render('Individual/Apply');
    }

    public function storeApplication(Request $request)
    {
        // Logique pour stocker les données du formulaire de candidature
        // ...

        return redirect()->route('individual.index')->with('success', 'Votre candidature a été soumise avec succès.');
    }
}
