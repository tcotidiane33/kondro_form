import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import DeleteLessonModal from './DeleteLessonModal';

interface Lesson {
    id: number;
    title: string;
    description: string;
}

interface Props {
    lessons: Lesson[];
}

const LessonIndex: React.FC<Props> = ({ lessons }) => {
    const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);

    const handleDeleteClick = (lessonId: number) => {
        setSelectedLessonId(lessonId);
    };

    const handleCloseModal = () => {
        setSelectedLessonId(null);
    };

    return (
        <div className="container mx-auto p-4 mt-4 rounded-lg" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%,rgb(169, 196, 230) 39%,rgb(222, 208, 208) 76%,rgba(166, 164, 164, 0.8) 100%)' }}>
            <h1 className="text-2xl font-bold mb-4">Leçons</h1>
            <InertiaLink href="/lessons/create" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Ajouter une Leçon</span>
            </InertiaLink>
            <div className="relative overflow-x-auto rounded-md shadow-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-2">Titre</th>
                            <th scope="col" className="px-4 py-2">Description</th>
                            <th scope="col" className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lessons.map((lesson) => (
                            <tr key={lesson.id} className="hover:bg-gray-100 transition  duration-300 ease-in-out bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className=" px-4 py-2">{lesson.title}</td>
                                <td className=" px-4 py-2">{lesson.description}</td>
                                <td className=" px-4 py-2  space-x-2">
                                    <InertiaLink href={`/lessons/${lesson.id}/edit`} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                        <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Éditer
                                        </span>
                                    </InertiaLink>
                                    <InertiaLink href={`/lessons/${lesson.id}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Voir
                                        </span>
                                    </InertiaLink>
                                    <button onClick={() => handleDeleteClick(lesson.id)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                        <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Supprimer</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedLessonId && (
                <DeleteLessonModal lessonId={selectedLessonId} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default LessonIndex;
