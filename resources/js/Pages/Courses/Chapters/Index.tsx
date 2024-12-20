import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Chapter {
    id: number;
    title: string;
    course: {
        id: number;
        title: string;
    };
}

interface Course {
    id: number;
    title: string;
}

interface Props {
    chapters: Chapter[];
    courses?: Course[]; // Ajout de ? pour indiquer que courses peut être indéfini
}

const ChapterIndex: React.FC<Props> = ({ chapters, courses = [] }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
    const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

    const filteredChapters = chapters.filter(chapter => {
        return (
            (selectedCourseId === null || chapter.course.id === selectedCourseId) &&
            chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className="container mx-auto p-4 mt-4 rounded-lg" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%,rgb(169, 196, 230) 39%,rgb(222, 208, 208) 76%,rgba(166, 164, 164, 0.8) 100%)' }}>
            <h1 className="text-2xl font-bold mb-4">Chapitres</h1>
            <div className="flex justify-between items-center mb-4">
                <InertiaLink href="/chapters/create" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Ajouter un Chapitre
                    </span>
                </InertiaLink>
                <div className="flex space-x-4">
                    <select
                        aria-label="Filtrer par cours"
                        className="form-select px-4 py-2 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                        value={selectedCourseId || ''}
                        onChange={(e) => setSelectedCourseId(e.target.value ? parseInt(e.target.value) : null)}
                    >
                        <option value="">Tous les cours</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.id}>{course.title}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        className="form-input px-4 py-2 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Rechercher un chapitre..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-end mb-4">
                <button
                    className={`p-3 ${viewMode === 'list' ? 'text-indigo-600' : 'text-gray-100'}`}
                    onClick={() => setViewMode('list')}
                    title="List View"
                >
                    <i className="fas fa-list"></i>
                    </button>
                <button
                    className={`p-3 ${viewMode === 'grid' ? 'text-purple-600' : 'text-gray-100'}`}
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                >
                    <i className="fas fa-th"></i>
                </button>
            </div>
            {viewMode === 'list' ? (
                <div className="relative overflow-x-auto rounded-lg shadow-lg p-4 bg-white">
                    {filteredChapters.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {filteredChapters.map((chapter) => (
                                <li key={chapter.id} className="py-4">
                                    <InertiaLink href={`/chapters/${chapter.id}`} className="flex justify-between items-center text-indigo-600 hover:text-indigo-900">
                                        <span>{chapter.title}</span>
                                        <span className="text-gray-500">{chapter.course.title}</span>
                                    </InertiaLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">Aucun chapitre trouvé.</p>
                    )}
                </div>
            ) : (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Chapitres</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredChapters.map((chapter) => (
                            <div key={chapter.id} className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-bold mb-2">{chapter.title}</h3>
                                <p className="text-gray-700 mb-4">Course: {chapter.course.title}</p>
                                <InertiaLink href={`/chapters/${chapter.id}`} className="text-indigo-600 hover:text-indigo-900">
                                    View Details
                                </InertiaLink>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChapterIndex;
