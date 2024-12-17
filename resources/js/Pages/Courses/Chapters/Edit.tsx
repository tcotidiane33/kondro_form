import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

interface Props {
    lesson: {
        id: number;
        title: string;
    };
    chapter: {
        id: number;
        title: string;
        content: string;
    };
}

const ChapterEdit: React.FC<Props> = ({ lesson, chapter }) => {
    const { data, setData, put, errors } = useForm({
        title: chapter.title || '',
        content: chapter.content || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/lessons/${lesson.id}/chapters/${chapter.id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Éditer le Chapitre de la leçon: {lesson.title}</h1>
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
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenu</label>
                    <textarea
                        name="content"
                        value={data.content}
                        onChange={handleChange}
                        className="mt-1 block w-full"
                    />
                    {errors.content && <div className="text-red-600">{errors.content}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Soumettre</button>
            </form>
        </div>
    );
};

export default ChapterEdit;
