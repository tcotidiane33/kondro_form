import React from 'react';
import Slider from 'react-slick';
import PublicLayout from '@/Layouts/PublicLayout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Partner {
    name: string;
    logo: string;
}

interface Certification {
    name: string;
    logo: string;
}

interface Reference {
    name: string;
    logo: string;
}

interface Expert {
    name: string;
    role: string;
    profile_image: string;
    bio: string;
    linkedin: string;
}

interface AboutIndexProps {
    missions: string[];
    defis: string[];
    partenaires: Partner[];
    certifications: Certification[];
    references: Reference[];
    experts: Expert[];
    contact: {
        address: string;
        phone: string;
        email: string;
    };
}

const AboutIndex: React.FC<AboutIndexProps> = ({ missions, defis, partenaires, certifications, references, experts, contact }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">À propos de nous</h2>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Nos Missions</h3>
                    <ul className="list-disc list-inside mt-4">
                        {missions.map((mission, index) => (
                            <li key={index} className="text-gray-700">{mission}</li>
                        ))}
                    </ul>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Nos Défis</h3>
                    <ul className="list-disc list-inside mt-4">
                        {defis.map((defi, index) => (
                            <li key={index} className="text-gray-700">{defi}</li>
                        ))}
                    </ul>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Nos Partenaires</h3>
                    <Slider {...sliderSettings} className="mt-4">
                        {partenaires.map((partner, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-cover" />
                            </div>
                        ))}
                    </Slider>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Nos Certifications</h3>
                    <Slider {...sliderSettings} className="mt-4">
                        {certifications.map((certification, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <img src={certification.logo} alt={certification.name} className="w-32 h-32 object-cover" />
                            </div>
                        ))}
                    </Slider>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Nos Références</h3>
                    <Slider {...sliderSettings} className="mt-4">
                        {references.map((reference, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <img src={reference.logo} alt={reference.name} className="w-32 h-32 object-cover" />
                            </div>
                        ))}
                    </Slider>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Notre Équipe d'Experts</h3>
                    <div className="flex flex-wrap gap-4 mt-4">
                        {experts.map((expert, index) => (
                            <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
                                <img src={expert.profile_image} alt={expert.name} className="w-24 h-24 object-cover rounded-full mb-4" />
                                <div>
                                    <span className="text-gray-900 font-bold text-lg">{expert.name}</span>
                                    <p className="text-gray-700">{expert.role}</p>
                                    <p className="text-gray-600 mt-2">{expert.bio}</p>
                                    <a href={expert.linkedin} className="text-indigo-600 hover:text-indigo-500 mt-2 inline-block">LinkedIn</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Contactez-nous</h3>
                    <div className="mt-4">
                        <p className="text-gray-700"><strong>Adresse :</strong> {contact.address}</p>
                        <p className="text-gray-700"><strong>Téléphone :</strong> {contact.phone}</p>
                        <p className="text-gray-700"><strong>Email :</strong> <a href={`mailto:${contact.email}`} className="text-indigo-600 hover:text-indigo-500">{contact.email}</a></p>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
};

export default AboutIndex;
