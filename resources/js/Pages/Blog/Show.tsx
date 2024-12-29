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

interface BlogShowProps {
    article: Article;
}

const BlogShow: React.FC<BlogShowProps> = ({ article }) => {
    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">{article.title}</h2>
                <img src={article.image} alt={article.title} className="w-full h-96 object-cover rounded-md mt-4" />
                <p className="mt-4 text-sm text-gray-900 font-bold">By {article.author} on {new Date(article.created_at).toLocaleDateString()}</p>
                <div className="mt-4 flex space-x-2">
                    {article.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag}</span>
                    ))}
                </div>
                <div className="mt-4 text-gray-700">
                    {article.content}
                </div>
                <Link
                    href="/blog"
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Back to Blog
                </Link>
            </div>
        </PublicLayout>
    );
};

export default BlogShow;
