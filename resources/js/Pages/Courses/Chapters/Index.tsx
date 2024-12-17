import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Chapter {
    id: number;
    title: string;
    content: string;
}

interface Props {
    lesson: {
        id: number;
        title: string;
    };
    chapters: Chapter[];
}

const ChapterIndex: React.FC<Props> = ({ lesson, chapters }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Chapitres de la leçon: {lesson.title}</h1>
            <InertiaLink href={`/lessons/${lesson.id}/chapters/create`} className="btn btn-primary mb-4">Ajouter un Chapitre</InertiaLink>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Titre</th>
                        <th className="px-4 py-2">Contenu</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {chapters.map((chapter) => (
                        <tr key={chapter.id}>
                            <td className="border px-4 py-2">{chapter.title}</td>
                            <td className="border px-4 py-2">{chapter.content}</td>
                            <td className="border px-4 py-2">
                                <InertiaLink href={`/lessons/${lesson.id}/chapters/${chapter.id}/edit`} className="btn btn-secondary mr-2">Éditer</InertiaLink>
                                <InertiaLink href={`/lessons/${lesson.id}/chapters/${chapter.id}`} className="btn btn-primary">Voir</InertiaLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChapterIndex;
