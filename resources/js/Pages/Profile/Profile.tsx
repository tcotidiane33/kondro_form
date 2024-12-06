import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';

export default function Profile({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const user = auth.user;

    const { data, setData, post, errors } = useForm({
        name: user.name || '',
        email: user.email || '',
        contact: user.contact || '',
        bio: user.bio || '',
        image: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user.role === 'Admin') {
            post(route('admin.profile.update'));
        } else if (user.role === 'Instructor') {
            post(route('instructor.profile.update'));
        } else {
            post(route('student.profile.update'));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
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
                            {user.role !== 'Admin' && (
                                <div>
                                    <label>Bio</label>
                                    <textarea
                                        value={data.bio}
                                        onChange={(e) => setData('bio', e.target.value)}
                                    />
                                    {errors.bio && <div>{errors.bio}</div>}
                                </div>
                            )}
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

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {user.role === 'Admin' && (
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
