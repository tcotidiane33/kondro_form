import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface Role {
    id: number;
    name: string;
}

interface CreateProps {
    roles: Role[];
}

const Create: React.FC<CreateProps> = ({ roles }) => {
    const { auth } = usePage().props as { auth: { user: { role?: string } } };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role_id, setRoleId] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post('/admin/users', { name, email, password, role_id });
    };

    if (!auth.user.role || auth.user.role.name !== 'Admin') {
        return <div>Vous n'êtes pas autorisé à accéder à cette page.</div>;
    }

    return (
        // <AdminLayout>
            <div className="relative p-4 w-full  max-w-xl max-h-full bg-gray-100 p-2 mt-5 shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-2">Ajouter un utilisateur</h1>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-sm border border-gray-300 rounded-md shadow-sm p-1"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-sm border border-gray-300 rounded-md shadow-sm p-1"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-sm border border-gray-300 rounded-md shadow-sm p-1"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="role_id" className="block text-sm font-medium text-gray-700">Rôle</label>
                        <select
                            id="role_id"
                            value={role_id}
                            onChange={(e) => setRoleId(e.target.value)}
                            className="mt-1 block w-sm border border-gray-300 rounded-md shadow-sm p-1"
                        >
                            <option value="">Sélectionnez un rôle</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">Ajouter</button>
                </form>
            </div>
        // </AdminLayout>
    );
};

export default Create;
