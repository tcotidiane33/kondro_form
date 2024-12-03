import React from 'react';
import { Link } from '@inertiajs/react';

interface Lesson {
    id: number;
    title: string;
}

interface LessonsSectionProps {
    lessons: Lesson[];
}

const LessonsSection: React.FC<LessonsSectionProps> = ({ lessons }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Leçons</h2>
            <ul className="space-y-2">
                {lessons.map((lesson) => (
                    <li key={lesson.id} className="bg-gray-100 p-4 rounded-lg">
                        <Link href={`/lessons/${lesson.id}`} className="text-blue-400 hover:underline">
                            {lesson.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LessonsSection;
