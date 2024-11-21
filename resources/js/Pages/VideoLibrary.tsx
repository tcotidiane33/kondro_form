import { useState } from 'react';

const VideoLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const videos = [
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React.js",
      url: "https://www.example.com/video1",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript features",
      url: "https://www.example.com/video2",
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      description: "Master CSS Grid Layout",
      url: "https://www.example.com/video3",
    },
    // Ajoutez d'autres vidéos ici
  ];

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900">Video Library</h2>
      <div className="mt-4">
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <div key={video.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">{video.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{video.description}</p>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;