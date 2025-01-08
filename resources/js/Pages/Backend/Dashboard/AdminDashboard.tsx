import React from 'react';
import { PageProps } from '@inertiajs/inertia';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText, Button, IconButton, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useState } from 'react';


interface AdminDashboardProps {
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
    superAdminOptions?: boolean;
}

const AdminDashboard: React.FC<AdminDashboardProps> = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

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
        superAdminOptions,
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
        <AdminLayout>
            <Typography variant="h4" gutterBottom>
                <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Admin Dashboard</span>
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
                {superAdminOptions && (
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Super Admin Options</Typography>
                                {/* Ajoutez ici les options spécifiques pour les super administrateurs */}
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>

            {/* Drawer Button */}
            <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 m-4 animate-bounce">
                <Button
                    variant="contained"
                    color="error"
                    onClick={toggleDrawer(true)}
                    startIcon={<i className="fas fa-cogs"></i>}
                >
                    Admin Tools
                </Button>
            </div>

            {/* Drawer Component */}
            <Drawer
                anchor="bottom"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <div
                    className="fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0"
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <div className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                        <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
                        <h5 className="inline-flex items-center text-base text-gray-500 dark:text-gray-400 font-medium">
                            <IconButton onClick={toggleDrawer(false)}>
                                <CloseIcon />
                            </IconButton>
                            Add widget
                        </h5>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
                        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                                <svg className="inline w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                            </div>
                            <div className="font-medium text-center text-gray-500 dark:text-gray-400">Chart</div>
                        </div>
                        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                                <svg className="inline w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM9 6v2H2V6h7Zm2 0h7v2h-7V6Zm-9 4h7v2H2v-2Zm9 2v-2h7v2h-7Z" />
                                </svg>
                            </div>
                            <div className="font-medium text-center text-gray-500 dark:text-gray-400">Table</div>
                        </div>
                        <div className="hidden p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 lg:block">
                            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                                <svg className="inline w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                                    <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                                </svg>
                            </div>
                            <div className="hidden font-medium text-center text-gray-500 dark:text-gray-400">Ticket</div>
                        </div>
                        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                                <svg className="inline w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                            </div>
                            <div className="font-medium text-center text-gray-500 dark:text-gray-400">List</div>
                        </div>
                        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                                <svg className="inline w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                            </div>
                            <div className="font-medium text-center text-gray-500 dark:text-gray-400">Price</div>
                        </div>
                        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                                <svg className="inline w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                            </div>
                            <div className="font-medium text-center text-gray-500 dark:text-gray-400">Users</div>
                        </div>
                        <div className="hidden p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 lg:block">
                            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                                <svg className="inline w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.391 7.361.707-3.535a3 3 0 0 1 .82-1.533L7.929 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h4.259a2.975 2.975 0 0 1-.15-1.639ZM8.05 17.95a1 1 0 0 1-.981-1.2l.708-3.536a1 1 0 0 1 .274-.511l6.363-6.364a3.007 3.007 0 0 1 4.243 0 3.007 3.007 0 0 1 0 4.243l-6.365 6.363a1 1 0 0 1-.511.274l-3.536.708a1.07 1.07 0 0 1-.195.023Z" />
                                </svg>
                            </div>
                            <div className="font-medium text-center text-gray-500 dark:text-gray-400">Task</div>
                        </div>
                        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <div className="flex justify-center items-center p-2 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
                                <svg className="inline w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm1 15H9v-2h2Zm0-4H9V5h2Z" />
                                </svg>
                            </div>
                            <div className="font-medium text-center text-gray-500 dark:text-gray-400">Alert</div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </AdminLayout>
    );
};

export default AdminDashboard;

