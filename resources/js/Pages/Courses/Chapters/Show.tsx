import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Lesson {
    id: number;
    title: string;
    description: string;
}

interface Chapter {
    id: number;
    title: string;
    content: string;
    lessons: Lesson[];
}

interface Props {
    chapter: Chapter;
}

const ShowChapter: React.FC<Props> = ({ chapter }) => {
    return (
        <div className="container mx-auto p-4 mt-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">{chapter.title}</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Contenu</h2>
                <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Leçons</h2>
                <div className="list-group">
                    {chapter.lessons.map((lesson) => (
                        <InertiaLink key={lesson.id} href={`/lessons/${lesson.id}`} className="list-group-item list-group-item-action">
                            {lesson.title}
                        </InertiaLink>
                    ))}
                </div>
            </div>
            <InertiaLink href="/chapters" className="btn btn-secondary">Retour aux Chapitres</InertiaLink>
        </div>
    );
};

export default ShowChapter;
