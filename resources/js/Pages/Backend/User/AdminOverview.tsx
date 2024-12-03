import React from 'react';

interface AdminOverviewProps {
    user: {
        id: number;
        name: string;
        email: string;
        contact?: string;
        role: {
            name: string;
        };
    };
    users: {
        id: number;
        name: string;
        email: string;
        role: {
            name: string;
        };
    }[];
}

const AdminOverview: React.FC<AdminOverviewProps> = ({ user, users }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Vue d'ensemble de l'administrateur</h1>
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
                <strong>Utilisateurs:</strong>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} ({user.role.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminOverview;
