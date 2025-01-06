import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Course, Instructor } from '../../../../types/course';


interface IndexProps {
    courses: Course[];
    instructor: Instructor;
}

const Index: React.FC<IndexProps> = ({ courses , instructor }: IndexProps) => {
    return (
        <AdminLayout>
            <div className="container mx-auto p-4 bg-white shadow-md rounded-lg mt-5">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">Liste des cours</h1>
                    <InertiaLink href="/instructor/courses/create" className="btn btn-primary flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        <span>Ajouter un cours</span>
                    </InertiaLink>
                </div>
                <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left text-gray-600">Titre</th>
                            <th className="px-4 py-2 text-left text-gray-600">Descriptions</th>
                            <th className="px-4 py-2 text-left text-gray-600">Status</th>
                            <th className="px-4 py-2 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id} className="border-b hover:bg-gray-100">
                                <td className="border px-4 py-2">{course.title}</td>
                                <td className="border px-4 py-2">{course.description}</td>
                                    <td className="border px-4 py-2">
                                        {course.status === 0 && <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Pending</span>}
                                        {course.status === 1 && <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Inactive</span>}
                                        {course.status === 2 && <span className="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Active</span>}
                                    </td>
                                <td className="border px-4 py-2 flex space-x-2">
                                    <InertiaLink href={`/instructor/courses/${course.id}/edit`} className="btn btn-sm btn-primary bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM4 12v4h4l10-10-4-4L4 12z" />
                                        </svg>
                                    </InertiaLink>
                                    <InertiaLink href={`/instructor/courses/${course.id}/delete`} className="btn btn-sm btn-danger bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 000 2h14a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 4a1 1 0 00-1 1v8a1 1 0 102 0V7a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v8a1 1 0 102 0V7a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </InertiaLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
};

export default Index;
