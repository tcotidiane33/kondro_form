import { Clock, BookOpen, BarChart, User, Heart } from 'lucide-react';
import { Button } from '@mui/material';
import { Course, Instructor } from '../../types/course';
import { useForm } from '@inertiajs/inertia-react';

interface CourseCardProps {
    course: Course;
    instructor: Instructor
}

const CourseCard = ({ course, instructor }: CourseCardProps) => {
    const { post } = useForm();

    const handleEnroll = (courseId: number) => {
        // console.log(`Enrolling in course with id: ${id}`);
        post(route('enrollments.enroll', courseId));
    };
    const handleAddToWishlist = (courseId: number) => {
        post(route('wishlist.add', courseId));
    };
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-6">
            <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
            />
            <div className="p-6">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">XOF{course.price}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{course.description}</p>

            <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>{course.duration} hours</span>
                <BarChart className="h-4 w-4 ml-4 mr-1" />
                <span className="capitalize">{course.difficulty}</span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mb-3">
                <div className="flex items-center mb-4 md:mb-0">
                <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="h-10 w-10 rounded-full object-cover mr-2"
                />
                <p className="text-sm font-medium text-gray-900">{course.instructor.name}</p>
                </div>
                <div className="flex space-x-2">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEnroll(course.id)}
                >
                    Enroll
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleAddToWishlist(course.id)}
                    startIcon={<Heart />}
                >
                </Button>
                </div>
            </div>

            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-1">
                <span className="bg-purple-200 text-purple-900 text-sm font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-indigo-800 dark:text-purple-300 border border-purple-300">{course.tag}</span>
                <span className="bg-green-200 text-green-900 text-sm font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-gray-800 dark:text-green-300 border border-green-300">Code : {course.course_code}</span>
                <span className="bg-blue-200 text-blue-900 text-sm font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-gray-800 dark:text-blue-300 border border-blue-300">{course.language}</span>
            </div>
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-1">
                <span className="bg-yellow-200 text-yellow-900 text-sm font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-gray-800 dark:text-yellow-300 border border-yellow-300">{course.lesson} Lessons</span>
                <span className={`bg-${course.status === 0 ? 'yellow' : course.status === 1 ? 'gray' : 'green'}-200 text-${course.status === 0 ? 'yellow' : course.status === 1 ? 'gray' : 'green'}-900 text-sm font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-gray-200 dark:text-${course.status === 0 ? 'yellow' : course.status === 1 ? 'gray' : 'green'}-800 border-2 border-${course.status === 0 ? 'yellow' : course.status === 1 ? 'gray' : 'green'}-300`}>
                {course.status === 0 ? 'Pending' : course.status === 1 ? 'Inactive' : 'Active'}
                </span>
            </div>
            </div>
        </div>
    );
};

export default CourseCard;
