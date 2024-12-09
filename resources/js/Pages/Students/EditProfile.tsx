import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';

export default function EditProfile({ student }: PageProps<{ student: any }>) {
    if (!student) {
        return (
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Modifier le profil de l'étudiant
                    </h2>
                }
            >
                <Head title="Modifier le profil de l'étudiant" />
                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <p>Les informations de l'étudiant ne sont pas disponibles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    const { data, setData, post, errors } = useForm({
        fullName: student.name || '',
        contactNumber: student.contact || '',
        emailAddress: student.email || '',
        dob: student.date_of_birth || '',
        gender: student.gender || '',
        bio: student.bio || '',
        profession: student.profession || '',
        nationality: student.nationality || '',
        address: student.address || '',
        city: student.city || '',
        state: student.state || '',
        postcode: student.postcode || '',
        country: student.country || '',
        image: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('student.profile.update'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Modifier le profil de l'étudiant
                </h2>
            }
        >
            <Head title="Modifier le profil de l'étudiant" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nom</label>
                                        <input
                                            type="text"
                                            value={data.fullName}
                                            onChange={(e) => setData('fullName', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre nom"
                                        />
                                        {errors.fullName && <div className="text-red-500 text-sm mt-2">{errors.fullName}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            value={data.emailAddress}
                                            onChange={(e) => setData('emailAddress', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre email"
                                        />
                                        {errors.emailAddress && <div className="text-red-500 text-sm mt-2">{errors.emailAddress}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Contact</label>
                                        <input
                                            type="text"
                                            value={data.contactNumber}
                                            onChange={(e) => setData('contactNumber', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre numéro de contact"
                                        />
                                        {errors.contactNumber && <div className="text-red-500 text-sm mt-2">{errors.contactNumber}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
                                        <input
                                            type="date"
                                            value={data.dob}
                                            onChange={(e) => setData('dob', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                        {errors.dob && <div className="text-red-500 text-sm mt-2">{errors.dob}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Genre</label>
                                        <select
                                            value={data.gender}
                                            onChange={(e) => setData('gender', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            title="Sélectionnez votre genre"
                                        >
                                            <option value="">Sélectionnez votre genre</option>
                                            <option value="homme">Homme</option>
                                            <option value="femme">Femme</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                        {errors.gender && <div className="text-red-500 text-sm mt-2">{errors.gender}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Bio</label>
                                        <textarea
                                            value={data.bio}
                                            onChange={(e) => setData('bio', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre bio"
                                        />
                                        {errors.bio && <div className="text-red-500 text-sm mt-2">{errors.bio}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Profession</label>
                                        <input
                                            type="text"
                                            value={data.profession}
                                            onChange={(e) => setData('profession', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre profession"
                                        />
                                        {errors.profession && <div className="text-red-500 text-sm mt-2">{errors.profession}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nationalité</label>
                                        <input
                                            type="text"
                                            value={data.nationality}
                                            onChange={(e) => setData('nationality', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre nationalité"
                                        />
                                        {errors.nationality && <div className="text-red-500 text-sm mt-2">{errors.nationality}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Adresse</label>
                                        <textarea
                                            value={data.address}
                                            onChange={(e) => setData('address', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre adresse"
                                        />
                                        {errors.address && <div className="text-red-500 text-sm mt-2">{errors.address}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Ville</label>
                                        <input
                                            type="text"
                                            value={data.city}
                                            onChange={(e) => setData('city', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre ville"
                                        />
                                        {errors.city && <div className="text-red-500 text-sm mt-2">{errors.city}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">État</label>
                                        <input
                                            type="text"
                                            value={data.state}
                                            onChange={(e) => setData('state', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre état"
                                        />
                                        {errors.state && <div className="text-red-500 text-sm mt-2">{errors.state}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Code postal</label>
                                        <input
                                            type="text"
                                            value={data.postcode}
                                            onChange={(e) => setData('postcode', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre code postal"
                                        />
                                        {errors.postcode && <div className="text-red-500 text-sm mt-2">{errors.postcode}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Pays</label>
                                        <input
                                            type="text"
                                            value={data.country}
                                            onChange={(e) => setData('country', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            placeholder="Entrez votre pays"
                                        />
                                        {errors.country && <div className="text-red-500 text-sm mt-2">{errors.country}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Image de profil</label>
                                        <input
                                            type="file"
                                            onChange={(e) => {
                                                if (e.target.files && e.target.files[0]) {
                                                    setData('image', e.target.files[0]);
                                                }
                                            }}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                            title="Sélectionnez une image de profil"
                                        />
                                        {errors.image && <div className="text-red-500 text-sm mt-2">{errors.image}</div>}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                                >
                                    Mettre à jour
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
