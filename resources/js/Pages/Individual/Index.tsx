import React from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

interface Course {
    title: string;
    description: string;
    duration: string;
}

interface Testimonial {
    name: string;
    feedback: string;
    course: string;
}

interface IndividualIndexProps {
    courses: Course[];
    testimonials: Testimonial[];
}

const IndividualIndex: React.FC<IndividualIndexProps> = ({ courses, testimonials }) => {
    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Programmes pour les Individus</h2>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Nos Cours</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                            <div key={index} className="bg-white rounded-lg shadow p-6">
                                <h4 className="text-lg font-bold text-gray-900">{course.title}</h4>
                                <p className="text-gray-700">{course.description}</p>
                                <p className="text-gray-600 mt-2">Durée : {course.duration}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Témoignages</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow p-6">
                                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                                <p className="mt-4 text-gray-900 font-bold">{testimonial.name}</p>
                                <p className="text-gray-600">{testimonial.course}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Postuler</h3>
                    <Link
                        href={route('individual.apply')}
                        className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
                    >
                        Remplir le formulaire de candidature
                    </Link>
                </section>
            </div>
        </PublicLayout>
    );
};

export default IndividualIndex;
