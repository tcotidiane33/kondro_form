import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

interface Chapter {
    id: number;
    course_id: number;
    title: string;
    content: string;
}

interface Course {
    id: number;
    title: string;
}

interface CreateLessonProps {
    chapters: Chapter[];
    courses: Course[];
}

const CreateLesson: React.FC<CreateLessonProps> = ({ chapters, courses }) => {
    const { data, setData, post, errors, clearErrors, setError } = useForm({
        title: '',
        chapter_id: '',
        course_id: '',
        description: '',
        notes: '',
    });

    const [isNewChapter, setIsNewChapter] = useState(false);
    const [newChapter, setNewChapter] = useState({ title: '', content: '' });
    const [filteredChapters, setFilteredChapters] = useState<Chapter[]>([]);

    useEffect(() => {
        if (data.course_id) {
            const courseChapters = chapters.filter(chapter => chapter.course_id === parseInt(data.course_id));
            setFilteredChapters(courseChapters);
        } else {
            setFilteredChapters([]);
        }
    }, [data.course_id]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleChapterChange = (e) => {
        const selectedChapter = filteredChapters.find(chapter => chapter.id === parseInt(e.target.value));
        if (selectedChapter) {
            setData('description', selectedChapter.content);
        }
        setData('chapter_id', e.target.value);
    };

    const handleNewChapterChange = (e) => {
        setNewChapter({ ...newChapter, [e.target.name]: e.target.value });
    };

       const handleSubmit = (e) => {
        e.preventDefault();
        if (isNewChapter) {
            // Logic to create a new chapter and then create the lesson
            Inertia.post('/chapters', newChapter, {
                onSuccess: (page) => {
                    const createdChapter = page.props.chapter as Chapter;
                    setData('chapter_id', createdChapter.id);
                    setData('course_id', createdChapter.course_id);
                    post('/lessons', data);
                }
            });
        } else {
            post('/lessons', data);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Créer une nouvelle leçon</h1>
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
                        onChange={handleChapterChange}
                        className="mt-1 block w-full rounded-lg"
                        disabled={isNewChapter}
                        title="Sélectionnez un chapitre"
                    >
                        <option value="">Sélectionnez un chapitre</option>
                        {filteredChapters.map((chapter) => (
                            <option key={chapter.id} value={chapter.id}>
                                {chapter.title}
                            </option>
                        ))}
                    </select>
                    {errors.chapter_id && <div className="text-red-600">{errors.chapter_id}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="isNewChapter" className="block text-sm font-medium text-gray-700">
                        <input
                            type="checkbox"
                            name="isNewChapter"
                            checked={isNewChapter}
                            onChange={() => setIsNewChapter(!isNewChapter)}
                            title="Ajouter un nouveau chapitre"
                            placeholder="Ajouter un nouveau chapitre"
                        />
                        Ajouter un nouveau chapitre
                    </label>
                </div>
                {isNewChapter && (
                    <div className="mb-4">
                        <label htmlFor="newChapterTitle" className="block text-sm font-medium text-gray-700">Titre du nouveau chapitre</label>
                        <input
                            type="text"
                            name="title"
                            value={newChapter.title}
                            onChange={handleNewChapterChange}
                            className="mt-1 block w-full rounded-lg"
                        />
                        {errors.title && <div className="text-red-600">{errors.title}</div>}
                        <label htmlFor="newChapterContent" className="block text-sm font-medium text-gray-700">Contenu du nouveau chapitre</label>
                        <textarea
                            name="content"
                            value={newChapter.content}
                            onChange={handleNewChapterChange}
                            className="mt-1 block w-full rounded-lg"
                            title="Contenu du nouveau chapitre"
                            placeholder="Entrez le contenu du nouveau chapitre"
                        />
                        {errors.newChapterContent && <div className="text-red-600">{errors.newChapterContent}</div>}
                    </div>
                )}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg"
                        title="Description"
                        placeholder="Entrez la description"
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
                        title="Notes"
                        placeholder="Entrez les notes"
                    />
                    {errors.notes && <div className="text-red-600">{errors.notes}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Soumettre</button>
            </form>
        </div>
    );
};

export default CreateLesson;
