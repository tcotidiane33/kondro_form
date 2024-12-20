import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

interface Course {
    id: number;
    title: string;
}

interface Props {
    chapter: {
        id: number;
        title: string;
        content: string;
        course_id: number;
    };
    courses: Course[];
}

const EditChapter: React.FC<Props> = ({ chapter, courses }) => {
    const { data, setData, put, errors } = useForm({
        title: chapter.title || '',
        content: chapter.content || '',
        course_id: chapter.course_id || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/chapters/${chapter.id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Éditer le Chapitre</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg"
                    />
                    {errors.title && <div className="text-red-600">{errors.title}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="course_id" className="block text-sm font-medium text-gray-700">Cours</label>
                    <select
                        name="course_id"
                        value={data.course_id}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg"
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
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenu</label>
                    <textarea
                        name="content"
                        value={data.content}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg"
                    />
                    {errors.content && <div className="text-red-600">{errors.content}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Soumettre</button>
            </form>
        </div>
    );
};

export default EditChapter;
