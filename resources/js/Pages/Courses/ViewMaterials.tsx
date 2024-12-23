import React from 'react';

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
    materials: Material[];
}

interface Chapter {
    id: number;
    title: string;
    lessons: Lesson[];
}

interface Course {
    id: number;
    title: string;
    chapters: Chapter[];
}

interface Instructor {
    id: number;
    name: string;
    courses: Course[];
}

interface Props {
    instructors: Instructor[];
}

const ViewMaterials: React.FC<Props> = ({ instructors }) => {
    return (
        <div className="container mx-auto p-6 mt-4 rounded-lg" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%,rgb(169, 196, 230) 39%,rgb(222, 208, 208) 76%,rgba(166, 164, 164, 0.8) 100%)' }}>
            <h1 className="text-2xl font-bold mb-4">Matériaux par Instructeur, Cours, Leçons et Chapitres</h1>
            {instructors.length > 0 ? (
                instructors.map((instructor) => (
                    <div key={instructor.id} className="mb-6">
                        <h2 className="text-xl font-semibold">{instructor.name}</h2>
                        {instructor.courses.length > 0 ? (
                            instructor.courses.map((course) => (
                                <div key={course.id} className="mb-4">
                                    <h3 className="text-lg font-medium mb-2">{course.title}</h3>
                                    {course.chapters.length > 0 ? (
                                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                            {course.chapters.map((chapter) => (
                                                <li key={chapter.id} className="mb-10 ml-6">
                                                    <span className="absolute flex items-center justify-center w-6 h-6  bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                        <svg className="w-3 h-3 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                                        </svg>
                                                    </span>
                                                    <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{chapter.title}</h4>
                                                    {chapter.lessons.length > 0 ? (
                                                        chapter.lessons.map((lesson) => (
                                                            <div key={lesson.id} className="mb-4">
                                                                <h5 className="block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-gray-500">{lesson.title}</h5>
                                                                {lesson.materials.length > 0 ? (
                                                                    <ul>
                                                                        {lesson.materials.map((material) => (
                                                                            <li key={material.id}>
                                                                                {material.title} ({material.type})
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                ) : (
                                                                    <p>Aucun matériel</p>
                                                                )}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p>Aucune leçon disponible pour ce chapitre.</p>
                                                    )}
                                                </li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <p>Aucun chapitre disponible pour ce cours.</p>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p>Aucun cours disponible pour cet instructeur.</p>
                        )}
                    </div>
                ))
            ) : (
                <p>Aucun instructeur disponible.</p>
            )}
        </div>
    );
};

export default ViewMaterials;
