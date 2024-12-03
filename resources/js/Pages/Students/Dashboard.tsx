import React from 'react';

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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Tableau de bord de l'étudiant</h1>
            <div className="mb-4">
                <strong>Nom:</strong> {student_info.name}
            </div>
            <div className="mb-4">
                <strong>Email:</strong> {student_info.email}
            </div>
            <div className="mb-4">
                <strong>Contact:</strong> {student_info.contact}
            </div>
            <div className="mb-4">
                <strong>Rôle:</strong> Étudiant
            </div>
            <div className="mb-4">
                <strong>Cours inscrits:</strong>
                <ul>
                    {enrollment.map((enroll) => (
                        <li key={enroll.id}>{enroll.course.title}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <strong>Historique des achats:</strong>
                <ul>
                    {checkout.map((item) => (
                        <li key={item.id}>
                            {item.course.title} - {item.amount} - {item.status}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <strong>Liste des cours disponibles:</strong>
                <ul>
                    {courses.map((course) => (
                        <li key={course.id}>{course.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
