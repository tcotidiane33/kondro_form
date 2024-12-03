import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Lesson {
    id: number;
    title: string;
}

interface IndexProps {
    lessons: Lesson[];
}

const Index: React.FC<IndexProps> = ({ lessons }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des leçons</h1>
            <InertiaLink href="/admin/lessons/create" className="btn btn-primary mb-4">Ajouter une leçon</InertiaLink>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Titre</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons.map((lesson) => (
                        <tr key={lesson.id}>
                            <td className="border px-4 py-2">{lesson.title}</td>
                            <td className="border px-4 py-2">
                                <InertiaLink href={`/admin/lessons/${lesson.id}/edit`} className="btn btn-sm btn-primary mr-2">Modifier</InertiaLink>
                                <InertiaLink href={`/admin/lessons/${lesson.id}/delete`} className="btn btn-sm btn-danger">Supprimer</InertiaLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
