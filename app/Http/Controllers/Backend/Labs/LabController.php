<?php

namespace App\Http\Controllers\Backend\Labs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LabController extends Controller
{
    public function index()
    {
        $labs = [
            [
                'id' => 1,
                'title' => 'Network Lab',
                'description' => 'Lab for network configurations and testing.',
                'scope' => 'Networks',
                'image' => 'path/to/network-lab-image.jpg',
                'iframe' => '<iframe src="https://example.com/network-lab" width="600" height="400"></iframe>',
                'docs' => [
                    ['title' => 'Network Lab Documentation', 'link' => 'https://example.com/network-lab-docs']
                ],
                'tags' => ['Networks', 'Configuration', 'Testing'],
                'files' => [
                    ['name' => 'Network Config File', 'link' => 'path/to/network-config-file.txt']
                ],
                'contributors' => [
                    ['name' => 'John Doe', 'profile_image' => 'path/to/john-doe-profile.jpg'],
                    ['name' => 'Jane Smith', 'profile_image' => 'path/to/jane-smith-profile.jpg']
                ]
            ],
            [
                'id' => 2,
                'title' => 'SD-WAN Lab',
                'description' => 'Lab for SD-WAN configurations and testing.',
                'scope' => 'SD-WAN',
                'image' => 'path/to/sd-wan-lab-image.jpg',
                'iframe' => '<iframe src="https://example.com/sd-wan-lab" width="600" height="400"></iframe>',
                'docs' => [
                    ['title' => 'SD-WAN Lab Documentation', 'link' => 'https://example.com/sd-wan-lab-docs']
                ],
                'tags' => ['SD-WAN', 'Configuration', 'Testing'],
                'files' => [
                    ['name' => 'SD-WAN Config File', 'link' => 'path/to/sd-wan-config-file.txt']
                ],
                'contributors' => [
                    ['name' => 'Alice Johnson', 'profile_image' => 'path/to/alice-johnson-profile.jpg'],
                    ['name' => 'Bob Brown', 'profile_image' => 'path/to/bob-brown-profile.jpg']
                ]
            ],
            [
                'id' => 3,
                'title' => 'Cybersecurity Lab',
                'description' => 'Lab for cybersecurity training and simulations.',
                'scope' => 'Cybersecurity',
                'image' => 'path/to/cybersecurity-lab-image.jpg',
                'iframe' => '<iframe src="https://example.com/cybersecurity-lab" width="600" height="400"></iframe>',
                'docs' => [
                    ['title' => 'Cybersecurity Lab Documentation', 'link' => 'https://example.com/cybersecurity-lab-docs']
                ],
                'tags' => ['Cybersecurity', 'Training', 'Simulations'],
                'files' => [
                    ['name' => 'Cybersecurity Config File', 'link' => 'path/to/cybersecurity-config-file.txt']
                ],
                'contributors' => [
                    ['name' => 'Charlie Davis', 'profile_image' => 'path/to/charlie-davis-profile.jpg'],
                    ['name' => 'Dana White', 'profile_image' => 'path/to/dana-white-profile.jpg']
                ]
            ],
            [
                'id' => 4,
                'title' => 'Cloud Computing Lab',
                'description' => 'Lab for cloud computing configurations and testing.',
                'scope' => 'Cloud Computing',
                'image' => 'path/to/cloud-computing-lab-image.jpg',
                'iframe' => '<iframe src="https://example.com/cloud-computing-lab" width="600" height="400"></iframe>',
                'docs' => [
                    ['title' => 'Cloud Computing Lab Documentation', 'link' => 'https://example.com/cloud-computing-lab-docs']
                ],
                'tags' => ['Cloud Computing', 'Configuration', 'Testing'],
                'files' => [
                    ['name' => 'Cloud Config File', 'link' => 'path/to/cloud-config-file.txt']
                ],
                'contributors' => [
                    ['name' => 'Eve Black', 'profile_image' => 'path/to/eve-black-profile.jpg'],
                    ['name' => 'Frank Green', 'profile_image' => 'path/to/frank-green-profile.jpg']
                ]
            ],
        ];

        return Inertia::render('Labs/Index', ['labs' => $labs]);
    }
}
