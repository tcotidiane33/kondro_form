import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface Role {
    id: number;
    name: string;
}

interface EditProps {
    user: {
        id: number;
        name: string;
        email: string;
        contact: string;
        role_id: number;
        full_access: boolean;
        status: boolean;
        image: string;
    };
    roles: Role[];
}

const Edit: React.FC<EditProps> = ({ user, roles }) => {
    const { flash } = usePage().props as unknown as { flash: { success?: string; error?: string } };
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [contact, setContact] = useState(user.contact);
    const [role_id, setRoleId] = useState(user.role_id);
    const [full_access, setFullAccess] = useState(user.full_access);
    const [status, setStatus] = useState(user.status);
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('userName', name);
        formData.append('emailAddress', email);
        formData.append('contactNumber', contact);
        formData.append('roleId', role_id.toString());
        formData.append('fullAccess', full_access.toString());
        formData.append('status', status.toString());
        if (password) {
            formData.append('password', password);
            formData.append('password_confirmation', password_confirmation);
        }
        if (image) {
            formData.append('image', image);
        }
        Inertia.put(route('admin.users.update', user.id), formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    return (
        <AdminLayout>
            <div className="container mx-auto p-4 bg-white shadow-md rounded-lg mt-5">
                <h1 className="text-2xl font-bold mb-4">Modifier l'utilisateur</h1>
                {flash && flash.success && <div className="alert alert-success">{flash.success}</div>}
                {flash && flash.error && <div className="alert alert-danger">{flash.error}</div>}
                <div className="flex  row gap-4">
                    <div className="col-xs-1-12 mb-4 flex justify-center bg-gray-100 p-4 rounded-lg">
                        <img src={user.image} alt={user.name} className="w-20 h-20 rounded-full mb-4" />

                    </div>
                    <div className="col-xs-1-12">

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
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                                <input
                                    id="contact"
                                    type="text"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="role_id" className="block text-sm font-medium text-gray-700">Rôle</label>
                                <select
                                    id="role_id"
                                    value={role_id}
                                    onChange={(e) => setRoleId(parseInt(e.target.value))}
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
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label htmlFor="full_access" className="block text-sm font-medium text-gray-700">Accès complet</label>
                                    <input
                                        id="full_access"
                                        type="checkbox"
                                        checked={full_access}
                                        onChange={(e) => setFullAccess(e.target.checked)}
                                        className="mt-1 block"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Statut</label>
                                    <input
                                        id="status"
                                        type="checkbox"
                                        checked={status}
                                        onChange={(e) => setStatus(e.target.checked)}
                                        className="mt-1 block"
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
                                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
                                    <input
                                        id="password_confirmation"
                                        type="password"
                                        value={password_confirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>
                                <div className="mb-4 col-span-2">
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                                    <input
                                        id="image"
                                        type="file"
                                        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                                Mettre à jour
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Edit;
