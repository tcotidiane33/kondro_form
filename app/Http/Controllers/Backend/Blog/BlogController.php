<?php

namespace App\Http\Controllers\Backend\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $articles = [
            [
                'id' => 1,
                'title' => 'Understanding VLANs',
                'content' => 'VLANs are used to segment network traffic...',
                'author' => 'John Doe',
                'created_at' => '2023-01-01',
                'tags' => ['Networking', 'VLAN'],
                'image' => 'path/to/vlan-article-image.jpg'
            ],
            [
                'id' => 2,
                'title' => 'Introduction to SD-WAN',
                'content' => 'SD-WAN simplifies the management and operation of a WAN...',
                'author' => 'Jane Smith',
                'created_at' => '2023-02-15',
                'tags' => ['Networking', 'SD-WAN'],
                'image' => 'path/to/sd-wan-article-image.jpg'
            ],
            // Ajoutez d'autres articles ici...
        ];

        return Inertia::render('Blog/Index', ['articles' => $articles]);
    }

    public function show($id)
    {
        $article = [
            'id' => $id,
            'title' => 'Understanding VLANs',
            'content' => 'VLANs are used to segment network traffic...',
            'author' => 'John Doe',
            'created_at' => '2023-01-01',
            'tags' => ['Networking', 'VLAN'],
            'image' => 'path/to/vlan-article-image.jpg'
        ];

        return Inertia::render('Blog/Show', ['article' => $article]);
    }
}
