<?php

namespace App\Http\Controllers\Backend\Forums;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ForumController extends Controller
{
    public function index()
    {
        $discussions = [
            [
                'id' => 1,
                'title' => 'How to configure VLAN?',
                'content' => 'I need help with configuring VLAN on my network.',
                'tags' => ['VLAN', 'Networking'],
                'author' => 'John Doe',
                'created_at' => '2023-01-01',
                'replies' => [
                    ['author' => 'Jane Smith', 'content' => 'You can configure VLAN by...', 'votes' => 5],
                    ['author' => 'Alice Johnson', 'content' => 'Another way to configure VLAN is...', 'votes' => 3],
                ]
            ],
            [
                'id' => 2,
                'title' => 'Best practices for SD-WAN deployment?',
                'content' => 'What are the best practices for deploying SD-WAN?',
                'tags' => ['SD-WAN', 'Deployment'],
                'author' => 'Alice Johnson',
                'created_at' => '2023-02-15',
                'replies' => [
                    ['author' => 'Bob Brown', 'content' => 'For SD-WAN deployment, you should...', 'votes' => 7],
                ]
            ],
            // Ajoutez d'autres discussions ici...
        ];

        return Inertia::render('Forums/Index', ['discussions' => $discussions]);
    }
}
