import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

const StudentCreate: React.FC = () => {
    const { data, setData, post, errors } = useForm({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        birthDate: '',
        gender: '',
        status: '',
        password: '',
        image: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('students.store'));
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ajouter un étudiant</h2>}
        >
            <Head title="Ajouter un étudiant" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                                    <input
                                        type="text"
                                        value={data.fullName}
                                        onChange={(e) => setData('fullName', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.fullName && <div className="text-red-500 text-sm mt-2">{errors.fullName}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={data.emailAddress}
                                        onChange={(e) => setData('emailAddress', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.emailAddress && <div className="text-red-500 text-sm mt-2">{errors.emailAddress}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Contact</label>
                                    <input
                                        type="text"
                                        value={data.contactNumber}
                                        onChange={(e) => setData('contactNumber', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.contactNumber && <div className="text-red-500 text-sm mt-2">{errors.contactNumber}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Date de naissance</label>
                                    <input
                                        type="date"
                                        value={data.birthDate}
                                        onChange={(e) => setData('birthDate', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.birthDate && <div className="text-red-500 text-sm mt-2">{errors.birthDate}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Genre</label>
                                    <select
                                        value={data.gender}
                                        onChange={(e) => setData('gender', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="">Sélectionnez votre genre</option>
                                        <option value="homme">Homme</option>
                                        <option value="femme">Femme</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                    {errors.gender && <div className="text-red-500 text-sm mt-2">{errors.gender}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Statut</label>
                                    <input
                                        type="text"
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.status && <div className="text-red-500 text-sm mt-2">{errors.status}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
                                    <input
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.password && <div className="text-red-500 text-sm mt-2">{errors.password}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Image de profil</label>
                                    <input
                                        type="file"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                setData('image', e.target.files[0]);
                                            }
                                        }}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.image && <div className="text-red-500 text-sm mt-2">{errors.image}</div>}
                                </div>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                                >
                                    Ajouter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default StudentCreate;
