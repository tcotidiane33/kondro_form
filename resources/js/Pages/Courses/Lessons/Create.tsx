import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Course } from '../../../types/course';

interface PageProps {
    courses: Course[];
}

const CreateLesson: React.FC = () => {
    const { courses } = usePage<PageProps>().props;
    const { data, setData, post, errors } = useForm({
        title: '',
        course_id: '',
        description: '',
        notes: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/lessons');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ajouter une Leçon</h1>
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
                    <label htmlFor="course_id" className="block text-sm font-medium text-gray-700">Cours</label>
                    <select
                        name="course_id"
                        value={data.course_id}
                        onChange={handleChange}
                        className="mt-1 block w-full"
                    >
                        <option value="">Sélectionnez un cours</option>
                        {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                                {course.title}
                            </option>
                        ))}
                    </select>
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

export default CreateLesson;
