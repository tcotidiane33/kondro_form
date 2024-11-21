import { ArrowRightCircle } from 'lucide-react';

const EnrolledCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Development Bootcamp",
      progress: 65,
      nextLesson: "React Hooks Deep Dive"
    },
    {
      id: 2,
      title: "CCNP Enterprise Certification",
      progress: 30,
      nextLesson: "Advanced Routing Protocols"
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      progress: 85,
      nextLesson: "Machine Learning Basics"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Enrolled Courses</h2>
      <div className="space-y-6">
        {courses.map(course => (
          <div key={course.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-900">{course.title}</h3>
              <span className="text-sm text-gray-500">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <ArrowRightCircle className="h-4 w-4 mr-1" />
              <span>Next: {course.nextLesson}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;