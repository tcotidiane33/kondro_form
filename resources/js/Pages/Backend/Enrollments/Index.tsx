import React from 'react';
import { InertiaLink, useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

interface EnrollmentProps {
    enrollments: any[];
}

const EnrollmentIndex: React.FC<EnrollmentProps> = ({ enrollments }) => {
    const { post } = useForm();

    const handleEnroll = (courseId: number) => {
        post(route('enrollments.enroll', courseId));
    };

    const handleUnenroll = (courseId: number) => {
        post(route('enrollments.unenroll', courseId));
    };

    return (
        <Authenticated>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 shadow-lg">
                        <Typography variant="h4" gutterBottom className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-8">
                            My Enrollments
                        </Typography>
                        <Grid container spacing={3}>
                            {enrollments.map((enrollment) => (
                                <Grid item xs={12} sm={6} md={4} key={enrollment.id}>
                                    <Card className="rounded-lg shadow-lg mb-8">
                                        <CardContent>
                                            <Typography variant="h6" className="text-gray-900 dark:text-white">{enrollment.course.title}</Typography>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleUnenroll(enrollment.course_id)}
                                            >
                                                Unenroll
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </section>
        </Authenticated>
    );
};

export default EnrollmentIndex;
