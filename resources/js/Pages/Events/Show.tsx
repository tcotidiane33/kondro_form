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

interface EventShowProps {
    event: Event;
}

const EventShow: React.FC<EventShowProps> = ({ event }) => {
    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">{event.title}</h2>
                <img src={event.image} alt={event.title} className="w-full h-96 object-cover rounded-md mt-4" />
                <p className="mt-4 text-sm text-gray-900 font-bold">{event.date}</p>
                <p className="mt-2 text-sm text-gray-900 font-bold">Location: {event.location}</p>
                <p className="mt-2 text-sm text-gray-900 font-bold">Hosted by: {event.hosted_by}</p>
                <div className="mt-4 text-gray-700">
                    {event.description}
                </div>
                <Link
                    href="/events"
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Back to Events
                </Link>
            </div>
        </PublicLayout>
    );
};

export default EventShow;
