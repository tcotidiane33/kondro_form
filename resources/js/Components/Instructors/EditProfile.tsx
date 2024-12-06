import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';

export default function EditProfile({ instructor }: PageProps<{ instructor: any }>) {
    const { data, setData, post, errors } = useForm({
        name: instructor.name || '',
        email: instructor.email || '',
        contact: instructor.contact || '',
        bio: instructor.bio || '',
        image: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('instructor.profile.update'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Modifier le profil de l'instructeur
                </h2>
            }
        >
            <Head title="Modifier le profil de l'instructeur" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Nom</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    {errors.name && <div>{errors.name}</div>}
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    {errors.email && <div>{errors.email}</div>}
                                </div>
                                <div>
                                    <label>Contact</label>
                                    <input
                                        type="text"
                                        value={data.contact}
                                        onChange={(e) => setData('contact', e.target.value)}
                                    />
                                    {errors.contact && <div>{errors.contact}</div>}
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
