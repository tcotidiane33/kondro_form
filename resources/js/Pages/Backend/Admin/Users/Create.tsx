import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import Notification from '@/Components/Notification/Notification'; // Importez le composant Notification

interface Role {
    id: number;
    name: string;
}

interface CreateProps {
    roles: Role[];
}

export default function CreateUser({ roles }: CreateProps) {
    const { auth, flash } = usePage().props as { auth?: { user?: { role?: string } }, flash?: { success?: string, error?: string } };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role_id, setRoleId] = useState('');
    const [contact, setContact] = useState('');
    const [language, setLanguage] = useState('fr');
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            password,
            role_id,
            contact,
            language,
        };

        Inertia.post('/admin/users', userData, {
            onError: (error) => {
                setErrors(error);
            },
            onSuccess: () => {
                setName('');
                setEmail('');
                setPassword('');
                setRoleId('');
                setContact('');
                setLanguage('fr');
                setErrors({});
            }
        });
    };

    const user = auth?.user;
    const role = user?.role?.name;

    if (role !== 'Admin') {
        return (
            <div className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
                    </svg>
                </div>
                <div className="ms-3 text-sm font-normal">Vous n'êtes pas autorisé à accéder à cette page.</div>
            </div>
        );
    }

    return (
        <div className="relative p-4 bg-gray-100 p-2  shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-2">Ajouter un utilisateur</h1>

            {/* Notification */}
            {showNotification && (
                <Notification
                    type={notificationType}
                    message={notificationMessage}
                    onClose={() => setShowNotification(false)}
                    duration={3000} // Durée personnalisée
                />
            )}

            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                        required
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
                        required
                    />
                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                        required
                    />
                    {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
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
                        onChange={(e) => setRoleId(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                        required
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
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700">Langue</label>
                    <select
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                    >
                        <option value="fr">Français</option>
                        <option value="en">Anglais</option>
                    </select>
                    {errors.language && <div className="text-red-500 text-sm mt-1">{errors.language}</div>}
                </div>
                <button
                    type="submit"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                    Ajouter un utilisateur
                </button>
            </form>
        </div>
    );
}
