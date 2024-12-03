import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/react';

interface Lesson {
    id: number;
    title: string;
}

interface CreateProps {
    lessons: Lesson[];
}

const Create: React.FC<CreateProps> = ({ lessons }) => {
    const { data, setData, post, errors } = useForm({
        materialTitle: '',
        lessonId: '',
        materialType: '',
        content: '',
        contentURL: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/materials');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setData('content', files[0]);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ajouter un matériau</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="materialTitle" className="block text-sm font-medium text-gray-700">Titre</label>
                    <input
                        id="materialTitle"
                        type="text"
                        value={data.materialTitle}
                        onChange={(e) => setData('materialTitle', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.materialTitle && <div className="text-red-500 text-sm mt-2">{errors.materialTitle}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="lessonId" className="block text-sm font-medium text-gray-700">Leçon</label>
                    <select
                        id="lessonId"
                        value={data.lessonId}
                        onChange={(e) => setData('lessonId', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="">Sélectionnez une leçon</option>
                        {lessons.map((lesson) => (
                            <option key={lesson.id} value={lesson.id}>
                                {lesson.title}
                            </option>
                        ))}
                    </select>
                    {errors.lessonId && <div className="text-red-500 text-sm mt-2">{errors.lessonId}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="materialType" className="block text-sm font-medium text-gray-700">Type</label>
                    <input
                        id="materialType"
                        type="text"
                        value={data.materialType}
                        onChange={(e) => setData('materialType', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.materialType && <div className="text-red-500 text-sm mt-2">{errors.materialType}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenu</label>
                    <input
                        id="content"
                        type="file"
                        onChange={handleFileChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.content && <div className="text-red-500 text-sm mt-2">{errors.content}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="contentURL" className="block text-sm font-medium text-gray-700">URL du contenu</label>
                    <input
                        id="contentURL"
                        type="text"
                        value={data.contentURL}
                        onChange={(e) => setData('contentURL', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.contentURL && <div className="text-red-500 text-sm mt-2">{errors.contentURL}</div>}
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    Ajouter
                </button>
            </form>
        </div>
    );
};

export default Create;
