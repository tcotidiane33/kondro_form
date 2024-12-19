import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Lesson {
    id: number;
    title: string;
    description: string;
    notes: string;
    course: {
        id: number;
        title: string;
    };
    chapter: {
        id: number;
        title: string;
    };
}

interface Props {
    lesson: Lesson;
}

const ShowLesson: React.FC<Props> = ({ lesson }) => {
    return (
        <div className="container mx-auto p-4 mt-4 rounded-lg" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%,rgb(169, 196, 230) 39%,rgb(222, 208, 208) 76%,rgba(166, 164, 164, 0.8) 100%)' }}>
            <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Cours</h2>
                <p>{lesson.course.title}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Chapitre</h2>
                <p>{lesson.chapter.title}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Description</h2>
                <div dangerouslySetInnerHTML={{ __html: lesson.description }} />
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Notes</h2>
                <div dangerouslySetInnerHTML={{ __html: lesson.notes }} />
            </div>
            <InertiaLink href="/lessons" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Retour à la liste
                </span>
            </InertiaLink>
        </div>
    );
};

export default ShowLesson;
