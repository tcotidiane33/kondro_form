import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Chapter {
    id: number;
    title: string;
}

interface Props {
    chapters: Chapter[];
}

const ChapterIndex: React.FC<Props> = ({ chapters }) => {
    return (
        <div className="container mx-auto p-4 mt-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Chapitres</h1>
            <InertiaLink href="/chapters/create" className="btn btn-primary mb-4">Ajouter un Chapitre</InertiaLink>
            <div className="list-group">
                {chapters.map((chapter) => (
                    <InertiaLink key={chapter.id} href={`/chapters/${chapter.id}`} className="list-group-item list-group-item-action">
                        {chapter.title}
                    </InertiaLink>
                ))}
            </div>
        </div>
    );
};

export default ChapterIndex;
