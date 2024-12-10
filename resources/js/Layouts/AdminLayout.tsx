import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { FaUserShield } from 'react-icons/fa';
import { Book, Monitor, Clock, Award } from 'react-feather';

export default function AdminLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const { auth } = usePage().props;
    const user = auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const getProfileEditRoute = () => route('admin.profile.edit');

    return (
        <div className="min-h-screen bg-indigo-800">
            <nav className="border-b border-green-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                                    Dashboard
                                </NavLink>
                                <NavLink href={route('roles.index')} active={route().current('roles.index')}>
                                    <FaUserShield className="inline-block text-2xl text-[#FF2D20]" />
                                    Roles and Permissions
                                </NavLink>
                                <NavLink href={route('courses.index')} active={route().current('courses.index')}>
                                    <Book className="inline-block text-2xl text-[#FF2D20]" />
                                    Courses
                                </NavLink>
                                <NavLink href={route('course-categories.index')} active={route().current('course-categories.index')}>
                                    <Book className="inline-block text-2xl text-[#FF2D20]" />
                                    Category Courses
                                </NavLink>
                                <NavLink href="#send-notification" active={route().current('send-notification')}>
                                    <Monitor className="inline-block text-2xl text-[#FF2D20]" />
                                    Send Notification
                                </NavLink>
                                <NavLink href="#send-quiz-result" active={route().current('send-quiz-result')}>
                                    <Clock className="inline-block text-2xl text-[#FF2D20]" />
                                    Send Quiz Result
                                </NavLink>
                                <NavLink href="#request-certificate" active={route().current('request-certificate')}>
                                    <Award className="inline-block text-2xl text-[#FF2D20]" />
                                    Request Certificate
                                </NavLink>
                                <NavLink href="#send-data-update" active={route().current('send-data-update')}>
                                    <Monitor className="inline-block text-2xl text-[#FF2D20]" />
                                    Send Data Update
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                                title="User Menu"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={getProfileEditRoute()}>
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                type="button"
                                title="Toggle Navigation"
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('roles.index')} active={route().current('roles.index')}>
                            <FaUserShield className="inline-block text-2xl text-[#FF2D20]" />
                            Roles and Permissions
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('courses.index')} active={route().current('courses.index')}>
                            <Book className="inline-block text-2xl text-[#FF2D20]" />
                            Courses
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('course-categories.index')} active={route().current('course-categories.index')}>
                            <Book className="inline-block text-2xl text-[#FF2D20]" />
                            Category Courses
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="#send-notification" active={route().current('send-notification')}>
                            <Monitor className="inline-block text-2xl text-[#FF2D20]" />
                            Send Notification
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="#send-quiz-result" active={route().current('send-quiz-result')}>
                            <Clock className="inline-block text-2xl text-[#FF2D20]" />
                            Send Quiz Result
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="#request-certificate" active={route().current('request-certificate')}>
                            <Award className="inline-block text-2xl text-[#FF2D20]" />
                            Request Certificate
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="#send-data-update" active={route().current('send-data-update')}>
                            <Monitor className="inline-block text-2xl text-[#FF2D20]" />
                            Send Data Update
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">{user.name}</div>
                            <div className="text-sm font-medium text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={getProfileEditRoute()}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
