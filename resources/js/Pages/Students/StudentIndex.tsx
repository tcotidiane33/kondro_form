import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

interface Student {
    id: number;
    name: string;
    email: string;
    contact?: string;
}

interface Props {
    students: Student[];
}

const StudentIndex: React.FC<Props> = ({ students }) => {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Liste des étudiants</h2>}
        >
            <Head title="Liste des étudiants" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <InertiaLink href={route('students.create')} className="btn btn-primary mb-4">
                                Ajouter un étudiant
                            </InertiaLink>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Nom</th>
                                        <th className="px-4 py-2">Email</th>
                                        <th className="px-4 py-2">Contact</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student) => (
                                        <tr key={student.id}>
                                            <td className="border px-4 py-2">{student.name}</td>
                                            <td className="border px-4 py-2">{student.email}</td>
                                            <td className="border px-4 py-2">{student.contact}</td>
                                            <td className="border px-4 py-2">
                                                <InertiaLink href={route('students.edit', student.id)} className="btn btn-sm btn-primary mr-2">
                                                    Modifier
                                                </InertiaLink>
                                                <InertiaLink href={route('students.destroy', student.id)} method="delete" className="btn btn-sm btn-danger">
                                                    Supprimer
                                                </InertiaLink>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default StudentIndex;
