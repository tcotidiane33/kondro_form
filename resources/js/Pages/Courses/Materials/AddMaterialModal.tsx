import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Props {
    lessonId: number;
    onClose: () => void;
}

const AddMaterialModal: React.FC<Props> = ({ lessonId, onClose }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('video'); // Default type set to 'video'
    const [content, setContent] = useState('');
    const [contentUrl, setContentUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post(`/lessons/${lessonId}/materials`, {
            title,
            type,
            content,
            content_url: contentUrl,
            lesson_id: lessonId, // Ajout du lesson_id
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Ajouter un Matériel</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Titre</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Entrez le titre ici"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Type</label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        >
                            <option value="video">Vidéo</option>
                            <option value="document">Document</option>
                            <option value="quiz">Quiz</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contenu</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Entrez le contenu ici"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">URL du Contenu</label>
                        <input
                            type="text"
                            value={contentUrl}
                            onChange={(e) => setContentUrl(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Entrez l'URL du contenu ici"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-lg"
                        >
                            Fermer
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMaterialModal;
