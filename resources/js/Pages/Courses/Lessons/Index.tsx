import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Lesson {
    id: number;
    title: string;
    description: string;
}

interface Props {
    lessons: Lesson[];
}

const LessonIndex: React.FC<Props> = ({ lessons }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Leçons</h1>
            <InertiaLink href="/lessons/create" className="btn btn-primary mb-4">Ajouter une Leçon</InertiaLink>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Titre</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons.map((lesson) => (
                        <tr key={lesson.id}>
                            <td className="border px-4 py-2">{lesson.title}</td>
                            <td className="border px-4 py-2">{lesson.description}</td>
                            <td className="border px-4 py-2">
                                <InertiaLink href={`/lessons/${lesson.id}/edit`} className="btn btn-secondary mr-2">Éditer</InertiaLink>
                                <InertiaLink href={`/lessons/${lesson.id}`} className="btn btn-primary">Voir</InertiaLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LessonIndex;
