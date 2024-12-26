import React from 'react';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

interface StudentDashboardProps {
    student: any;
    courses: any[];
    answers: any[];
    role: string;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ student, courses, answers, role }) => {
    return (
        <Authenticated>
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-100 text-gray-900 h-screen p-4 shadow-md">
                    <div className="mb-8">
                        <Typography variant="h5" className="text-gray-900 font-semibold">Dashboard</Typography>
                    </div>
                    <nav>
                        <ul>
                            <li className="mb-4">
                                <Link href="#" className="text-gray-900 hover:text-gray-600">Profile</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="text-gray-900 hover:text-gray-600">Courses</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="text-gray-900 hover:text-gray-600">Answers</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-gray-50 p-8">
                    <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-lg">
                            <Typography variant="h4" gutterBottom className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-8">
                                Student Dashboard
                            </Typography>
                            <Typography variant="h6" className="text-gray-900 text-xl mb-4">
                                Role: {role}
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-lg">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900">Name</Typography>
                                            <Typography variant="h4" className="text-gray-900">{student.name}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card className="bg-gradient-to-r from-pink-100 to-pink-300 rounded-lg shadow-lg">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900">Email</Typography>
                                            <Typography variant="h4" className="text-gray-900">{student.email}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card className="bg-gradient-to-r from-yellow-100 to-yellow-300 rounded-lg shadow-lg">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900">Courses</Typography>
                                            <List>
                                                {courses.map(course => (
                                                    <ListItem key={course.id}>
                                                        <ListItemText primary={course.title} className="text-gray-900" />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card className="bg-gradient-to-r from-green-100 to-green-300 rounded-lg shadow-lg">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900">Answers</Typography>
                                            <List>
                                                {answers.map(answer => (
                                                    <ListItem key={answer.id}>
                                                        <ListItemText primary={answer.answer} className="text-gray-900" />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    </section>
                </main>
            </div>
        </Authenticated>
    );
};

export default StudentDashboard;
