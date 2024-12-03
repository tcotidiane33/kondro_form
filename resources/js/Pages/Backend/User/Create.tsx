import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Role {
    id: number;
    name: string;
}

interface CreateProps {
    roles: Role[];
}

const Create: React.FC<CreateProps> = ({ roles }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role_id, setRoleId] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post('/backend/user', { name, email, password, role_id });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ajouter un utilisateur</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role_id" className="block text-sm font-medium text-gray-700">Rôle</label>
                    <select
                        id="role_id"
                        value={role_id}
                        onChange={(e) => setRoleId(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="">Sélectionnez un rôle</option>
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    Ajouter
                </button>
            </form>
        </div>
    );
};

export default Create;
