import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

interface DashboardProps {
    student_info: {
        id: number;
        name: string;
        email: string;
        contact?: string;
        date_of_birth?: string;
        gender?: string;
        bio?: string;
        profession?: string;
        nationality?: string;
        image?: string;
    };
    enrollment: {
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

const Dashboard: React.FC<DashboardProps> = ({ student_info, enrollment, courses, checkout }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tableau de bord de l'étudiant
                </h2>
            }
        >
            <Head title="Tableau de bord de l'étudiant" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Informations personnelles</h3>
                            <p><strong>Nom:</strong> {student_info.name}</p>
                            <p><strong>Email:</strong> {student_info.email}</p>
                            <p><strong>Contact:</strong> {student_info.contact}</p>
                            <p><strong>Date de naissance:</strong> {student_info.date_of_birth}</p>
                            <p><strong>Genre:</strong> {student_info.gender}</p>
                            <p><strong>Bio:</strong> {student_info.bio}</p>
                            <p><strong>Profession:</strong> {student_info.profession}</p>
                            <p><strong>Nationalité:</strong> {student_info.nationality}</p>
                            {student_info.image && (
                                <img src={`/storage/${student_info.image}`} alt="Profile" className="w-32 h-32 rounded-full" />
                            )}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">Cours inscrits</h3>
                        <ul>
                            {enrollment.map((enroll) => (
                                <li key={enroll.id}>{enroll.course.title}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">Tous les cours</h3>
                        <ul>
                            {courses.map((course) => (
                                <li key={course.id}>{course.title}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">Historique des paiements</h3>
                        <ul>
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

export default Dashboard;
