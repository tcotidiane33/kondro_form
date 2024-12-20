import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Material {
    id: number;
    title: string;
    type: string;
    content: string;
    content_url: string;
}

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
    materials: Material[];
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
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Matériaux</h2>
                {lesson.materials.length > 0 ? (
                    <ul>
                        {lesson.materials.map((material) => (
                            <li key={material.id} className=" mb-2 px-5 py-3 text-gray-200 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600" >
                                <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                {material.title}
                                <span className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center m-2 mb-2">({material.type})</span>
                                <a href={material.content_url} target="_blank" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 m-2" rel="noopener noreferrer">Cliquer ici pour voir le matériel</a>

                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun matériel</p>
                )}
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
