import React from 'react';
import { Link, usePage, PageProps } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { InertiaLink } from '@inertiajs/inertia-react';

interface User {
    id: number;
    name: string;
    email: string;
    role: {
        name: string;
    };
    last_login_at: string | null;
    last_logout_at: string | null;
}

interface PageProps extends PageProps {
    users: {
        data: User[];
        links: { url: string; label: string; active: boolean }[];
    };
}

const Index = () => {
    const { users } = usePage<PageProps>().props;

    const isUserConnected = (user: User) => {
        // Logique pour déterminer si l'utilisateur est connecté
        // Par exemple, si last_logout_at est null ou si last_login_at est plus récent que last_logout_at
        return user.last_login_at && (!user.last_logout_at || new Date(user.last_login_at) > new Date(user.last_logout_at));
    };

    return (
        <AdminLayout>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">Gestion des utilisateurs</h1>
                    <Link href={route('admin.users.create')} className="btn btn-primary flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        <span>Créer un utilisateur</span>
                    </Link>
                </div>
                <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-gray-600">Nom</th>
                            <th className="px-4 py-2 text-left text-gray-600">Email</th>
                            <th className="px-4 py-2 text-left text-gray-600">Rôle</th>
                            <th className="px-4 py-2 text-left text-gray-600">Statut</th>
                            <th className="px-4 py-2 text-left text-gray-600">Dernière connexion</th>
                            <th className="px-4 py-2 text-left text-gray-600">Dernière déconnexion</th>
                            <th className="px-4 py-2 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-100">
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">
                                    <span className={`px-2 py-1 rounded-full text-white ${user.role.name === 'Admin' ? 'bg-red-500' : user.role.name === 'Instructor' ? 'bg-green-500' : 'bg-blue-500'}`}>
                                        {user.role.name}
                                    </span>
                                </td>
                                <td className="border px-4 py-2 flex justify-center items-center">
                                    {isUserConnected(user) ? (
                                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" />
                                        </svg>
                                    )}
                                </td>
                                <td className="border px-4 py-2">{user.last_login_at ? new Date(user.last_login_at).toLocaleString() : 'N/A'}</td>
                                <td className="border px-4 py-2">{user.last_logout_at ? new Date(user.last_logout_at).toLocaleString() : 'N/A'}</td>
                                <td className="border px-4 py-2 flex space-x-2 justify-center items-center">
                                    <InertiaLink href={route('admin.users.edit', user.id)} className="text-blue-500 hover:text-blue-700">
                                        <i className="fas fa-edit"></i>
                                    </InertiaLink>
                                    <InertiaLink href={route('admin.users.destroy', user.id)} method="delete" className="text-red-500 hover:text-red-700" as="button">
                                        <i className="fas fa-trash-alt"></i>
                                    </InertiaLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex justify-center">
                    {users.links.map((link, index) => (
                        <InertiaLink
                            key={index}
                            href={link.url}
                            className={`px-4 py-2 border ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} mx-1 rounded-md`}
                        >
                            {link.label}
                        </InertiaLink>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;
