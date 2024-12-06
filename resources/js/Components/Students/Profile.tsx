import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Profile({ student, enrollments }: PageProps<{ student: any; enrollments: any[] }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profil de l'étudiant
                </h2>
            }
        >
            <Head title="Profil de l'étudiant" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Informations personnelles</h3>
                            <p>Nom: {student.name}</p>
                            <p>Email: {student.email}</p>
                            <p>Contact: {student.contact}</p>
                            <p>Date de naissance: {student.date_of_birth}</p>
                            <p>Genre: {student.gender}</p>
                            <p>Bio: {student.bio}</p>
                            <p>Profession: {student.profession}</p>
                            <p>Nationalité: {student.nationality}</p>
                            <img src={`/storage/${student.image}`} alt="Profile" className="w-32 h-32 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
