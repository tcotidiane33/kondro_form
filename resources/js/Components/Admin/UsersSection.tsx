import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
    role: {
        name: string;
    };
}

interface UsersSectionProps {
    users: User[];
}

const UsersSection: React.FC<UsersSectionProps> = ({ users }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this user?')) {
            // Logic to delete the user
            // You can use Inertia's delete method or make an API call here
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Utilisateurs</h2>
            <input
                type="text"
                placeholder="Rechercher par nom ou rôle"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
            />
            <ul className="space-y-2">
                {filteredUsers.map((user) => (
                    <li key={user.id} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                        <div>
                            <Link href={`/admin/users/${user.id}`} className="text-blue-400 hover:underline">
                                {user.name} ({user.role.name})
                            </Link>
                        </div>
                        <div className="flex space-x-2">
                            <Link href={`/admin/users/${user.id}/edit`} className="text-yellow-500 hover:text-yellow-700">
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersSection;
