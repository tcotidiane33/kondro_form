import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Course {
    id: number;
    title: string;
}

interface Props {
    courses: Course[];
}

const CreateChapter: React.FC<Props> = ({ courses }) => {
    const { data, setData, post, errors } = useForm({
        title: '',
        content: '',
        course_id: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setData(e.target.name, e.target.value);
    };

       const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data); // Ajoutez cette ligne pour vérifier les données
        post('/chapters');
    };

    return (
        <div className="container mx-auto p-4 mt-4 rounded-lg" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%,rgb(169, 196, 230) 39%,rgb(222, 208, 208) 76%,rgba(166, 164, 164, 0.8) 100%)' }}>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Créer un nouveau chapitre</h1>
                <InertiaLink href="/chapters" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Retour
                    </span>
                </InertiaLink>
            </div>
                               <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
                            <input
                                type="text"
                                name="title"
                                value={data.title}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                aria-label="Titre"
                                aria-describedby="title-error"
                            />
                            {errors.title && <div id="title-error" className="text-red-600">{errors.title}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="course_id" className="block text-sm font-medium text-gray-700">Cours</label>
                            <select
                                name="course_id"
                                value={data.course_id}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                aria-label="Cours"
                                aria-describedby="course_id-error"
                            >
                                <option value="">Sélectionnez un cours</option>
                                {courses.map((course) => (
                                    <option key={course.id} value={course.id}>
                                        {course.title}
                                    </option>
                                ))}
                            </select>
                            {errors.course_id && <div id="course_id-error" className="text-red-600">{errors.course_id}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenu</label>
                            <textarea
                                name="content"
                                value={data.content}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                aria-label="Contenu"
                                aria-describedby="content-error"
                            />
                            {errors.content && <div id="content-error" className="text-red-600">{errors.content}</div>}
                        </div>
                        <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Soumettre
                            </span>
                        </button>
                    </form>
        </div>
    );
};

export default CreateChapter;
