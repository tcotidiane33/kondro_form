import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

interface Props {
    lesson: {
        id: number;
        title: string;
        course_id: string;
        description: string;
        notes: string;
    };
}

const LessonEdit: React.FC<Props> = ({ lesson }) => {
    const { data, setData, put, errors } = useForm({
        title: lesson.title || '',
        course_id: lesson.course_id || '',
        description: lesson.description || '',
        notes: lesson.notes || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/lessons/${lesson.id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Éditer la Leçon</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="mt-1 block w-full"
                    />
                    {errors.title && <div className="text-red-600">{errors.title}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="course_id" className="block text-sm font-medium text-gray-700">ID du Cours</label>
                    <input
                        type="text"
                        name="course_id"
                        value={data.course_id}
                        onChange={handleChange}
                        className="mt-1 block w-full"
                    />
                    {errors.course_id && <div className="text-red-600">{errors.course_id}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        className="mt-1 block w-full"
                    />
                    {errors.description && <div className="text-red-600">{errors.description}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea
                        name="notes"
                        value={data.notes}
                        onChange={handleChange}
                        className="mt-1 block w-full"
                    />
                    {errors.notes && <div className="text-red-600">{errors.notes}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Soumettre</button>
            </form>
        </div>
    );
};

export default LessonEdit;
