import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Answer {
    id: number;
    answer: string;
}

interface Props {
    answers: {
        data: Answer[];
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };
}

const Index: React.FC<Props> = ({ answers }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-4xl w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-md" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%, rgb(169, 196, 230) 39%, rgb(222, 208, 208) 76%, rgba(166, 164, 164, 0.8) 100%)' }}>
                <h1 className="text-2xl font-bold mb-6">Answers</h1>
                {/* <InertiaLink href={route('answers.create')} className="relative inline-flex items-center justify-center p-0.5 mb-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Create New Answer
                    </span>
                </InertiaLink> */}
                <ul className="mb-4">
                    {answers.data.map((answer) => (
                        <li key={answer.id} className="mb-2">
                            <InertiaLink href={route('answers.show', answer.id)} className="text-blue-600 hover:underline">
                                {answer.answer}
                            </InertiaLink>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center space-x-2">
                    {answers.links.map((link, index) => (
                        <InertiaLink key={index} href={link.url} className={`px-3 py-1 rounded-md ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                            {link.label}
                        </InertiaLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Index;
