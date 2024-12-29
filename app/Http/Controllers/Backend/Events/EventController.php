<?php


namespace App\Http\Controllers\Backend\Events;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Inertia\Inertia;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        $upcomingEvents = Event::where('date', '>=', now())->orderBy('date', 'asc')->get();
        $pastEvents = Event::where('date', '<', now())->orderBy('date', 'desc')->get();

        return Inertia::render('Events/Index', [
            'upcomingEvents' => $upcomingEvents,
            'pastEvents' => $pastEvents
        ]);
    }

    public function show($id)
    {
        $event = Event::findOrFail($id);

        return Inertia::render('Events/Show', [
            'event' => $event,
        ]);
    }
}
