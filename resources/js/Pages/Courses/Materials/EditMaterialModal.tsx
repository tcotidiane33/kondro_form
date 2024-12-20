import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Material {
    id: number;
    title: string;
    type: string;
    content: string;
    content_url: string;
}

interface Props {
    lessonId: number;
    material: Material;
    onClose: () => void;
}

const EditMaterialModal: React.FC<Props> = ({ lessonId, material, onClose }) => {
    const [title, setTitle] = useState(material.title);
    const [type, setType] = useState(material.type);
    const [content, setContent] = useState(material.content);
    const [contentUrl, setContentUrl] = useState(material.content_url);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.put(`/lessons/${lessonId}/materials/${material.id}`, {
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
                <h2>Éditer le Matériel</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Titre</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} title="Title" placeholder="Enter title" />
                    </div>
                    <div>
                        <label>Type</label>
                        <input type="text" value={type} onChange={(e) => setType(e.target.value)} title="Type" placeholder="Enter type" />
                    </div>
                    <div>
                        <label>Contenu</label>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} title="Content" placeholder="Enter content" />
                    </div>
                    <div>
                        <label>URL du Contenu</label>
                        <input type="text" value={contentUrl} onChange={(e) => setContentUrl(e.target.value)} title="Content URL" placeholder="Enter content URL" />
                    </div>
                    <button type="submit">Enregistrer</button>
                </form>
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default EditMaterialModal;
