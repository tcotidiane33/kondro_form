import React from 'react';
import { Link } from '@inertiajs/react';

const CourseCategories = ({ courseCategories }) => {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this category?')) {
            // Make a request to delete the category
            axios.delete(route('course-categories.destroy', id))
                .then(response => {
                    // Handle successful deletion
                    window.location.reload();
                })
                .catch(error => {
                    // Handle error
                    console.error('There was an error deleting the category!', error);
                });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Course Categories</h1>
            <Link href={route('course-categories.create')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
                Create New Category
            </Link>
            <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Status</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {courseCategories.map(category => (
                        <tr key={category.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <span className="font-medium">{category.category_name}</span>
                            </td>
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <span className={`font-medium ${category.category_status ? 'text-green-500' : 'text-red-500'}`}>
                                    {category.category_status ? 'Active' : 'Inactive'}
                                </span>
                            </td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex item-center justify-center">
                                    <Link href={route('course-categories.edit', category.id)} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m4 8H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v4m-4 8v-4m0 0h4m-4 0H9" />
                                        </svg>
                                    </Link>
                                    <button onClick={() => handleDelete(category.id)} className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseCategories;
