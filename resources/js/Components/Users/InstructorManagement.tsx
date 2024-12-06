import React, { useState, useEffect } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import axios from 'axios';

const InstructorDashboard = () => {
    const { auth, courses, notifications, messages, forums, recommendations, certificates } = usePage().props;
    const [profile, setProfile] = useState(auth.user);
    const [newProfileImage, setNewProfileImage] = useState(null);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/instructor/profile/update', profile);
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };

    const handleProfileImageChange = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', newProfileImage);
        try {
            await axios.post('/instructor/profile/change-image', formData);
            alert('Profile image updated successfully');
        } catch (error) {
            console.error('Error updating profile image:', error);
            alert('Failed to update profile image');
        }
    };

    const handleCourseCreation = async (courseData) => {
        try {
            await axios.post('/instructor/courses', courseData);
            alert('Course created successfully');
        } catch (error) {
            console.error('Error creating course:', error);
            alert('Failed to create course');
        }
    };

    const handleCertificateRequest = async (courseId) => {
        try {
            await axios.post('/instructor/certificates/request', { courseId });
            alert('Certificate requested successfully');
        } catch (error) {
            console.error('Error requesting certificate:', error);
            alert('Failed to request certificate');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Tableau de bord Instructeur</h1>

            {/* Gestion du Profil */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Gestion du Profil</h2>
                <form onSubmit={handleProfileUpdate}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                        <input
                            id="name"
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                            id="contact"
                            type="text"
                            value={profile.contact}
                            onChange={(e) => setProfile({ ...profile, contact: e.target.value })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                        Mettre à jour le profil
                    </button>
                </form>
                <form onSubmit={handleProfileImageChange} className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">Changer l'image de profil</label>
                        <input
                            id="profileImage"
                            type="file"
                            onChange={(e) => setNewProfileImage(e.target.files[0])}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                        Changer l'image
                    </button>
                </form>
            </section>

            {/* Gestion des Cours */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Gestion des Cours</h2>
                <InertiaLink href="/instructor/courses/create" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
                    Créer un nouveau cours
                </InertiaLink>
                <ul>
                    {courses.map((course) => (
                        <li key={course.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                            <p>{course.description}</p>
                            <InertiaLink href={`/instructor/courses/${course.id}/edit`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                                Éditer
                            </InertiaLink>
                            <InertiaLink href={`/instructor/courses/${course.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 ml-2">
                                Voir
                            </InertiaLink>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Suivi et Évaluation */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Suivi et Évaluation</h2>
                <ul>
                    {courses.map((course) => (
                        <li key={course.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                            <p>Progression: {course.progress}%</p>
                            <InertiaLink href={`/courses/${course.id}/lessons`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                                Voir les leçons
                            </InertiaLink>
                            <InertiaLink href={`/courses/${course.id}/quizzes`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 ml-2">
                                Voir les quiz
                            </InertiaLink>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Certificats */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Certificats</h2>
                <ul>
                    {certificates.map((certificate) => (
                        <li key={certificate.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{certificate.course.title}</h3>
                            <button onClick={() => handleCertificateRequest(certificate.course.id)} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
                                Demander un certificat
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Notifications et Communication */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Notifications et Communication</h2>
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification.id} className="mb-4">
                            <p>{notification.message}</p>
                        </li>
                    ))}
                </ul>
                <ul>
                    {messages.map((message) => (
                        <li key={message.id} className="mb-4">
                            <p>{message.content}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Forums et Discussions */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Forums et Discussions</h2>
                <ul>
                    {forums.map((forum) => (
                        <li key={forum.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{forum.title}</h3>
                            <InertiaLink href={`/forums/${forum.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                                Voir la discussion
                            </InertiaLink>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Recommandations de Cours */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Recommandations de Cours</h2>
                <ul>
                    {recommendations.map((course) => (
                        <li key={course.id} className="mb-4">
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                            <p>{course.description}</p>
                            <InertiaLink href={`/courses/${course.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                                Voir le cours
                            </InertiaLink>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Support et Assistance */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Support et Assistance</h2>
                <InertiaLink href="/support" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    Contacter le support
                </InertiaLink>
            </section>
        </div>
    );
};

export default InstructorDashboard;
