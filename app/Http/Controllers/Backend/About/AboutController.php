<?php

namespace App\Http\Controllers\Backend\About;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        $missions = [
            'Fournir des solutions innovantes et de haute qualité.',
            'Promouvoir l\'excellence et l\'intégrité dans toutes nos actions.',
            'Soutenir le développement professionnel continu de nos employés.'
        ];

        $defis = [
            'Rester à la pointe de la technologie.',
            'Répondre aux besoins changeants de nos clients.',
            'Maintenir un haut niveau de satisfaction client.'
        ];

        $partenaires = [
            ['name' => 'Partenaire 1', 'logo' => 'path/to/partner1-logo.jpg'],
            ['name' => 'Partenaire 2', 'logo' => 'path/to/partner2-logo.jpg'],
            // Ajoutez d'autres partenaires ici...
        ];

        $certifications = [
            ['name' => 'Certification ISO 9001', 'logo' => 'path/to/iso9001-logo.jpg'],
            ['name' => 'Certification ISO 27001', 'logo' => 'path/to/iso27001-logo.jpg'],
            // Ajoutez d'autres certifications ici...
        ];

        $references = [
            ['name' => 'Client 1', 'logo' => 'path/to/client1-logo.jpg'],
            ['name' => 'Client 2', 'logo' => 'path/to/client2-logo.jpg'],
            // Ajoutez d'autres références ici...
        ];

        $experts = [
            ['name' => 'John Doe', 'role' => 'Expert en Réseaux', 'profile_image' => 'path/to/john-doe-profile.jpg', 'bio' => 'John est un expert en réseaux avec plus de 10 ans d\'expérience.', 'linkedin' => 'https://www.linkedin.com/in/johndoe'],
            ['name' => 'Jane Smith', 'role' => 'Expert en Sécurité', 'profile_image' => 'path/to/jane-smith-profile.jpg', 'bio' => 'Jane est une experte en sécurité avec une vaste expérience dans la cybersécurité.', 'linkedin' => 'https://www.linkedin.com/in/janesmith'],
            // Ajoutez d'autres experts ici...
        ];

        $contact = [
            'address' => '123 Rue de l\'Entreprise, 75000 Paris, France',
            'phone' => '+33 1 23 45 67 89',
            'email' => 'contact@entreprise.com'
        ];

        return Inertia::render('About/Index', [
            'missions' => $missions,
            'defis' => $defis,
            'partenaires' => $partenaires,
            'certifications' => $certifications,
            'references' => $references,
            'experts' => $experts,
            'contact' => $contact
        ]);
    }
}
