import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';

interface Doc {
    title: string;
    link: string;
}

interface File {
    name: string;
    link: string;
}

interface Contributor {
    name: string;
    profile_image: string;
}

interface Lab {
    id: number;
    title: string;
    description: string;
    scope: string;
    image: string;
    iframe: string;
    docs: Doc[];
    tags: string[];
    files: File[];
    contributors: Contributor[];
}

interface LabsIndexProps {
    labs: Lab[];
}

const LabsIndex: React.FC<LabsIndexProps> = ({ labs }) => {
    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Labs</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {labs.map(lab => (
                        <div key={lab.id} className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-900">{lab.title}</h3>
                            <p className="mt-2 text-sm text-gray-500">{lab.description}</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">Scope: {lab.scope}</p>
                            <img src={lab.image} alt={lab.title} className="mt-4 w-full h-48 object-cover rounded-md" />
                            <div className="mt-4" dangerouslySetInnerHTML={{ __html: lab.iframe }} />
                            <div className="mt-4">
                                <h4 className="text-md font-semibold text-gray-900">Documentation</h4>
                                <ul className="list-disc list-inside">
                                    {lab.docs.map((doc, index) => (
                                        <li key={index}>
                                            <a href={doc.link} className="text-indigo-600 hover:text-indigo-500">{doc.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-md font-semibold text-gray-900">Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                    {lab.tags.map((tag, index) => (
                                        <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-md font-semibold text-gray-900">Files</h4>
                                <ul className="list-disc list-inside">
                                    {lab.files.map((file, index) => (
                                        <li key={index}>
                                            <a href={file.link} className="text-indigo-600 hover:text-indigo-500">{file.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-md font-semibold text-gray-900">Contributors</h4>
                                <div className="flex flex-wrap gap-4">
                                    {lab.contributors.map((contributor, index) => (
                                        <div key={index} className="flex items-center">
                                            <img src={contributor.profile_image} alt={contributor.name} className="w-10 h-10 rounded-full object-cover mr-2" />
                                            <span className="text-sm text-gray-900">{contributor.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
};

export default LabsIndex;
