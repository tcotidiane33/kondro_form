import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

interface Course {
    id: number;
    title: string;
    image: string;
    instructor?: {
        name: string;
        bio: string;
        image: string;
        designation: string;
    };
    enroll_count: number;
    wishlist_count: number;
}

interface EnrollmentProps {
    enrollments: {
        id: number;
        course: Course;
    }[];
    wishlist: {
        id: number;
        course: Course;
    }[];
}

const EnrollmentIndex: React.FC<EnrollmentProps> = ({ enrollments, wishlist }) => {
    const { post } = useForm();

    const handleUnenroll = (courseId: number) => {
        post(route('enrollments.unenroll', courseId));
    };

    const handleAddToWishlist = (courseId: number) => {
        post(route('wishlist.add', courseId));
    };
    return (
        <AuthenticatedLayout>
            <section className="container mx-auto p-6">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-4">Mes Cours</h2>
                    <Grid container spacing={4}>
                        {enrollments.map(enrollment => (
                            <Grid item key={enrollment.id} xs={12} sm={6} md={4}>
                                <Card className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-blue-700 p-2 rounded-lg m-4 transition-all duration-300">
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={enrollment.course.image}
                                        alt={enrollment.course.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" className="text-gray-900 dark:text-gray shadow">{enrollment.course.title}</Typography>
                                        <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                                            <Typography variant="body2" className="text-gray-700 dark:text-gray-300">
                                                {enrollment.course.enroll_count} Enrolled
                                            </Typography>
                                            <Typography variant="body2" className="text-gray-700 dark:text-gray-300 mt-2 sm:mt-0">
                                                {enrollment.course.wishlist_count} Wishlisted
                                            </Typography>
                                        </div>
                                        {enrollment.course.instructor && (
                                            <div className="flex items-center mt-2">
                                                <Avatar src={enrollment.course.instructor.image} alt={enrollment.course.instructor.name} className="mr-2 mb-2" />
                                                <Typography variant="body2" className="text-gray-700 dark:text-gray-300">{enrollment.course.instructor.name}</Typography>
                                            </div>
                                        )}

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleUnenroll(enrollment.course.id)}
                                            className="mt-2 flex items-center justify-end"
                                        >
                                            Unenroll
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div className="container">
                    <h2 className="text-2xl font-bold mt-8 mb-4">Liste de Souhaits</h2>
                    <List className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {wishlist.map(item => (
                            <ListItem
                                key={item.id}
                                alignItems="flex-start"
                                className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 hover:p-1 rounded-lg m-4 transition-all duration-300"
                            >
                                <ListItemAvatar>
                                    <Avatar variant="square" src={item.course.image} alt={item.course.title} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" className="text-gray-900 dark:text-white">
                                            {item.course.title}
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            {item.course.instructor && (
                                                <div className="grid gap-2 mt-2">
                                                    <Typography
                                                        component="span"
                                                        variant="body1"
                                                        className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
                                                    >
                                                        {item.course.instructor.name}
                                                    </Typography>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
                                                    >
                                                        {item.course.instructor.bio}
                                                    </Typography>
                                                </div>
                                            )}
                                        </React.Fragment>
                                    }
                                    className="mb-2"
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default EnrollmentIndex;
