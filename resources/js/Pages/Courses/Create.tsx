import React from 'react';
import { useForm, usePage, Link } from '@inertiajs/react';

interface CourseCategory {
    id: number;
    category_name: string;
}

interface Instructor {
    id: number;
    name: string;
}

interface Language {
    code: string;
    name: string;
}

interface PageProps {
    auth: {
        user: {
            id: number;
            name: string;
        };
    };
    courseCategories: CourseCategory[];
    instructors: Instructor[];
    languages: Language[];
}

const CreateCourse = () => {
    const { courseCategories, instructors, languages } = usePage<PageProps>().props;
    const { data, setData, post, errors } = useForm({
        title: '',
        description: '',
        course_category_id: '',
        instructor_id: '',
        type: 'paid',
        price: '',
        old_price: '',
        subscription_price: '',
        start_from: '',
        duration: '',
        lesson: '',
        prerequisites: '',
        difficulty: 'beginner',
        course_code: '',
        image: null as string | null,
        thumbnail_image: null as string | null,
        thumbnail_video: '',
        status: 0,
        language: 'fr',
        tag: 'popular',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('courses.store'));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const files = e.target.files;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setData(field, reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Créer un nouveau cours</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Titre</label>
                    <input
                        id="title"
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.title && <div className="text-red-500 text-sm mt-2">{errors.title}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.description && <div className="text-red-500 text-sm mt-2">{errors.description}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="course_category_id" className="block text-gray-700 font-bold mb-2">Catégorie</label>
                    <select
                        id="course_category_id"
                        value={data.course_category_id}
                        onChange={(e) => setData('course_category_id', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Sélectionnez une catégorie</option>
                        {courseCategories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                    {errors.course_category_id && <div className="text-red-500 text-sm mt-2">{errors.course_category_id}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="instructor_id" className="block text-gray-700 font-bold mb-2">Instructeur</label>
                    <select
                        id="instructor_id"
                        value={data.instructor_id}
                        onChange={(e) => setData('instructor_id', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Sélectionnez un instructeur</option>
                        {instructors.map((instructor) => (
                            <option key={instructor.id} value={instructor.id}>
                                {instructor.name}
                            </option>
                        ))}
                    </select>
                    {errors.instructor_id && <div className="text-red-500 text-sm mt-2">{errors.instructor_id}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Type</label>
                    <select
                        id="type"
                        value={data.type}
                        onChange={(e) => setData('type', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="free">Gratuit</option>
                        <option value="paid">Payant</option>
                        <option value="subscription">Abonnement</option>
                    </select>
                    {errors.type && <div className="text-red-500 text-sm mt-2">{errors.type}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Prix</label>
                    <input
                        id="price"
                        type="number"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.price && <div className="text-red-500 text-sm mt-2">{errors.price}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="old_price" className="block text-gray-700 font-bold mb-2">Ancien Prix</label>
                    <input
                        id="old_price"
                        type="number"
                        value={data.old_price}
                        onChange={(e) => setData('old_price', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.old_price && <div className="text-red-500 text-sm mt-2">{errors.old_price}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="subscription_price" className="block text-gray-700 font-bold mb-2">Prix d'abonnement</label>
                    <input
                        id="subscription_price"
                        type="number"
                        value={data.subscription_price}
                        onChange={(e) => setData('subscription_price', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.subscription_price && <div className="text-red-500 text-sm mt-2">{errors.subscription_price}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="start_from" className="block text-gray-700 font-bold mb-2">Commence à partir de</label>
                    <input
                        id="start_from"
                        type="date"
                        value={data.start_from}
                        onChange={(e) => setData('start_from', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.start_from && <div className="text-red-500 text-sm mt-2">{errors.start_from}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">Durée</label>
                    <input
                        id="duration"
                        type="number"
                        value={data.duration}
                        onChange={(e) => setData('duration', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.duration && <div className="text-red-500 text-sm mt-2">{errors.duration}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="lesson" className="block text-gray-700 font-bold mb-2">Leçon</label>
                    <input
                        id="lesson"
                        type="number"
                        value={data.lesson}
                        onChange={(e) => setData('lesson', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.lesson && <div className="text-red-500 text-sm mt-2">{errors.lesson}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="prerequisites" className="block text-gray-700 font-bold mb-2">Prérequis</label>
                    <input
                        id="prerequisites"
                        type="text"
                        value={data.prerequisites}
                        onChange={(e) => setData('prerequisites', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.prerequisites && <div className="text-red-500 text-sm mt-2">{errors.prerequisites}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="difficulty" className="block text-gray-700 font-bold mb-2">Difficulté</label>
                    <select
                        id="difficulty"
                        value={data.difficulty}
                        onChange={(e) => setData('difficulty', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="beginner">Débutant</option>
                        <option value="intermediate">Intermédiaire</option>
                        <option value="advanced">Avancé</option>
                    </select>
                    {errors.difficulty && <div className="text-red-500 text-sm mt-2">{errors.difficulty}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="course_code" className="block text-gray-700 font-bold mb-2">Code du cours</label>
                    <input
                        id="course_code"
                        type="text"
                        value={data.course_code}
                        onChange={(e) => setData('course_code', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.course_code && <div className="text-red-500 text-sm mt-2">{errors.course_code}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image</label>
                    <input
                        id="image"
                        type="file"
                        onChange={(e) => handleFileChange(e, 'image')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.image && <div className="text-red-500 text-sm mt-2">{errors.image}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="thumbnail_image" className="block text-gray-700 font-bold mb-2">Image miniature</label>
                    <input
                        id="thumbnail_image"
                        type="file"
                        onChange={(e) => handleFileChange(e, 'thumbnail_image')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.thumbnail_image && <div className="text-red-500 text-sm mt-2">{errors.thumbnail_image}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="thumbnail_video" className="block text-gray-700 font-bold mb-2">Vidéo de présentation</label>
                    <input
                        id="thumbnail_video"
                        type="text"
                        value={data.thumbnail_video}
                        onChange={(e) => setData('thumbnail_video', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.thumbnail_video && <div className="text-red-500 text-sm mt-2">{errors.thumbnail_video}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Statut</label>
                    <select
                        id="status"
                        value={data.status}
                        onChange={(e) => setData('status', parseInt(e.target.value))}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value={0}>En attente</option>
                        <option value={1}>Inactif</option>
                        <option value={2}>Actif</option>
                    </select>
                    {errors.status && <div className="text-red-500 text-sm mt-2">{errors.status}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="language" className="block text-gray-700 font-bold mb-2">Langue</label>
                    <select
                        id="language"
                        value={data.language}
                        onChange={(e) => setData('language', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="en">Anglais</option>
                        <option value="fr">Français</option>
                    </select>
                    {errors.language && <div className="text-red-500 text-sm mt-2">{errors.language}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="tag" className="block text-gray-700 font-bold mb-2">Tag</label>
                    <select
                        id="tag"
                        value={data.tag}
                        onChange={(e) => setData('tag', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="popular">Populaire</option>
                        <option value="featured">En vedette</option>
                        <option value="upcoming">À venir</option>
                    </select>
                    {errors.tag && <div className="text-red-500 text-sm mt-2">{errors.tag}</div>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Soumettre
                    </button>
                    <Link href={route('courses.index')} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                        Annuler
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CreateCourse;
