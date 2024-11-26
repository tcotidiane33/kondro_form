import React, { useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
// import { route } from 'ziggy-js';
import CategoryCard from '../../Components/Courses/CategoryCard';
import { CourseCategory } from '../../types/course';

interface User {
    id: number;
    name: string;
    email: string;
}

interface PageProps {
    auth: {
        user: User;
    };
    categories: {
        data: CourseCategory[];
    };
    [key: string]: any; // Ajout de la signature d'index pour satisfaire la contrainte
}

const Index: React.FC = () => {
    const { auth, categories } = usePage<PageProps>().props;

    useEffect(() => {
        console.log('Categories:', categories);
    }, [categories]);

    if (!categories) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
                <Link href={route('course-categories.create')} className="btn btn-primary flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    <span>Create New Category</span>
                </Link>
            </div>
            <h1>Welcome, {auth.user.name}</h1>
            <h1>Welcome, {auth.user.email}</h1>
            {/* <div>
                {categories.data.map(category => (
                    <div key={category.id}>
                        <div>{category.category_name}</div>
                        <div>{category.category_status}</div>
                        <div>{category.category_image}</div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.data.map(category => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.data.map(category => {
                    console.log('Category:', category);
                    return <CategoryCard key={category.id} category={category} />;
                })}
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Placeholder content to check grid layout */}
                <div className="bg-gray-200 h-48"></div>
                <div className="bg-gray-200 h-48"></div>
                <div className="bg-gray-200 h-48"></div>
            </div>
        </div>
    );
};

export default Index;
