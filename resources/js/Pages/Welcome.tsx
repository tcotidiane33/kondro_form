import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Layouts/Navbar';
import Background from '@/Components/svg/Background';
import Hero from '@/Components/Hero';
import Partners from '@/Components/Partners';
import WhyKDN from '@/Components/WhyKDN';
import VideoSection from '@/Components/VideoSection';
import Experts from '@/Components/Experts';
import LearningAreas from '@/Components/LearningAreas';
import LearningPaths from '@/Components/LearningPaths';
import FeaturedCourses from '@/Components/FeaturedCourses';
import TopNews from '@/Components/TopNews';
import Courses from '@/Components/Courses';
import Contact from '@/Components/Contact';
import Footer from '@/Layouts/Footer';


export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <Background />
                <Navbar auth={auth} />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full px-1 max-w-2xl lg:max-w-7xl">

                        <main className='mt-4'>
                            <Hero />
                            <Partners />
                            <WhyKDN />
                            <VideoSection />
                            <Courses />
                            <Experts />
                            <LearningAreas />
                            <LearningPaths />
                            <FeaturedCourses />
                            <TopNews />
                            <Contact />
                            <Footer />
                        </main>

                        {/* <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <a
                                    href="https://laravel.com/docs"
                                    id="docs-card"
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div
                                        id="screenshot-container"
                                        className="relative flex w-full flex-1 items-stretch"
                                    >
                                        <img
                                            src="https://laravel.com/assets/img/welcome/docs-light.svg"
                                            alt="Documentation"
                                            className="absolute inset-0 h-full w-full object-cover"
                                            onError={handleImageError}
                                        />
                                    </div>
                                    <div
                                        id="docs-card-content"
                                        className="relative flex flex-col gap-6"
                                    >
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Documentation
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel has wonderful
                                            documentation covering every
                                            aspect of the framework. Whether
                                            you are a newcomer or have prior
                                            experience with Laravel, we
                                            recommend reading our
                                            documentation from beginning to
                                            end.
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://laracasts.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 4.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M8.75 14.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 14.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laracasts
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            Laracasts offers thousands of
                                            video tutorials on Laravel,
                                            PHP, and JavaScript development.
                                            Check them out, see for
                                            yourself, and massively level up
                                            your development skills in the
                                            process.
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://laravel-news.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 4.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M8.75 14.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 14.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laracasts
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            Laracasts offers thousands of
                                            video tutorials on Laravel,
                                            PHP, and JavaScript development.
                                            Check them out, see for
                                            yourself, and massively level up
                                            your development skills in the
                                            process.
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://laravel-news.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 4.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M8.75 14.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 14.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laravel News
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel News is a community
                                            driven portal and newsletter
                                            aggregating all of the latest
                                            and most important news in the
                                            Laravel ecosystem, including new
                                            package releases and tutorials.
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://laravel-news.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 4.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M8.75 14.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 14.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laravel News
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel News is a community
                                            driven portal and newsletter
                                            aggregating all of the latest
                                            and most important news in the
                                            Laravel ecosystem, including new
                                            package releases and tutorials.
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://laravel-news.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 4.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M8.75 14.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M18.5 14.5h-3.25c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25H18.5c.69 0 1.25-.56 1.25-1.25V15.75c0-.69-.56-1.25-1.25-1.25Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laravel News
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel News is a community
                                            driven portal and newsletter
                                            aggregating all of the latest
                                            and most important news in the
                                            Laravel ecosystem, including new
                                            package releases and tutorials.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </main> */}

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            KONDRONETWORKS INERTIAJS REACT LARAVEL + VITE TS v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
