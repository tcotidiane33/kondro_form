import { useState } from 'react';

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    {
      id: 1,
      title: "React Conference 2023",
      date: "November 15, 2023",
      location: "San Francisco, CA",
      description: "Join us for a day of talks and workshops on React and related technologies.",
    },
    {
      id: 2,
      title: "JavaScript Summit",
      date: "December 5, 2023",
      location: "New York, NY",
      description: "A summit for JavaScript developers to learn and network.",
    },
    {
      id: 3,
      title: "CSS Design Awards",
      date: "January 20, 2024",
      location: "Los Angeles, CA",
      description: "Celebrating the best in CSS design and innovation.",
    },
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900">Events</h2>
      <div className="mt-4">
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mt-8 space-y-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{event.date} - {event.location}</p>
            <p className="mt-2 text-sm text-gray-500">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;