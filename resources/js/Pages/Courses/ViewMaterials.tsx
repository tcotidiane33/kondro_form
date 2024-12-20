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
        <div className="container mx-auto p-4 mt-4 rounded-lg" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%,rgb(169, 196, 230) 39%,rgb(222, 208, 208) 76%,rgba(166, 164, 164, 0.8) 100%)' }}>
            <h1 className="text-2xl font-bold mb-4">Matériaux par Instructeur, Cours, Leçons et Chapitres</h1>
            {instructors.length > 0 ? (
                instructors.map((instructor) => (
                    <div key={instructor.id} className="mb-6">
                        <h2 className="text-xl font-semibold">{instructor.name}</h2>
                        {instructor.courses.length > 0 ? (
                            instructor.courses.map((course) => (
                                <div key={course.id} className="mb-4">
                                    <h3 className="text-lg font-medium">{course.title}</h3>
                                    {course.chapters.length > 0 ? (
                                        course.chapters.map((chapter) => (
                                            <div key={chapter.id} className="mb-4">
                                                <h4 className="text-md font-medium">{chapter.title}</h4>
                                                {chapter.lessons.length > 0 ? (
                                                    chapter.lessons.map((lesson) => (
                                                        <div key={lesson.id} className="mb-4">
                                                            <h5 className="text-sm font-medium">{lesson.title}</h5>
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
                                            </div>
                                        ))
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
