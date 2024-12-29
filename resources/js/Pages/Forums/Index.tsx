import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';

interface Reply {
    author: string;
    content: string;
    votes: number;
}

interface Discussion {
    id: number;
    title: string;
    content: string;
    tags: string[];
    author: string;
    created_at: string;
    replies: Reply[];
}

interface ForumsIndexProps {
    discussions: Discussion[];
}

const ForumsIndex: React.FC<ForumsIndexProps> = ({ discussions }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<'date' | 'votes'>('date');

    const filteredDiscussions = discussions.filter(discussion =>
        (discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        discussion.content.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedTags.length === 0 || selectedTags.some(tag => discussion.tags.includes(tag)))
    );

    const sortedDiscussions = filteredDiscussions.sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        } else {
            const aVotes = a.replies.reduce((sum, reply) => sum + reply.votes, 0);
            const bVotes = b.replies.reduce((sum, reply) => sum + reply.votes, 0);
            return bVotes - aVotes;
        }
    });

    const toggleTag = (tag: string) => {
        setSelectedTags(prevTags =>
            prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
        );
    };

    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Forums</h2>
                <div className="mt-4">
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search discussions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="mt-4 flex space-x-4">
                    <button
                        className={`px-4 py-2 rounded-md ${sortBy === 'date' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setSortBy('date')}
                    >
                        Sort by Date
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${sortBy === 'votes' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setSortBy('votes')}
                    >
                        Sort by Votes
                    </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {['VLAN', 'Networking', 'SD-WAN', 'Deployment'].map(tag => (
                        <button
                            key={tag}
                            className={`px-4 py-2 rounded-md ${selectedTags.includes(tag) ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => toggleTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="mt-8 grid grid-cols-1 gap-6">
                    {sortedDiscussions.map(discussion => (
                        <div key={discussion.id} className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-900">{discussion.title}</h3>
                            <p className="mt-2 text-sm text-gray-500">{discussion.content}</p>
                            <div className="mt-4 flex space-x-2">
                                {discussion.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-4">
                                <h4 className="text-md font-semibold text-gray-900">Replies</h4>
                                <ul className="list-disc list-inside">
                                    {discussion.replies.map((reply, index) => (
                                        <li key={index} className="mt-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-900">{reply.author}</span>
                                                <span className="text-sm text-gray-500">{reply.votes} votes</span>
                                            </div>
                                            <p className="text-sm text-gray-500">{reply.content}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
};

export default ForumsIndex;
