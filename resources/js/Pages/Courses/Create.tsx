import React from 'react';
import { useForm, Link } from '@inertiajs/react';

interface CourseCategory {
    id: number;
    name: string;
}

interface Instructor {
    id: number;
    name: string;
}

interface Props {
    courseCategories: CourseCategory[];
    instructors: Instructor[];
}

const Create: React.FC<Props> = ({ courseCategories, instructors }) => {
    const { data, setData, post, errors } = useForm({
        courseTitle: '',
        courseDescription: '',
        categoryId: '',
        instructorId: '',
        courseType: '',
        coursePrice: '',
        courseOldPrice: '',
        subscriptionPrice: '',
        start_from: '',
        duration: '',
        lesson: '',
        courseDifficulty: '',
        course_code: '',
        prerequisites: '',
        thumbnail_video: '',
        tag: '',
        image: null,
        thumbnail_image: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('courses.store'));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Create New Course</h1>
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
                        title="Select Category"
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
                        title="Select Instructor"
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
                    Create
                </button>
            </form>
            <Link href={route('courses.index')} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4">
                Back to Courses
            </Link>
        </div>
    );
};

export default Create;
