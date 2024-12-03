import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { FaUsers, FaBook, FaChalkboardTeacher, FaFileAlt } from 'react-icons/fa';
import UsersSection from '../../../Components/Admin/UsersSection';
import CoursesSection from '../../../Components/Admin/CoursesSection';
import LessonsSection from '../../../Components/Admin/LessonsSection';
import MaterialsSection from '../../../Components/Admin/MaterialsSection';
import Sidebar from '../../../Components/Admin/Partials/Sidebar';
import HamburgerButton from '../../../Components/Admin/Partials/HamburgerButton';
import ErrorPage from '../../../Components/Admin/ErrorPage';

interface User {
    id: number;
    name: string;
    email: string;
    role: {
        name: string;
    };
}

interface Course {
    id: number;
    title: string;
}

interface Lesson {
    id: number;
    title: string;
}

interface Material {
    id: number;
    title: string;
}

interface DashboardProps {
    users: User[];
    courses: Course[];
    lessons: Lesson[];
    materials: Material[];
    errorStatus?: number;
}


const Dashboard: React.FC<DashboardProps> = ({ users, courses, lessons, materials, errorStatus }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('dashboard');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'users':
                return <UsersSection users={users} />;
            case 'courses':
                return <CoursesSection courses={courses} />;
            case 'lessons':
                return <LessonsSection lessons={lessons} />;
            case 'materials':
                return <MaterialsSection materials={materials} />;
            default:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <UsersSection users={users} />
                        <CoursesSection courses={courses} />
                        <LessonsSection lessons={lessons} />
                        <MaterialsSection materials={materials} />
                    </div>
                );
        }
    };

    if (errorStatus) {
        return <ErrorPage status={errorStatus} />;
    }

    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} setActiveSection={setActiveSection} />
            <main className="flex-1 p-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold">Tableau de bord de l'administrateur</h1>
                    <HamburgerButton toggleSidebar={toggleSidebar} />
                </div>
                {renderSection()}
            </main>
        </div>
    );
};

export default Dashboard;
