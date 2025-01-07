import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Notification from '@/Components/Notification/Notification'; // Importez le composant Notification

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

export default function EditUser({ user, roles }: EditProps) {
    const { flash } = usePage().props as { flash?: { success?: string, error?: string } };
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [contact, setContact] = useState(user.contact);
    const [role_id, setRoleId] = useState(user.role_id);
    const [full_access, setFullAccess] = useState(user.full_access);
    const [status, setStatus] = useState(user.status);
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(user.image);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [showNotification, setShowNotification] = useState(false);
    const [notificationType, setNotificationType] = useState<'success' | 'error' | 'info' | 'warning'>('success');
    const [notificationMessage, setNotificationMessage] = useState('');

    // Gestion des notifications
    useEffect(() => {
        if (flash?.success) {
            setNotificationType('success');
            setNotificationMessage(flash.success);
            setShowNotification(true);
        }
        if (flash?.error) {
            setNotificationType('error');
            setNotificationMessage(flash.error);
            setShowNotification(true);
        }
    }, [flash]);

    // Prévisualisation de l'image
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('contact', contact);
        formData.append('role_id', role_id.toString());
        formData.append('full_access', full_access.toString());
        formData.append('status', status.toString());
        if (password) {
            formData.append('password', password);
            formData.append('password_confirmation', password_confirmation);
        }
        if (image) {
            formData.append('image', image);
        }

        Inertia.put(`/admin/users/${user.id}`, formData, {
            onError: (error) => {
                setErrors(error);
            },
            onSuccess: () => {
                setPassword('');
                setPasswordConfirmation('');
                setImage(null);
            }
        });
    };

    return (
        <AdminLayout>
            <div className="flex justify-center items-center min-h-screen">
                <div className="relative p-4 w-full max-w-xl max-h-full bg-gray-100 p-2 mt-5 shadow-md rounded-lg">
                    <h1 className="text-xl font-bold mb-2">Modifier un utilisateur</h1>

                    {/* Notification */}
                    {showNotification && (
                        <Notification
                            type={notificationType}
                            message={notificationMessage}
                            onClose={() => setShowNotification(false)}
                            duration={3000} // Durée personnalisée
                        />
                    )}

                    {/* Prévisualisation de l'image */}
                    <div className="col-xs-1-12 mb-4 flex justify-center bg-gray-100 p-4 rounded-lg">
                        {previewImage && (
                            <img src={previewImage} alt={name} className="w-20 h-20 rounded-full mb-4" />
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                            />
                            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                            />
                            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                            <input
                                id="contact"
                                type="text"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                            />
                            {errors.contact && <div className="text-red-500 text-sm mt-1">{errors.contact}</div>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="role_id" className="block text-sm font-medium text-gray-700">Rôle</label>
                            <select
                                id="role_id"
                                value={role_id}
                                onChange={(e) => setRoleId(parseInt(e.target.value))}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                            >
                                <option value="">Sélectionnez un rôle</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                            {errors.role_id && <div className="text-red-500 text-sm mt-1">{errors.role_id}</div>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="full_access" className="block text-sm font-medium text-gray-700">Accès complet</label>
                            <input
                                id="full_access"
                                type="checkbox"
                                checked={full_access}
                                onChange={(e) => setFullAccess(e.target.checked)}
                                className="mt-1 block"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Statut</label>
                            <input
                                id="status"
                                type="checkbox"
                                checked={status}
                                onChange={(e) => setStatus(e.target.checked)}
                                className="mt-1 block"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                            />
                            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
                            <input
                                id="password_confirmation"
                                type="password"
                                value={password_confirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                            />
                            {errors.password_confirmation && <div className="text-red-500 text-sm mt-1">{errors.password_confirmation}</div>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                            <input
                                id="image"
                                type="file"
                                onChange={handleImageChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                        </div>
                        <button type="submit" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">Mettre à jour</button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
