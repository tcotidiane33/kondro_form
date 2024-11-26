import React from 'react';
import { CourseCategory } from '../../types/course';

interface CategoryCardProps {
    category: CourseCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {category.category_image && (
                <img src={category.category_image} alt={category.category_name} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{category.category_name}</h2>
                <p className="text-gray-700 mb-2">Status: {category.category_status === 1 ? 'Active' : 'Inactive'}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
