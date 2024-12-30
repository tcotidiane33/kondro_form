import React from 'react';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

interface StudentDashboardProps {
    student: any;
    courses: any[];
    answers: any[];
    enrollments: any[];
    payments: any[];
    role: string;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ student, courses = [], answers = [], enrollments = [], payments = [], role }) => {
    return (
        <Authenticated>
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-44  text-gray-900 h-screen p-4 shadow-md rounded-lg "  style={{ backgroundImage: 'linear-gradient(-45deg, #35C3F3 0%, #8b9fe8 20%, rgb(169, 196, 230) 39%, rgb(222, 208, 208) 76%, rgba(166, 164, 164, 0.8) 100%)' }}>
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
                            <li className="mb-4">
                                <Link href="#" className="text-gray-900 hover:text-gray-600">Enrollments</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="text-gray-900 hover:text-gray-600">Payments</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1  p-2" >
                    <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-lg">
                            <Typography variant="h4" gutterBottom className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-8">
                                Student Dashboard
                            </Typography>
                            <Typography variant="h6" className="text-gray-900 text-xl mb-4">
                                Role: <span className="bg-purple-100 text-purple-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-purple-400 border border-purple-400">{role}</span>
                            </Typography>
                            <Grid container spacing={3}>
                                {/* Profile Section */}
                                <Grid item xs={12}>
                                    <Card className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-lg mb-8">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900">Profile</Typography>
                                            <Typography variant="h5" className="text-gray-900">{student.name}</Typography>
                                            <Typography variant="h5" className="text-gray-900">{student.email}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                {/* Courses Carousel Section */}
                                <Grid item xs={12}>
                                    <Card className="bg-gradient-to-r from-green-100 to-green-300 rounded-lg shadow-lg mb-8">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900">Liste des Cours</Typography>
                                            <div className="carousel flex flex-wrap -mx-2">
                                                {courses.map(course => (
                                                    <div key={course.id} className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                                                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                                        <Typography variant="h5" className="text-gray-900">{course.title}</Typography>
                                                        <Typography variant="body1" className="text-gray-700">Instructor: {course.instructor}</Typography>
                                                        <Typography variant="body2" className="text-gray-600">{course.description}</Typography>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    {/* <Typography variant="h6" className="text-gray-900 mt-4">Wish List</Typography>
                                    <List>
                                        {student.wishlist.map(item => (
                                            <ListItem key={item.id}>
                                                <ListItemText primary={item.title} className="text-gray-900" />
                                            </ListItem>
                                        ))}
                                    </List> */}
                                    </Card>
                                </Grid>


                                {/* Answers Section */}
                                <Grid item xs={12}>
                                    <Card className="bg-gradient-to-r from-yellow-100 to-yellow-300 rounded-lg shadow-lg mb-8">
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

                                {/* Enrollments Section */}
                                <Grid item xs={12}>
                                    <Card className="bg-gradient-to-r from-purple-100 to-purple-300 rounded-lg shadow-lg mb-8">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900">Enrollments</Typography>
                                            <List>
                                                {enrollments.map(enrollment => (
                                                    <ListItem key={enrollment.id}>
                                                        <ListItemText primary={enrollment.course_title} className="text-gray-900" />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                {/* Payments Section */}
                                <Grid item xs={12}>
                                    <Card className="bg-gradient-to-r from-red-100 to-red-300 rounded-lg shadow-lg mb-8">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900">Payments</Typography>
                                            <List>
                                                {payments.map(payment => (
                                                    <ListItem key={payment.id}>
                                                        <ListItemText primary={`Payment ID: ${payment.id}, Amount: ${payment.amount}`} className="text-gray-900" />
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
