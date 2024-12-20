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
        <div className="modal">
            <div className="modal-content">
                <h2>Supprimer le Matériel</h2>
                <p>Êtes-vous sûr de vouloir supprimer ce matériel ?</p>
                <button onClick={handleDelete}>Supprimer</button>
                <button onClick={onClose}>Annuler</button>
            </div>
        </div>
    );
};

export default DeleteMaterialModal;
