import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';
import { Course } from '../../../types/course';

interface PageProps {
    courses: Course[];
}
interface Chapter {
    id: number;
    title: string;
}


const CreateLesson: React.FC = () => {
    const { courses, chapters } = usePage<PageProps>().props;
    const { data, setData, post, errors } = useForm({
        title: '',
        course_id: '',
        chapter_id: '',
        description: '',
        notes: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setData(e.target.name, e.target.value);
    };

    const handleEditorChange = (content: string, editor: any) => {
        const name = editor.targetElm.name;
        setData(name, content);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/lessons');
    };

    return (
        <div className="container mx-auto p-4 mt-4 rounded-lg" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%,rgb(169, 196, 230) 39%,rgb(222, 208, 208) 76%,rgba(166, 164, 164, 0.8) 100%)' }}>
            <h1 className="text-2xl font-bold mb-4">Ajouter une Leçon</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg"
                    />
                    {errors.title && <div className="text-red-600">{errors.title}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="course_id" className="block text-sm font-medium text-gray-700">Cours</label>
                    <select
                        name="course_id"
                        value={data.course_id}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg"
                    >
                        <option value="">Sélectionnez un cours</option>
                        {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                                {course.title}
                            </option>
                        ))}
                    </select>
                    {errors.course_id && <div className="text-red-600">{errors.course_id}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="chapter_id" className="block text-sm font-medium text-gray-700">Chapitre</label>
                    <select
                        name="chapter_id"
                        value={data.chapter_id}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg"
                    >
                        <option value="">Sélectionnez un chapitre</option>
                        {chapters.map((chapter) => (
                            <option key={chapter.id} value={chapter.id}>
                                {chapter.title}
                            </option>
                        ))}
                    </select>
                    {errors.chapter_id && <div className="text-red-600">{errors.chapter_id}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg"
                    />
                    {errors.description && <div className="text-red-600">{errors.description}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea
                        name="notes"
                        value={data.notes}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg"
                    />
                    {errors.notes && <div className="text-red-600">{errors.notes}</div>}
                </div>
                <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Soumettre
                    </span>
                </button>
            </form>
        </div>
    );
};

export default CreateLesson;
