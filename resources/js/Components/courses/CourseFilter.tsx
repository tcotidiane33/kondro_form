import { Search } from 'lucide-react';

interface CourseFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CourseFilter = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange
}: CourseFilterProps) => {
  const categories = [
    'all',
    'Web Development',
    'Networking',
    'Data Science',
    'Mobile Development',
    'Cloud Computing',
    'Cybersecurity'
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search Courses
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700 capitalize">
                {category === 'all' ? 'All Courses' : category}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;