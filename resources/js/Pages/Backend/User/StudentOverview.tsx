import React from 'react';

interface StudentOverviewProps {
    user: {
        id: number;
        name: string;
        email: string;
        contact?: string;
        role: {
            name: string;
        };
        courses: {
            id: number;
            title: string;
        }[];
    };
}

const StudentOverview: React.FC<StudentOverviewProps> = ({ user }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Vue d'ensemble de l'étudiant</h1>
            <div className="mb-4">
                <strong>Nom:</strong> {user.name}
            </div>
            <div className="mb-4">
                <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-4">
                <strong>Contact:</strong> {user.contact}
            </div>
            <div className="mb-4">
                <strong>Rôle:</strong> {user.role.name}
            </div>
            <div className="mb-4">
                <strong>Cours inscrits:</strong>
                <ul>
                    {user.courses.map((course) => (
                        <li key={course.id}>{course.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StudentOverview;
