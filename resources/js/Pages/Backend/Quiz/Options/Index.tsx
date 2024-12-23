import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Option {
    id: number;
    option_text: string;
    is_correct: boolean;
}

interface Props {
    options: {
        data: Option[];
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };
}

const Index: React.FC<Props> = ({ options }) => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <InertiaLink href={route('options.create')} className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                        </svg>
                        Create New Option
                    </InertiaLink>
                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Options</h1>
                    <ul className="mb-4">
                        {options.data.map((option) => (
                            <li key={option.id} className="mb-2">
                                <div className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-gray-100 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-700" role="alert">
                                    <div className="text-sm font-normal">
                                        <InertiaLink href={route('options.show', option.id)} className="text-blue-600 hover:underline">
                                            {option.option_text} {option.is_correct ? '(Correct)' : ''}
                                        </InertiaLink>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center md:space-x-4 text-center">
                    {options.links.map((link, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1 md:p-2">
                            <InertiaLink href={link.url} className={`text-lg font-medium inline-flex items-center ${link.active ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'} hover:underline`}>
                                {link.label}
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </InertiaLink>
                        </div>
                    ))}
                </div>
            </div>
            </div>
    );
};

export default Index;
