import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

interface CourseCategory {
    id: number;
    name: string;
}

interface Instructor {
    id: number;
    name: string;
}

interface Course {
    id: number;
    title: string;
    description: string;
    course_category_id: number;
    instructor_id: number;
    type: string;
    price: string;
    old_price: string;
    subscription_price: string;
    start_from: string;
    duration: string;
    lesson: string;
    difficulty: string;
    course_code: string;
    prerequisites: string;
    thumbnail_video: string;
    tag: string;
}

interface Props {
    course: Course;
    courseCategories: CourseCategory[];
    instructors: Instructor[];
}

const Edit: React.FC<Props> = ({ course, courseCategories, instructors }) => {
    const { data, setData, put, errors } = useForm({
        courseTitle: course.title || '',
        courseDescription: course.description || '',
        categoryId: course.course_category_id || '',
        instructorId: course.instructor_id || '',
        courseType: course.type || '',
        coursePrice: course.price || '',
        courseOldPrice: course.old_price || '',
        subscriptionPrice: course.subscription_price || '',
        start_from: course.start_from || '',
        duration: course.duration || '',
        lesson: course.lesson || '',
        courseDifficulty: course.difficulty || '',
        course_code: course.course_code || '',
        prerequisites: course.prerequisites || '',
        thumbnail_video: course.thumbnail_video || '',
        tag: course.tag || '',
        image: null,
        thumbnail_image: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('courses.update', course.id));
    };

    return (
        <PublicLayout>

            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit Course</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                    <div className="mb-4">
                        <label htmlFor="courseTitle" className="block text-gray-700 font-bold mb-2">Title</label>
                        <input
                            type="text"
                            id="courseTitle"
                            value={data.courseTitle}
                            onChange={(e) => setData('courseTitle', e.target.value)}
                            placeholder="Enter course title"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.courseTitle && <div className="text-red-500 text-sm mt-2">{errors.courseTitle}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="courseDescription" className="block text-gray-700 font-bold mb-2">Description</label>
                        <textarea
                            id="courseDescription"
                            value={data.courseDescription}
                            onChange={(e) => setData('courseDescription', e.target.value)}
                            placeholder="Enter course description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        ></textarea>
                        {errors.courseDescription && <div className="text-red-500 text-sm mt-2">{errors.courseDescription}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="categoryId" className="block text-gray-700 font-bold mb-2">Category</label>
                        <select
                            id="categoryId"
                            value={data.categoryId}
                            onChange={(e) => setData('categoryId', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Category</option>
                            {courseCategories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.categoryId && <div className="text-red-500 text-sm mt-2">{errors.categoryId}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="instructorId" className="block text-gray-700 font-bold mb-2">Instructor</label>
                        <select
                            id="instructorId"
                            value={data.instructorId}
                            onChange={(e) => setData('instructorId', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Instructor</option>
                            {instructors.map((instructor) => (
                                <option key={instructor.id} value={instructor.id}>
                                    {instructor.name}
                                </option>
                            ))}
                        </select>
                        {errors.instructorId && <div className="text-red-500 text-sm mt-2">{errors.instructorId}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image</label>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.image && <div className="text-red-500 text-sm mt-2">{errors.image}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="thumbnail_image" className="block text-gray-700 font-bold mb-2">Thumbnail Image</label>
                        <input
                            type="file"
                            id="thumbnail_image"
                            onChange={(e) => setData('thumbnail_image', e.target.files ? e.target.files[0] : null)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.thumbnail_image && <div className="text-red-500 text-sm mt-2">{errors.thumbnail_image}</div>}
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Update
                    </button>
                </form>
                <Link href={route('courses.index')} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4">
                    Back to Courses
                </Link>
            </div>
        </PublicLayout>
    );
};

export default Edit;
