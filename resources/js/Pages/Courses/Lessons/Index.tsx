import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import DeleteLessonModal from './DeleteLessonModal';
import AddMaterialModal from '../Materials/AddMaterialModal';
import EditMaterialModal from '../Materials/EditMaterialModal';
import DeleteMaterialModal from '../Materials/DeleteMaterialModal';

interface Material {
    id: number;
    title: string;
    type: string;
    content: string;
    content_url: string;
}

interface Lesson {
    id: number;
    title: string;
    description: string;
    materials?: Material[]; // Ajout de ? pour indiquer que materials peut être indéfini
}

interface Chapter {
    id: number;
    title: string;
    lessons: Lesson[];
}

interface Course {
    id: number;
    title: string;
    chapters: Chapter[];
}

interface Props {
    courses?: Course[];
}

const LessonIndex: React.FC<Props> = ({ courses = [] }) => {
    const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
    const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
    const [isAddMaterialModalOpen, setIsAddMaterialModalOpen] = useState(false);
    const [isEditMaterialModalOpen, setIsEditMaterialModalOpen] = useState(false);
    const [isDeleteMaterialModalOpen, setIsDeleteMaterialModalOpen] = useState(false);

    const handleDeleteClick = (lessonId: number) => {
        setSelectedLessonId(lessonId);
    };

    const handleCloseModal = () => {
        setSelectedLessonId(null);
        setSelectedMaterial(null);
        setIsAddMaterialModalOpen(false);
        setIsEditMaterialModalOpen(false);
        setIsDeleteMaterialModalOpen(false);
    };

    const handleAddMaterialClick = (lessonId: number) => {
        setSelectedLessonId(lessonId);
        setIsAddMaterialModalOpen(true);
    };

    const handleEditMaterialClick = (lessonId: number, material: Material) => {
        setSelectedLessonId(lessonId);
        setSelectedMaterial(material);
        setIsEditMaterialModalOpen(true);
    };

    const handleDeleteMaterialClick = (lessonId: number, materialId: number) => {
        setSelectedLessonId(lessonId);
        setSelectedMaterial({ id: materialId, title: '', type: '', content: '', content_url: '' });
        setIsDeleteMaterialModalOpen(true);
    };

    return (
        <div className="container mx-auto p-4 mt-4 rounded-lg" style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%,rgb(169, 196, 230) 39%,rgb(222, 208, 208) 76%,rgba(166, 164, 164, 0.8) 100%)' }}>
            <h1 className="text-2xl font-bold mb-4">Leçons</h1>
            <InertiaLink href="/lessons/create" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Ajouter une Leçon
                </span>
            </InertiaLink>
            <div className="relative overflow-x-auto rounded-lg shadow-lg p-4">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <div key={course.id} className="mb-6">
                            <h2 className="text-xl font-semibold">{course.title}</h2>
                            {course.chapters.length > 0 ? (
                                course.chapters.map((chapter) => (
                                    <div key={chapter.id} className="mb-4 rounded-lg">
                                        <h3 className="text-lg font-medium">{chapter.title}</h3>
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-4 py-2">Titre</th>
                                                    <th scope="col" className="px-4 py-2">Description</th>
                                                    <th scope="col" className="px-4 py-2">Matériaux</th>
                                                    <th scope="col" className="px-4 py-2">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                  {chapter.lessons.map((lesson) => (
                                                    <tr key={lesson.id} className="hover:bg-gray-100 transition duration-300 ease-in-out bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <td className="px-4 py-2">{lesson.title}</td>
                                                        <td className="px-4 py-2">{lesson.description}</td>
                                                        <td className="px-4 py-2">
                                                            {lesson.materials && lesson.materials.length > 0 ? (
                                                                <ul>
                                                                    {lesson.materials.map((material) => (
                                                                        <li key={material.id}>
                                                                            {material.title} ({material.type})
                                                                            <button onClick={() => handleEditMaterialClick(lesson.id, material)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center me-2 mb-2">Éditer</button>
                                                                            <button onClick={() => handleDeleteMaterialClick(lesson.id, material.id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center me-2 mb-2">Supprimer</button>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            ) : (
                                                                <p>Aucun matériel</p>
                                                            )}
                                                            <button onClick={() => handleAddMaterialClick(lesson.id)} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center me-2 mb-2">Ajouter un Matériel</button>
                                                        </td>
                                                        <td className="px-4 py-2 space-x-2">
                                                            <InertiaLink href={`/lessons/${lesson.id}/edit`} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                                <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                                    Éditer
                                                                </span>
                                                            </InertiaLink>
                                                            <InertiaLink href={`/lessons/${lesson.id}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                                                <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                                    Voir
                                                                </span>
                                                            </InertiaLink>
                                                            <button onClick={() => handleDeleteClick(lesson.id)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                                                <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                                    Supprimer
                                                                </span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))
                            ) : (
                                <p>Aucun chapitre disponible pour ce cours.</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Aucun cours disponible.</p>
                )}
            </div>
            {selectedLessonId && (
                <DeleteLessonModal lessonId={selectedLessonId} onClose={handleCloseModal} />
            )}
            {isAddMaterialModalOpen && selectedLessonId && (
                <AddMaterialModal lessonId={selectedLessonId} onClose={handleCloseModal} />
            )}
            {isEditMaterialModalOpen && selectedLessonId && selectedMaterial && (
                <EditMaterialModal lessonId={selectedLessonId} material={selectedMaterial} onClose={handleCloseModal} />
            )}
            {isDeleteMaterialModalOpen && selectedLessonId && selectedMaterial && (
                <DeleteMaterialModal lessonId={selectedLessonId} materialId={selectedMaterial.id} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default LessonIndex;
