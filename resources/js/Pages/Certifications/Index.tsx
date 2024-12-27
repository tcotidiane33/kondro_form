import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import CertificationTile from '@/Components/CertificationTile';

interface Certification {
    id: number;
    name: string;
    description: string;
    price: number;
    is_pro: boolean;
    discount?: number;
}

interface Promotion {
    id: number;
    title: string;
    description: string;
    discount: number;
}

interface CertificationsIndexProps {
    certifications: Certification[];
    certificationsPro: Certification[];
    promotions: Promotion[];
}

const CertificationsIndex: React.FC<CertificationsIndexProps> = ({ certifications, certificationsPro, promotions }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCertifications = certifications.filter(certification =>
        certification.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        certification.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Certifications</h2>
                <div className="mt-4">
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search certifications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCertifications.map(certification => (
                        <div key={certification.id} className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-medium text-gray-900">{certification.name}</h3>
                            <p className="mt-2 text-sm text-gray-500">{certification.description}</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">${certification.price}</p>
                            <Link
                                href={`/certifications/${certification.id}`}
                                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Certifications Pro</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificationsPro.map((cert, index) => (
                        <CertificationTile
                            key={index}
                            title={cert.name}
                            status="Pro"
                            badgeSrc="https://assets.ine.com/certifications/badges/eDA.png"
                            difficulty="Intermediate"
                            link={`/certifications/${cert.id}`}
                        />
                    ))}
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-12">Promotions</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {promotions.map((promo, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-6">
                            <div className="promotion-tile__badge mb-4 flex justify-center items-center p-1" style={{ background: 'indigo' }}>
                                <img src="https://assets.ine.com/certifications/badges/eDA.png" alt="Promotion Badge" className="promotion-tile__badge-logo w-25 h-25 filter brightness-150" style={{ filter: 'hue-rotate(30deg)' }} />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">{promo.title}</h3>
                            <p className="mt-2 text-sm text-gray-500">{promo.description}</p>
                            <p className="mt-2 text-sm text-gray-900 font-bold">Discount: {promo.discount}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
};

export default CertificationsIndex;
