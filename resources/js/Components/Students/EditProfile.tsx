import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';

export default function EditProfile({ student }: PageProps<{ student: any }>) {
    const { data, setData, post, errors } = useForm({
        fullName: student.name || '',
        contactNumber: student.contact || '',
        emailAddress: student.email || '',
        dob: student.date_of_birth || '',
        gender: student.gender || '',
        bio: student.bio || '',
        profession: student.profession || '',
        nationality: student.nationality || '',
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
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Nom</label>
                                    <input
                                        type="text"
                                        value={data.fullName}
                                        onChange={(e) => setData('fullName', e.target.value)}
                                    />
                                    {errors.fullName && <div>{errors.fullName}</div>}
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={data.emailAddress}
                                        onChange={(e) => setData('emailAddress', e.target.value)}
                                    />
                                    {errors.emailAddress && <div>{errors.emailAddress}</div>}
                                </div>
                                <div>
                                    <label>Contact</label>
                                    <input
                                        type="text"
                                        value={data.contactNumber}
                                        onChange={(e) => setData('contactNumber', e.target.value)}
                                    />
                                    {errors.contactNumber && <div>{errors.contactNumber}</div>}
                                </div>
                                <div>
                                    <label>Date de naissance</label>
                                    <input
                                        type="date"
                                        value={data.dob}
                                        onChange={(e) => setData('dob', e.target.value)}
                                    />
                                    {errors.dob && <div>{errors.dob}</div>}
                                </div>
                                <div>
                                    <label>Genre</label>
                                    <input
                                        type="text"
                                        value={data.gender}
                                        onChange={(e) => setData('gender', e.target.value)}
                                    />
                                    {errors.gender && <div>{errors.gender}</div>}
                                </div>
                                <div>
                                    <label>Bio</label>
                                    <textarea
                                        value={data.bio}
                                        onChange={(e) => setData('bio', e.target.value)}
                                    />
                                    {errors.bio && <div>{errors.bio}</div>}
                                </div>
                                <div>
                                    <label>Profession</label>
                                    <input
                                        type="text"
                                        value={data.profession}
                                        onChange={(e) => setData('profession', e.target.value)}
                                    />
                                    {errors.profession && <div>{errors.profession}</div>}
                                </div>
                                <div>
                                    <label>Nationalité</label>
                                    <input
                                        type="text"
                                        value={data.nationality}
                                        onChange={(e) => setData('nationality', e.target.value)}
                                    />
                                    {errors.nationality && <div>{errors.nationality}</div>}
                                </div>
                                <div>
                                    <label>Image de profil</label>
                                    <input
                                        type="file"
                                        onChange={(e) => setData('image', e.target.files[0])}
                                    />
                                    {errors.image && <div>{errors.image}</div>}
                                </div>
                                <button type="submit">Mettre à jour</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
