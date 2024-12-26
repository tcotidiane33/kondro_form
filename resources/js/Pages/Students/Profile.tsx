import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface ProfileProps {
    student: {
        id: number;
        name: string;
        email: string;
        contact?: string;
        date_of_birth?: string;
        gender?: string;
        bio?: string;
        profession?: string;
        nationality?: string;
        address?: string;
        city?: string;
        state?: string;
        postcode?: string;
        country?: string;
        image?: string;
    };
    enrollments: {
        id: number;
        course: {
            title: string;
        };
    }[];
}

const Profile: React.FC<ProfileProps> = ({ student, enrollments }) => {
    return (
        <AuthenticatedLayout>
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Profil de l'étudiant
            </h2>
            <Head title="Profil de l'étudiant" />

            <div className="container mx-auto mt-4 mb-4">
                <div className="flex flex-wrap">
                    {/* Left Sidebar */}
                    <div className="w-full md:w-1/3 px-4">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
                            <div className="p-6 text-center">
                                <img src={student.image ? `/storage/${student.image}` : "https://via.placeholder.com/100"} alt="Profile" className="rounded-full mb-3 mx-auto" />
                                <h4 className="text-lg font-semibold">{student.name}</h4>
                                <p className="text-gray-600">{student.profession}<br />{student.city}, {student.state}, {student.country}</p>
                                <button className="btn btn-primary btn-sm mt-2">Follow</button>
                                <button className="btn btn-outline-primary btn-sm mt-2">Message</button>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><i className="fas fa-globe"></i> Website: <a href="#">https://bootdey.com</a></li>
                                <li className="list-group-item"><i className="fab fa-github"></i> Github: bootdey</li>
                                <li className="list-group-item"><i className="fab fa-twitter"></i> Twitter: @bootdey</li>
                                <li className="list-group-item"><i className="fab fa-instagram"></i> Instagram: bootdey</li>
                                <li className="list-group-item"><i className="fab fa-facebook"></i> Facebook: bootdey</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-2/3 px-4 mt-4 md:mt-0">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h5 className="text-lg font-semibold">Nom complet</h5>
                                <p>{student.name}</p>
                                <h5 className="text-lg font-semibold">Email</h5>
                                <p>{student.email}</p>
                                <h5 className="text-lg font-semibold">Téléphone</h5>
                                <p>{student.contact}</p>
                                <h5 className="text-lg font-semibold">Date de naissance</h5>
                                <p>{student.date_of_birth}</p>
                                <h5 className="text-lg font-semibold">Adresse</h5>
                                <p>{student.address}, {student.city}, {student.state}, {student.postcode}, {student.country}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-4">
                            <div className="w-full md:w-1/2 px-2">
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="p-6">
                                        <h5 className="text-gray-600">Assignment</h5>
                                        <h6 className="font-semibold">Project Status</h6>
                                        <p>Web Design</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                        <p>Website Markup</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '72%' }}></div>
                                        </div>
                                        <p>One Page</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-2 mt-4 md:mt-0">
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="p-6">
                                        <h5 className="text-gray-600">Assignment</h5>
                                        <h6 className="font-semibold">Project Status</h6>
                                        <p>Mobile Template</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '55%' }}></div>
                                        </div>
                                        <p>Backend API</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                                        </div>
                                        <p>Database Design</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 shadow-xl">
                        <Typography
                            variant="h1"
                            className="text-center text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-8"
                        >
                            Student Profile
                        </Typography>

                        <Grid container spacing={4}>
                            {[
                                { label: 'Name', value: student.name },
                                { label: 'Email', value: student.email },
                                { label: 'Contact', value: student.contact },
                                { label: 'Date of Birth', value: student.date_of_birth },
                                { label: 'Gender', value: student.gender },
                                { label: 'Nationality', value: student.nationality },
                                { label: 'Address', value: student.address },
                                { label: 'City', value: student.city },
                                { label: 'State', value: student.state },
                                { label: 'Postcode', value: student.postcode },
                                { label: 'Country', value: student.country },
                            ].map((field, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card className="rounded-lg shadow-lg bg-gray-100 dark:bg-gray-700 hover:shadow-2xl transition-all duration-300">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900 dark:text-gray-500">
                                                {field.label}
                                            </Typography>
                                            <Typography variant="h5" className="text-gray-900 dark:text-gray-500">
                                                {field.value}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
};

export default Profile;
