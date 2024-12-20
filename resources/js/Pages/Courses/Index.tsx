import React, { useState } from 'react';
import CourseFilter from '../../Components/Courses/CourseFilter';
import CourseCard from '../../Components/Courses/CourseCard';
import { InertiaLink } from '@inertiajs/inertia-react';
import ViewMaterials from '@/Pages/Courses/ViewMaterials';


interface Course {
  id: number;
  title: string;
  course_category_id: number;
  instructor_id: number;
  price: number;
  description: string;
  image: string;
  type: 'free' | 'paid' | 'subscription';
  status: string;
  language: string;
  category: {
    id: number;
    category_name: string;
  };
  instructor: {
    id: number;
    name: string;
  };
}

interface CourseCategory {
  id: number;
  category_name: string;
}

interface IndexProps {
  courses: Course[];
  categories: CourseCategory[];
}

const Index: React.FC<IndexProps> = ({ courses, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!Array.isArray(courses)) {
    return <div>Loading...</div>;
  }

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category.category_name.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des cours</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <CourseFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onSearchChange={setSearchQuery}
            searchQuery={searchQuery}
            categories={categories}
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
      <div className='mt-4'>
            <InertiaLink href="/materials/view" className="btn btn-primary">Voir les Matériaux</InertiaLink>
            <ViewMaterials instructors={[]} />
        </div>

    </div>
  );
};

export default Index;
