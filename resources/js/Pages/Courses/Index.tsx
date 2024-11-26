import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import CourseCard from '../../Components/Courses/CourseCard';
import CourseFilter from '../../Components/Courses/CourseFilter';
import { Course, CourseCategory } from '../../types/course';

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
    categories: {
        data: CourseCategory[];
    };
}

const Index: React.FC = () => {
    const { courses, categories } = usePage<PageProps>().props;
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredCourses = courses.data.filter(course => {
        const matchesCategory = selectedCategory === 'all' || course.course_category_id === parseInt(selectedCategory);
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             (course.description && course.description.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">Courses</h1>
                <Link href={route('courses.create')} className="btn btn-primary flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    <span>Create New Course</span>
                </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-64">
                    <CourseFilter
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        onSearchChange={setSearchQuery}
                        searchQuery={searchQuery}
                    />
                </aside>
                <main className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </main>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map(category => (
                        <div key={category.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            {category.category_image && (
                                <img src={category.category_image} alt={category.category_name} className="w-full h-48 object-cover" />
                            )}
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{category.category_name}</h2>
                                <p className="text-gray-700 mb-2">Status: {category.category_status === 1 ? 'Active' : 'Inactive'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Index;
