import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/react';

interface ProfileProps {
    student_info: {
        id: number;
        name: string;
        email: string;
        contact?: string;
        date_of_birth?: string;
        gender?: string;
        bio?: string;
        profession?: string;
        nationality?: string;
        image?: string;
    };
    enrollment: {
        id: number;
        course: {
            title: string;
        };
    }[];
}

const Profile: React.FC<ProfileProps> = ({ student_info, enrollment }) => {
    const { data, setData, post, errors } = useForm({
        fullName: student_info.name || '',
        contactNumber: student_info.contact || '',
        emailAddress: student_info.email || '',
        dob: student_info.date_of_birth || '',
        gender: student_info.gender || '',
        bio: student_info.bio || '',
        profession: student_info.profession || '',
        nationality: student_info.nationality || '',
        image: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/students/profile/save_profile');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setData('image', files[0]);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Profil de l'étudiant</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nom complet</label>
                    <input
                        id="fullName"
                        type="text"
                        value={data.fullName}
                        onChange={(e) => setData('fullName', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.fullName && <div className="text-red-500 text-sm mt-2">{errors.fullName}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Numéro de contact</label>
                    <input
                        id="contactNumber"
                        type="text"
                        value={data.contactNumber}
                        onChange={(e) => setData('contactNumber', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.contactNumber && <div className="text-red-500 text-sm mt-2">{errors.contactNumber}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Adresse email</label>
                    <input
                        id="emailAddress"
                        type="email"
                        value={data.emailAddress}
                        onChange={(e) => setData('emailAddress', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.emailAddress && <div className="text-red-500 text-sm mt-2">{errors.emailAddress}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date de naissance</label>
                    <input
                        id="dob"
                        type="date"
                        value={data.dob}
                        onChange={(e) => setData('dob', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.dob && <div className="text-red-500 text-sm mt-2">{errors.dob}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Genre</label>
                    <select
                        id="gender"
                        value={data.gender}
                        onChange={(e) => setData('gender', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="">Sélectionnez un genre</option>
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                        <option value="other">Autre</option>
                    </select>
                    {errors.gender && <div className="text-red-500 text-sm mt-2">{errors.gender}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Biographie</label>
                    <textarea
                        id="bio"
                        value={data.bio}
                        onChange={(e) => setData('bio', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.bio && <div className="text-red-500 text-sm mt-2">{errors.bio}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession</label>
                    <input
                        id="profession"
                        type="text"
                        value={data.profession}
                        onChange={(e) => setData('profession', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.profession && <div className="text-red-500 text-sm mt-2">{errors.profession}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationalité</label>
                    <input
                        id="nationality"
                        type="text"
                        value={data.nationality}
                        onChange={(e) => setData('nationality', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.nationality && <div className="text-red-500 text-sm mt-2">{errors.nationality}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image de profil</label>
                    <input
                        id="image"
                        type="file"
                        onChange={handleFileChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.image && <div className="text-red-500 text-sm mt-2">{errors.image}</div>}
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    Enregistrer
                </button>
            </form>
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Cours inscrits</h2>
                <ul>
                    {enrollment.map((enroll) => (
                        <li key={enroll.id}>{enroll.course.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
