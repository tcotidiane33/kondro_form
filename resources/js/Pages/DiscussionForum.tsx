import { useState } from 'react';

const DiscussionForum = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const threads = [
    {
      id: 1,
      title: "How to get started with React?",
      author: "John Doe",
      replies: 5,
      lastReply: "2 hours ago",
    },
    {
      id: 2,
      title: "Best practices for CSS Grid",
      author: "Jane Smith",
      replies: 3,
      lastReply: "1 day ago",
    },
    {
      id: 3,
      title: "Understanding JavaScript closures",
      author: "Alice Johnson",
      replies: 8,
      lastReply: "3 days ago",
    },
  ];

  const filteredThreads = threads.filter(thread =>
    thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900">Discussion Forum</h2>
      <div className="mt-4">
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search threads..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mt-8">
        {filteredThreads.map(thread => (
          <div key={thread.id} className="bg-white rounded-lg shadow p-6 mb-4">
            <h3 className="text-lg font-medium text-gray-900">{thread.title}</h3>
            <p className="mt-2 text-sm text-gray-500">Started by {thread.author}</p>
            <p className="mt-2 text-sm text-gray-500">{thread.replies} replies</p>
            <p className="mt-2 text-sm text-gray-500">Last reply {thread.lastReply}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;