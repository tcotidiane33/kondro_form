import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Course {
    id: number;
    title: string;
}

interface IndexProps {
    courses: Course[];
}

const Index: React.FC<IndexProps> = ({ courses }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des cours</h1>
            <InertiaLink href="/admin/courses/create" className="btn btn-primary mb-4">Ajouter un cours</InertiaLink>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Titre</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td className="border px-4 py-2">{course.title}</td>
                            <td className="border px-4 py-2">
                                <InertiaLink href={`/admin/courses/${course.id}/edit`} className="btn btn-sm btn-primary mr-2">Modifier</InertiaLink>
                                <InertiaLink href={`/admin/courses/${course.id}/delete`} className="btn btn-sm btn-danger">Supprimer</InertiaLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
