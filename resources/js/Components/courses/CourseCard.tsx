import { Clock, BookOpen, BarChart, User } from 'lucide-react';
import { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-indigo-600">{course.category}</span>
          <span className="text-sm font-medium text-gray-500">XOF{course.price}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>{course.duration}</span>
          <BarChart className="h-4 w-4 ml-4 mr-1" />
          <span className="capitalize">{course.level}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <User className="h-4 w-4 text-gray-400 mr-1" />
            {/* <span className="text-sm text-gray-600">{course.instructor}</span> */}
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300">
            Enroll Now
          </button>
        </div>

        <div className="flex items-center">
         <img
            src={course.instructor_avatar}
            alt={course.instructor}
            className="h-10 w-10 rounded-full object-cover mr-2"
          />
           <div>
            {/* <p className="text-sm font-medium text-gray-900">{course.instructor}</p> */}
            {/* <p className="text-sm text-gray-500">{course.instructor_bio}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
