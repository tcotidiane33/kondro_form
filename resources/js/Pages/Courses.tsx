import { useState } from 'react';
import CourseCard from '../Components/courses/CourseCard';
import CourseFilter from '../Components/courses/CourseFilter';
import { Course } from '../types/course';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const courses: Course[] = [
    {
      id: 1,
      title: "Full-Stack Web Development Bootcamp",
      instructor: "Cheick Tidiane",
      description: "Master modern web development with this comprehensive bootcamp",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      category: "Web Development",
      price: 5000,
      duration: "202 hours",
      level: "beginner"
    },
    {
      id: 2,
      title: "CCNP Enterprise Certification",
      instructor: "Bill Cosby",
      description: "Prepare for the CCNP Enterprise certification with hands-on labs",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      category: "Networking",
      price: 1000,
      duration: "298 hours",
      level: "intermediate"
    },
    {
      id: 4,
      title: "CCNP Enterprise Certification",
      instructor: "Bill Cosby",
      description: "Prepare for the CCNA Enterprise certification with hands-on labs",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      category: "Networking",
      price: 2000,
      duration: "498 hours",
      level: "intermediate"
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "New Instructor",
      description: "Learn the basics of data science and machine learning",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      category: "Data Science",
      price: 1200,
      duration: "180 hours",
      level: "beginner"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    </div>
  );
};

export default Courses;
