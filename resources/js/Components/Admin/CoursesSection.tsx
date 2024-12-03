import React from 'react';
import { Link } from '@inertiajs/react';

interface Course {
    id: number;
    title: string;
}

interface CoursesSectionProps {
    courses: Course[];
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ courses }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Cours</h2>
            <ul className="space-y-2">
                {courses.map((course) => (
                    <li key={course.id} className="bg-gray-100 p-4 rounded-lg">
                        <Link href={`/courses/${course.id}`} className="text-blue-400 hover:underline">
                            {course.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoursesSection;
