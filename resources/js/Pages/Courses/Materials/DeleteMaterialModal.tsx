import React from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Props {
    lessonId: number;
    materialId: number;
    onClose: () => void;
}

const DeleteMaterialModal: React.FC<Props> = ({ lessonId, materialId, onClose }) => {
    const handleDelete = () => {
        Inertia.delete(`/lessons/${lessonId}/materials/${materialId}`);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Supprimer le Matériel</h2>
                <p className="mb-4">Êtes-vous sûr de vouloir supprimer ce matériel ?</p>
                <div className="flex justify-end">
                    <button
                        onClick={handleDelete}
                        className="mr-2 px-4 py-2 bg-red-500 text-white rounded-lg"
                    >
                        Supprimer
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    >
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteMaterialModal;
