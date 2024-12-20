import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Props {
    lessonId: number;
    onClose: () => void;
}

const AddMaterialModal: React.FC<Props> = ({ lessonId, onClose }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [content, setContent] = useState('');
    const [contentUrl, setContentUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post(`/lessons/${lessonId}/materials`, {
            title,
            type,
            content,
            content_url: contentUrl,
        });
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Ajouter un Matériel</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Titre</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} title="Titre" placeholder="Entrez le titre ici" />
                    </div>
                    <div>
                        <label>Type</label>
                        <input type="text" value={type} onChange={(e) => setType(e.target.value)} title="Type" placeholder="Entrez le type ici" />
                    </div>
                    <div>
                        <label>Contenu</label>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Entrez le contenu ici" />
                    </div>
                    <div>
                        <label>URL du Contenu</label>
                        <input type="text" value={contentUrl} onChange={(e) => setContentUrl(e.target.value)} title="URL du Contenu" placeholder="Entrez l'URL du contenu ici" />
                    </div>
                    <button type="submit">Ajouter</button>
                </form>
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default AddMaterialModal;
