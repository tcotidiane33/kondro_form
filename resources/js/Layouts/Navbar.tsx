import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import LogoMini from '@/Components/svg/LogoMini';
import { BookOpen, Search, Menu, X } from 'lucide-react';
import { route } from 'ziggy-js';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const auth = usePage().props.auth;

    const user = auth.user;
    const isAuthenticated = !!user;

    // const getDashboardRoute = () => {
    //     if (!user) {
    //         return route('home'); // Rediriger vers la page d'accueil si l'utilisateur est nul
    //     }
    //     if (user.role === 'Admin') {
    //         return route('admin.dashboard');
    //     } else if (user.role === 'Instructor') {
    //         return route('instructor.dashboard');
    //     } else {
    //         return route('student.dashboard');
    //     }
    // };

    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <header className="navbar-header">
            {/* <header className="bg-gradient-to-r from-white/50 to-gray-500/50  pb-1 text-black/80" style={{ zIndex: 9999 }}> */}
            <div className="relative w-full px-4 max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center">
                        <Link href="/">
                            <LogoMini className="h-18 w-48" />
                        </Link>
                    </div>
                    <nav className="flex items-center space-x-4">
                        <div className="hidden lg:flex space-x-4">
                            <Link href="courses/all" className="text-sm font-medium text-gray-900 hover:text-gray-900">
                                Courses
                            </Link>
                            <Link href="/certifications" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                Certifications
                            </Link>
                            {/* <Link href="/video-library" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                Catalogues
                            </Link> */}
                            <Link href="/labs" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                Labs
                            </Link>
                            <Link href="/discussion-forum" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                Forum
                            </Link>
                            <Link href="/blog" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                Blog
                            </Link>
                            <Link href="/events" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                Events
                            </Link>
                            <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                About
                            </Link>
                            {/* <Link href="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                Contact
                            </Link> */}
                            {/* <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="text-sm font-medium text-gray-500 hover:text-gray-900 pt-0 mt-0"
                            >
                                More
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 transition duration-300 ease-in-out transform origin-top-right scale-95">
                                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Services
                                    </Link>
                                    <Link href="/portfolio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Portfolio
                                    </Link>
                                    <Link href="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Careers
                                    </Link>
                                </div>
                            )}
                        </div> */}

                        </div>

                        {/* Lien vers le Dashboard */}
                        {/* <Link href={getDashboardRoute()} className="flex items-center space-x-2 text-lg font-bold text-black hover:text-gray-700">
                            <BookOpen className="h-6 w-6 text-indigo-600" />
                            <span>Dashboard</span>
                        </Link> */}
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-sm pl-10 pr-1 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Search courses..."
                            />
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>

                        <Link
                            href={route('business.index')}
                            className="rounded-md px-1 py-2 text-lg font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Business
                        </Link>
                        <Link
                            href={route('individual.index')}
                            className="rounded-md px-1 py-2 text-lg font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Individual
                        </Link>
                        {isAuthenticated && (
                            <div className="grig items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <button
                                    type="button"
                                    className="grid text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={user.image}
                                        alt="user photo"
                                    />
                                </button>
                                {/* Dropdown menu */}
                                {dropdownOpen && (
                                    // absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 transition duration-300 ease-in-out transform origin-top-right ${dropdownOpen ? 'scale-100' : 'scale-95'}
                                        <div
                                            className={`absolute right-0 mt-2 z-20  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 transition duration-300 ease-in-out transform origin-top-right ${dropdownOpen ? 'scale-100' : 'scale-95'}`}
                                            id="user-dropdown"
                                        >
                                            <div className="px-4 py-3">
                                                <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
                                                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                                            </div>
                                            <ul className="py-2" aria-labelledby="user-menu-button">
                                                <li>
                                                    <Link
                                                        href={route('dashboard')}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Dashboard
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={route('dashboard')}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Settings
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={route('dashboard')}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Earnings
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={route('logout')}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Sign out
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                )}
                                <button
                                    data-collapse-toggle="navbar-user"
                                    type="button"
                                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="navbar-user"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 17 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 1h15M1 7h15M1 13h15"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </nav>
                </div>

                {/* Menu mobile */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <Link href="/courses" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Courses
                            </Link>
                            <Link href="/certifications" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Certifications
                            </Link>
                            <Link href="/video-library" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Catalogues
                            </Link>
                            <Link href="/hands-on-labs" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Labs
                            </Link>
                            <Link href="/discussion-forum" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Forum
                            </Link>
                            <Link href="/blog" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Blog
                            </Link>
                            <Link href="/events" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Events
                            </Link>
                            <Link href="/about" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                About
                            </Link>
                            <Link href="/contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
                                Contact
                            </Link>

                            {/* Lien vers le Dashboard */}
                            {/* <Link href={getDashboardRoute()} className="flex items-center space-x-2 text-lg font-bold text-black hover:text-gray-700">
                            <BookOpen className="h-6 w-6 text-indigo-600" />
                                <span>Dashboard</span>
                            </Link> */}
                            <Link
                                href={route('business.index')}
                                className="rounded-md px-1 py-2 text-lg font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Business
                            </Link>
                            <Link
                                href={route('individual.index')}
                                className="rounded-md px-1 py-2 text-lg font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Individual
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
