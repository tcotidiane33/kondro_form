import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface User {
    id: number;
    name: string;
    email: string;
    role: {
        name: string;
    };
}

interface IndexProps {
    data: {
        data: User[];
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };
}

const Index: React.FC<IndexProps> = ({ data }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>
            <InertiaLink href="/backend/user/create" className="btn btn-primary mb-4">Ajouter un utilisateur</InertiaLink>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Nom</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Rôle</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((user) => (
                        <tr key={user.id}>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">{user.role.name}</td>
                            <td className="border px-4 py-2">
                                <InertiaLink href={`/backend/user/${user.id}/edit`} className="btn btn-sm btn-primary mr-2">Modifier</InertiaLink>
                                <InertiaLink href={`/backend/user/${user.id}/delete`} className="btn btn-sm btn-danger">Supprimer</InertiaLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                {data.links.map((link, index) => (
                    <InertiaLink
                        key={index}
                        href={link.url}
                        className={`px-4 py-2 border ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                    >
                        {link.label}
                    </InertiaLink>
                ))}
            </div>
        </div>
    );
};

export default Index;
