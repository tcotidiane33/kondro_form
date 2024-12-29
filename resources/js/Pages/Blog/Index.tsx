import React from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    created_at: string;
    tags: string[];
    image: string;
}

interface BlogIndexProps {
    articles: Article[];
}

const BlogIndex: React.FC<BlogIndexProps> = ({ articles }) => {
    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Blog</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map(article => (
                        <div key={article.id} className="bg-white rounded-lg shadow p-6">
                            <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="text-lg font-medium text-gray-900 mt-4">{article.title}</h3>
                            <p className="mt-2 text-sm text-gray-500">{article.content.substring(0, 100)}...</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">By {article.author} on {new Date(article.created_at).toLocaleDateString()}</p>
                            <div className="mt-4 flex space-x-2">
                                {article.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag}</span>
                                ))}
                            </div>
                            <Link
                                href={`/blog/${article.id}`}
                                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
};

export default BlogIndex;
