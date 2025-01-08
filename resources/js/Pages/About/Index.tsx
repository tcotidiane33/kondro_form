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
                <section className="mt-2">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">

                        <div className="container items-center justify-center bg-gray-100 rounded-lg">
                            <div className=" px-4 sm:px-6 lg:px-8 py-4">
                                <div className=" text-lg text-gray-700">
                                    <div className="content">
                                        <h1 className="header">Workforce Development for Modern Networking and Cybersecurity Teams</h1>
                                        <p className="subheader">Develop and refine skills for improved organizational resiliency with hands-on training and certifications.</p>

                                        <div className="stats">
                                            <div className="stat">
                                                <h2>700+</h2>
                                                <p>Courses</p>
                                            </div>
                                            <div className="stat">
                                                <h2>50+</h2>
                                                <p>Learning Paths</p>
                                            </div>
                                            <div className="stat">
                                                <h2>10</h2>
                                                <p>Certifications</p>
                                            </div>
                                            <div className="stat">
                                                <h2>28</h2>
                                                <p>Vendor Cert Prep</p>
                                            </div>
                                        </div>

                                        <div className="buttons">
                                            <a href="#" className="button business">For Businesses</a>
                                            <a href="#" className="button individual">For Individuals</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lava-container flex items-center justify-center  rounded-lg">
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-1.webp" alt="Lava background 1" className="space-y-4 lava-image lava-image-1" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-2.webp" alt="Lava background 2" className="space-y-4 lava-image lava-image-2" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-3.webp" alt="Lava background 3" className="space-y-4 lava-image lava-image-3" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-4.webp" alt="Lava background 4" className="space-y-4 lava-image lava-image-4" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-5.webp" alt="Lava background 5" className="space-y-4 lava-image lava-image-5" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-6.webp" alt="Lava background 6" className="space-y-4 lava-image lava-image-6" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-7.webp" alt="Lava background 7" className="space-y-4 lava-image lava-image-7" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-8.webp" alt="Lava background 8" className="space-y-4 lava-image lava-image-8" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-9.webp" alt="Lava background 9" className="space-y-4 lava-image lava-image-9" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-10.webp" alt="Lava background 10" className="lava-image lava-image-10" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-11.webp" alt="Lava background 11" className="lava-image lava-image-11" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-12.webp" alt="Lava background 12" className="lava-image lava-image-12" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-13.webp" alt="Lava background 13" className="lava-image lava-image-13" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-14.webp" alt="Lava background 14" className="lava-image lava-image-14" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-15.webp" alt="Lava background 15" className="lava-image lava-image-15" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-16.webp" alt="Lava background 16" className="lava-image lava-image-16" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-17.webp" alt="Lava background 17" className="lava-image lava-image-17" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-18.webp" alt="Lava background 18" className="lava-image lava-image-18" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-19.webp" alt="Lava background 19" className="lava-image lava-image-19" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-20.webp" alt="Lava background 20" className="lava-image lava-image-20" />
                            <img src="/assets/backgrounds/bg-lava/lava-gradient-21.webp" alt="Lava background 21" className="lava-image lava-image-21" />
                        </div>
                    </div>
                </section>
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
