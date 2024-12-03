import { Search } from 'lucide-react';

interface CourseCategory {
    id: number;
    category_name: string;
}

interface CourseFilterProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    categories: CourseCategory[];
}

const CourseFilter = ({
    selectedCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
    categories
}: CourseFilterProps) => {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                    Rechercher des cours
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="search"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                        placeholder="Rechercher..."
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Catégorie
                </label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                    <option value="all">Toutes les catégories</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.category_name}>
                            {category.category_name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CourseFilter;
