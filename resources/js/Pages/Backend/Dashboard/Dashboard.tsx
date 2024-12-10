import React from 'react';
import { PageProps } from '@inertiajs/inertia';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Authenticated from '@/Layouts/AuthenticatedLayout';

interface DashboardProps {
    totalStudents: number;
    totalInstructors: number;
    totalCourses: number;
    totalLessons: number;
    totalEnrollments: number;
    totalRevenue: number;
    lastMonthStudents: number;
    lastMonthCourses: number;
    lastMonthRevenue: number;
    recentStudents: any[];
    monthlyRevenue: Record<string, number>;
}

const Dashboard: React.FC<DashboardProps> = (props) => {
    if (!props) {
        return <div>Loading...</div>;
    }

    const {
        totalStudents,
        totalInstructors,
        totalCourses,
        totalLessons,
        totalEnrollments,
        totalRevenue,
        lastMonthStudents,
        lastMonthCourses,
        lastMonthRevenue,
        recentStudents,
        monthlyRevenue,
    } = props;

    const monthlyRevenueData = {
        labels: Object.keys(monthlyRevenue),
        datasets: [
            {
                label: 'Monthly Revenue',
                data: Object.values(monthlyRevenue),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <Authenticated>
            <Typography variant="h4" gutterBottom>
                Dashboard Etudiant
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Students</Typography>
                            <Typography variant="h4">{totalStudents}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Instructors</Typography>
                            <Typography variant="h4">{totalInstructors}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Courses</Typography>
                            <Typography variant="h4">{totalCourses}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Lessons</Typography>
                            <Typography variant="h4">{totalLessons}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Enrollments</Typography>
                            <Typography variant="h4">{totalEnrollments}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Revenue</Typography>
                            <Typography variant="h4">${totalRevenue.toFixed(2)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Monthly Revenue</Typography>
                            <Bar data={monthlyRevenueData} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Recent Students</Typography>
                            <List>
                                {recentStudents.map(student => (
                                    <ListItem key={student.id}>
                                        <ListItemText primary={student.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Authenticated>
    );
};

export default Dashboard;
