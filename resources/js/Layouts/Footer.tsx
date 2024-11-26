import React from 'react';
import { Link } from '@inertiajs/react';
import { Facebook, Twitter, Instagram, Linkedin, BookOpen } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
                        <div className="flex items-center">
                            <BookOpen className="h-8 w-8 text-indigo-400" />
                            <span className="ml-2 text-xl font-bold text-white">KondroNetworks</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">
                            Empowering professionals through expert-led technology training and certification.
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/courses" className="text-base text-gray-300 hover:text-white">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/paths" className="text-base text-gray-300 hover:text-white">
                                    Learning Paths
                                </Link>
                            </li>
                            <li>
                                <Link href="/labs" className="text-base text-gray-300 hover:text-white">
                                    Labs
                                </Link>
                            </li>
                            <li>
                                <Link href="/certifications" className="text-base text-gray-300 hover:text-white">
                                    Certifications
                                </Link>
                            </li>
                            <li>
                                <Link href="/video-library" className="text-base text-gray-300 hover:text-white">
                                    Video Library
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/about" className="text-base text-gray-300 hover:text-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-base text-gray-300 hover:text-white">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-base text-gray-300 hover:text-white">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-base text-gray-300 hover:text-white">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-base text-gray-300 hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Follow Us</h3>
                        <div className="mt-4 flex space-x-6">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-gray-300">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-gray-300">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-gray-300">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-300">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
