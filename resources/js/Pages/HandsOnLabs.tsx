import { useState } from 'react';

const HandsOnLabs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const labs = [
    {
      id: 1,
      title: "Linux Basics Lab",
      description: "Get hands-on experience with Linux commands and scripting.",
      url: "https://www.example.com/lab1",
    },
    {
      id: 2,
      title: "Network Configuration Lab",
      description: "Learn how to configure network devices and troubleshoot issues.",
      url: "https://www.example.com/lab2",
    },
    {
      id: 3,
      title: "Web Development Lab",
      description: "Build and deploy a full-stack web application.",
      url: "https://www.example.com/lab3",
    },
  ];

  const filteredLabs = labs.filter(lab =>
    lab.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lab.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900">Hands-on Labs</h2>
      <div className="mt-4">
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search labs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map(lab => (
          <div key={lab.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">{lab.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{lab.description}</p>
            <a
              href={lab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Start Lab
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HandsOnLabs;