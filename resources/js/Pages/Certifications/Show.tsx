import React from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

interface Certification {
    id: number;
    name: string;
    description: string;
    price: number;
    is_pro: boolean;
    discount?: number;
}

interface CertificationShowProps {
    certification: Certification;
}

const CertificationShow: React.FC<CertificationShowProps> = ({ certification }) => {
    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">{certification.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{certification.description}</p>
                <p className="mt-4 text-sm text-gray-900 font-bold">${certification.price}</p>
                {certification.is_pro && (
                    <p className="mt-2 text-sm text-gray-900 font-bold">This is a Pro Certification</p>
                )}
                {certification.discount && (
                    <p className="mt-2 text-sm text-gray-900 font-bold">Discount: {certification.discount}%</p>
                )}
                <Link
                    href="/certifications"
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Back to Certifications
                </Link>
            </div>
        </PublicLayout>
    );
};

export default CertificationShow;
