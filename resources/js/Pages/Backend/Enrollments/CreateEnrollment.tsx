import React from 'react';
import { useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Card, CardContent, Typography, Grid, TextField, Button, MenuItem } from '@mui/material';

interface CreateEnrollmentProps {
    courses: any[];
}

const CreateEnrollment: React.FC<CreateEnrollmentProps> = ({ courses }) => {
    const { data, setData, post, errors } = useForm({
        course_id: '',
        enrollment_date: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('enrollments.store'));
    };

    return (
        <Authenticated>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 shadow-lg">
                        <Typography variant="h4" gutterBottom className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-8">
                            Enroll in a Course
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        select
                                        label="Course"
                                        value={data.course_id}
                                        onChange={(e) => setData('course_id', e.target.value)}
                                        fullWidth
                                        error={!!errors.course_id}
                                        helperText={errors.course_id}
                                    >
                                        {courses.map((course) => (
                                            <MenuItem key={course.id} value={course.id}>
                                                {course.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Enrollment Date"
                                        type="date"
                                        value={data.enrollment_date}
                                        onChange={(e) => setData('enrollment_date', e.target.value)}
                                        fullWidth
                                        error={!!errors.enrollment_date}
                                        helperText={errors.enrollment_date}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>
                                        Enroll
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </section>
        </Authenticated>
    );
};

export default CreateEnrollment;
