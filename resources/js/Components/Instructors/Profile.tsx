import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Profile({ instructor }: PageProps<{ instructor: any }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profil de l'instructeur
                </h2>
            }
        >
            <Head title="Profil de l'instructeur" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Informations personnelles</h3>
                            <p>Nom: {instructor.name}</p>
                            <p>Email: {instructor.email}</p>
                            <p>Contact: {instructor.contact}</p>
                            <p>Bio: {instructor.bio}</p>
                            <img src={`/storage/${instructor.image}`} alt="Profile" className="w-32 h-32 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
