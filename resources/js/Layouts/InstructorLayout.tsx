import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { Book, Clock, Award, Layers, FileText, Archive, CheckSquare, Calendar, Tag } from 'react-feather';

export default function InstructorLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const { auth } = usePage().props;
    const user = auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const getProfileEditRoute = () => route('instructor.profile.edit');

    return (
        <div className="min-h-screen bg-purple-100 p-6">
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route('instructor.dashboard')} active={route().current('instructor.dashboard')}>
                                    Dashboard
                                </NavLink>
                                <NavLink href={route('courses.index')} active={route().current('courses.index')}>
                                    <Book className="inline-block text-2xl text-[#FF2D20]" />
                                    Courses
                                </NavLink>
                                <NavLink href={route('lessons.index')} active={route().current('lessons.index')}>
                                    <Layers className="inline-block text-2xl text-[#FF2D20]" />
                                    Lessons
                                </NavLink>
                                <NavLink href={route('chapters.index')} active={route().current('chapters.index')}>
                                    <FileText className="inline-block text-2xl text-[#FF2D20]" />
                                    Chapters
                                </NavLink>
                                <NavLink href={route('materials.view')} active={route().current('materials.view')}>
                                    <Archive className="inline-block text-2xl text-[#FF2D20]" />
                                    Materials
                                </NavLink>
                                <NavLink href={route('quizzes.index')} active={route().current('materials.view')}>
                                    <Archive className="inline-block text-2xl text-[#FF2D20]" />
                                    Quizzes
                                </NavLink>
                                {/* <NavLink href={route('answers.index')} active={route().current('materials.view')}>
                                    <Archive className="inline-block text-2xl text-[#FF2D20]" />
                                    Answers
                                </NavLink>
                                <NavLink href={route('events.index')} active={route().current('materials.view')}>
                                    <Archive className="inline-block text-2xl text-[#FF2D20]" />
                                    Events
                                </NavLink>
                                <NavLink href={route('coupons.index')} active={route().current('materials.view')}>
                                    <Tag className="inline-block text-2xl text-[#FF2D20]" />
                                    Coupons
                                </NavLink> */}
                                <NavLink href="#send-quiz-result" active={route().current('send-quiz-result')}>
                                    <Clock className="inline-block text-2xl text-[#FF2D20]" />
                                    Send Quiz Result
                                </NavLink>
                                <NavLink href="#request-certificate" active={route().current('request-certificate')}>
                                    <Award className="inline-block text-2xl text-[#FF2D20]" />
                                    Request Certificate
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
                        <ResponsiveNavLink href={route('instructor.dashboard')} active={route().current('instructor.dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('courses.index')} active={route().current('courses.index')}>
                            <Book className="inline-block text-2xl text-[#FF2D20]" />
                            Courses
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('lessons.index')} active={route().current('course-categories.index')}>
                            <Layers className="inline-block text-2xl text-[#FF2D20]" />
                            Lessons
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('chapters.index')} active={route().current('course-categories.index')}>
                            <FileText className="inline-block text-2xl text-[#FF2D20]" />
                            Chapters
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('materials.view')} active={route().current('course-categories.index')}>
                            <Archive className="inline-block text-2xl text-[#FF2D20]" />
                            Materials
                        </ResponsiveNavLink>
                        {/* <ResponsiveNavLink href={route('quizzes.index')} active={route().current('quizzes.index')}>
                            <FileText className="inline-block text-2xl text-[#FF2D20]" />
                            Quizzes
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('answers.index')} active={route().current('answers.index')}>
                            <CheckSquare className="inline-block text-2xl text-[#FF2D20]" />
                            Answers
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('events.index')} active={route().current('events.index')}>
                            <Calendar className="inline-block text-2xl text-[#FF2D20]" />
                            Events
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('coupons.index')} active={route().current('coupons.index')}>
                            <Tag className="inline-block text-2xl text-[#FF2D20]" />
                            Coupons
                        </ResponsiveNavLink> */}

                        <ResponsiveNavLink href="#send-quiz-result" active={route().current('send-quiz-result')}>
                            <Clock className="inline-block text-2xl text-[#FF2D20]" />
                            Send Quiz Result
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="#request-certificate" active={route().current('request-certificate')}>
                            <Award className="inline-block text-2xl text-[#FF2D20]" />
                            Request Certificate
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
