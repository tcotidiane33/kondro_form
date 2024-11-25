import React from 'react';
import { Link, usePage } from '@inertiajs/react';

interface CourseCategory {
    id: number;
    name: string;
}

interface Instructor {
    id: number;
    name: string;
}

interface Course {
    id: number;
    title: string;
    course_category: CourseCategory;
    instructor: Instructor;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface PageProps {
    auth: {
        user: User;
    };
    courses: {
        data: Course[];
    };
}

const Index: React.FC = () => {
    const { courses } = usePage<PageProps>().props;

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">Courses</h1>
                <Link href={route('courses.create')} className="btn btn-primary flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    <span>Create New Course</span>
                </Link>
            </div>
            <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left text-gray-600">Title</th>
                        <th className="px-4 py-2 text-left text-gray-600">Category</th>
                        <th className="px-4 py-2 text-left text-gray-600">Instructor</th>
                        <th className="px-4 py-2 text-left text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.data.map(course => (
                        <tr key={course.id} className="border-b hover:bg-gray-100">
                            <td className="px-4 py-2">{course.title}</td>
                            <td className="px-4 py-2">{course.course_category.name}</td>
                            <td className="px-4 py-2">{course.instructor.name}</td>
                            <td className="px-4 py-2 flex space-x-2">
                                <Link href={route('courses.edit', course.id)} className="btn btn-warning flex items-center space-x-1 bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600">
                                    <span>Edit</span>
                                </Link>
                                <Link href={route('courses.destroy', course.id)} method="delete" className="btn btn-danger flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600" as="button">
                                    <span>Delete</span>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
