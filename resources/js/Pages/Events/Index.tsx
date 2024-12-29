import React from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

interface Event {
    id: number;
    title: string;
    description: string;
    location: string;
    image: string;
    topic: string;
    goal: string;
    hosted_by: string;
    date: string;
}

interface EventsIndexProps {
    upcomingEvents: Event[];
    pastEvents: Event[];
}

const EventsIndex: React.FC<EventsIndexProps> = ({ upcomingEvents, pastEvents }) => {
    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Upcoming Events</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingEvents.map(event => (
                        <div key={event.id} className="bg-white rounded-lg shadow p-6">
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="text-lg font-medium text-gray-900 mt-4">{event.title}</h3>
                            <p className="mt-2 text-sm text-gray-500">{event.description}</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">{event.date}</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">Location: {event.location}</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">Hosted by: {event.hosted_by}</p>
                            <Link
                                href={`/events/${event.id}`}
                                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900 mt-12">Past Events</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pastEvents.map(event => (
                        <div key={event.id} className="bg-white rounded-lg shadow p-6">
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="text-lg font-medium text-gray-900 mt-4">{event.title}</h3>
                            <p className="mt-2 text-sm text-gray-500">{event.description}</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">{event.date}</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">Location: {event.location}</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">Hosted by: {event.hosted_by}</p>
                            <Link
                                href={`/events/${event.id}`}
                                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
};

export default EventsIndex;
