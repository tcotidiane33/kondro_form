import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';

interface Testimonial {
    name: string;
    feedback: string;
    company: string;
}

interface JobOpening {
    title: string;
    location: string;
    type: string;
}

interface BusinessIndexProps {
    services: string[];
    testimonials: Testimonial[];
    jobOpenings: JobOpening[];
}

const BusinessIndex: React.FC<BusinessIndexProps> = ({ services, testimonials, jobOpenings }) => {
    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Solutions pour les Entreprises</h2>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Nos Services</h3>
                    <ul className="list-disc list-inside mt-4">
                        {services.map((service, index) => (
                            <li key={index} className="text-gray-700">{service}</li>
                        ))}
                    </ul>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Témoignages</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow p-6">
                                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                                <p className="mt-4 text-gray-900 font-bold">{testimonial.name}</p>
                                <p className="text-gray-600">{testimonial.company}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Offres d'Emploi</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobOpenings.map((job, index) => (
                            <div key={index} className="bg-white rounded-lg shadow p-6">
                                <h4 className="text-lg font-bold text-gray-900">{job.title}</h4>
                                <p className="text-gray-700">{job.location}</p>
                                <p className="text-gray-600">{job.type}</p>
                                <a href="#" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">Postuler</a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
};

export default BusinessIndex;
