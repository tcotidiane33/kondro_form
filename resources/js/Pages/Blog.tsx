import { useState } from 'react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      author: "John Doe",
      date: "October 10, 2023",
      excerpt: "Explore the latest trends and technologies shaping the future of web development.",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      author: "Jane Smith",
      date: "September 25, 2023",
      excerpt: "A deep dive into the concept of closures in JavaScript and how to use them effectively.",
    },
    {
      id: 3,
      title: "CSS Grid vs. Flexbox",
      author: "Alice Johnson",
      date: "August 15, 2023",
      excerpt: "A comparison of CSS Grid and Flexbox, and when to use each layout system.",
    },
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900">Blog</h2>
      <div className="mt-4">
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mt-8 space-y-6">
        {filteredPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
            <p className="mt-2 text-sm text-gray-500">By {post.author} on {post.date}</p>
            <p className="mt-2 text-sm text-gray-500">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;