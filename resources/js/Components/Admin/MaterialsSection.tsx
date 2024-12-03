import React from 'react';
import { Link } from '@inertiajs/react';

interface Material {
    id: number;
    title: string;
}

interface MaterialsSectionProps {
    materials: Material[];
}

const MaterialsSection: React.FC<MaterialsSectionProps> = ({ materials }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Matériaux</h2>
            <ul className="space-y-2">
                {materials.map((material) => (
                    <li key={material.id} className="bg-gray-100 p-4 rounded-lg">
                        <Link href={`/materials/${material.id}`} className="text-blue-400 hover:underline">
                            {material.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MaterialsSection;
