import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

interface Material {
    id: number;
    title: string;
}

interface IndexProps {
    materials: Material[];
}

const Index: React.FC<IndexProps> = ({ materials }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des matériaux</h1>
            <InertiaLink href="/admin/materials/create" className="btn btn-primary mb-4">Ajouter un matériau</InertiaLink>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Titre</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map((material) => (
                        <tr key={material.id}>
                            <td className="border px-4 py-2">{material.title}</td>
                            <td className="border px-4 py-2">
                                <InertiaLink href={`/admin/materials/${material.id}/edit`} className="btn btn-sm btn-primary mr-2">Modifier</InertiaLink>
                                <InertiaLink href={`/admin/materials/${material.id}/delete`} className="btn btn-sm btn-danger">Supprimer</InertiaLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
