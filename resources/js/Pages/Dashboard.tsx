import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FaUserShield } from 'react-icons/fa';
import { Laptop, Book, Clock, Award } from 'lucide-react';
import EnrolledCourses from '../Components/dashboard/EnrolledCourses';
import ProgressChart from '../Components/dashboard/ProgressChart';
import UpcomingLessons from '../Components/dashboard/UpcomingLessons';


export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <nav className="px-6 justify-center bg-gradient-to-r from-white/50 to-green-500/50 dark:bg-white pb-1 text-black/80">
                {/* Link to Roles and Permissions Management */}
                <div className="mt-8 flex items-center space-x-4">
                    <FaUserShield className="text-2xl text-[#FF2D20]" />
                    <Link
                        href={route('roles.index')}
                        className="rounded-md px-4 py-2 text-lg font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                    >
                        Manage Roles and Permissions
                    </Link>
                </div>
            </nav>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-indigo-100 rounded-lg">
                                <Book className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Enrolled Courses</p>
                                <p className="text-2xl font-semibold text-gray-900">12</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <Clock className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Hours Learned</p>
                                <p className="text-2xl font-semibold text-gray-900">156</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-yellow-100 rounded-lg">
                                <Laptop className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Active Labs</p>
                                <p className="text-2xl font-semibold text-gray-900">3</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Award className="h-6 w-6 text-purple-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">Certifications</p>
                                <p className="text-2xl font-semibold text-gray-900">2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <EnrolledCourses />
                    </div>
                    <div>
                        <UpcomingLessons />
                    </div>
                </div>

                <div className="mt-8">
                    <ProgressChart />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


// const Dashboard = () => {
//   return (

//   );
// };

// export default Dashboard;
