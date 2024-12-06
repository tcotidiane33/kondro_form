import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

interface ProfileProps {
    student: {
        id: number;
        name: string;
        email: string;
        contact?: string;
        date_of_birth?: string;
        gender?: string;
        bio?: string;
        profession?: string;
        nationality?: string;
        address?: string;
        city?: string;
        state?: string;
        postcode?: string;
        country?: string;
        image?: string;
    };
    enrollments: {
        id: number;
        course: {
            title: string;
        };
    }[];
    courses: {
        id: number;
        title: string;
    }[];
    checkout: {
        id: number;
        course: {
            title: string;
        };
        amount: number;
        status: string;
    }[];
}

const Profile: React.FC<ProfileProps> = ({ student, enrollments, courses, checkout }) => {
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
                            <div className="flex items-center space-x-4">
                                {student.image && (
                                    <img src={`/storage/${student.image}`} alt="Profile" className="w-32 h-32 rounded-full" />
                                )}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">{student.name}</h3>
                                    <p className="text-sm text-gray-600">{student.email}</p>
                                    <p className="text-sm text-gray-600">{student.contact}</p>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-md font-semibold text-gray-800">Informations personnelles</h4>
                                    <p><strong>Date de naissance:</strong> {student.date_of_birth}</p>
                                    <p><strong>Genre:</strong> {student.gender}</p>
                                    <p><strong>Nationalité:</strong> {student.nationality}</p>
                                    <p><strong>Adresse:</strong> {student.address}</p>
                                    <p><strong>Ville:</strong> {student.city}</p>
                                    <p><strong>État:</strong> {student.state}</p>
                                    <p><strong>Code postal:</strong> {student.postcode}</p>
                                    <p><strong>Pays:</strong> {student.country}</p>
                                </div>
                                <div>
                                    <h4 className="text-md font-semibold text-gray-800">Informations professionnelles</h4>
                                    <p><strong>Profession:</strong> {student.profession}</p>
                                    <p><strong>Bio:</strong> {student.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">Cours inscrits</h3>
                        <ul className="list-disc list-inside">
                            {enrollments.map((enroll) => (
                                <li key={enroll.id}>{enroll.course.title}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">Tous les cours</h3>
                        <ul className="list-disc list-inside">
                            {courses.map((course) => (
                                <li key={course.id}>{course.title}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">Historique des paiements</h3>
                        <ul className="list-disc list-inside">
                            {checkout.map((payment) => (
                                <li key={payment.id}>
                                    {payment.course.title} - {payment.amount} - {payment.status}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Profile;
