import React from 'react';
import { Link } from '@inertiajs/react';
import { Facebook, Twitter, Instagram, Linkedin, BookOpen } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">

            <div className="mandala-container container w-full h-full absolute top-0 left-0 z-0">
                <svg width="575" height="575" viewBox="0 0 675 675" fill="none" xmlns="http://www.w3.org/2000/svg" className="mandala">
                    <defs>
                        <path d="M337.5,337.5 m-320,0 a320,320 0 1,1 640,0 a320,320 0 1,1 -640,0" id="circle1"></path>
                        <path d="M337.5,337.5 m-280,0 a280,280 0 1,1 560,0 a280,280 0 1,1 -560,0" id="circle2"></path>
                        <path d="M337.5,337.5 m-240,0 a240,240 0 1,1 480,0 a240,240 0 1,1 -480,0" id="circle3"></path>
                        <path d="M337.5,337.5 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0" id="circle4"></path>
                        <path d="M337.5,337.5 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0" id="circle5"></path>
                    </defs>
                    <text className="mandala-ring mandala-accent-1" dy="70" textLength="2010">
                        <textPath textLength="2010" href="#circle1">&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>&nbsp;&nbsp;&nbsp;/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan>/<tspan>/</tspan></textPath>
                    </text>
                    <text className="mandala-ring mandala-accent-2" dy="70" textLength="1760">
                        <textPath textLength="1760" href="#circle2">&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan>&nbsp;&nbsp;+<tspan>+</tspan>+<tspan>+</tspan>+<tspan>+</tspan></textPath>
                    </text>
                    <text className="mandala-ring mandala-accent-3" dy="70" textLength="1507">
                        <textPath textLength="1507" href="#circle3">
                            <tspan>{'{'}</tspan>{'{'}
                            <tspan>{'{'}</tspan>{'{'}
                            &nbsp;
                            <tspan>{'}'}</tspan>{'}'}
                            <tspan>{'}'}</tspan>{'}'}
                            &nbsp;&nbsp;
                            <tspan>{'{'}</tspan>{'{'}
                            <tspan>{'{'}</tspan>{'{'}
                            &nbsp;
                            <tspan>{'}'}</tspan>{'}'}
                            <tspan>{'}'}</tspan>{'}'}
                            &nbsp;&nbsp;
                            <tspan>{'{'}</tspan>{'{'}
                            <tspan>{'{'}</tspan>{'{'}
                            &nbsp;
                            <tspan>{'}'}</tspan>{'}'}
                            <tspan>{'}'}</tspan>{'}'}
                            &nbsp;&nbsp;
                            <tspan>{'{'}</tspan>{'{'}
                            <tspan>{'{'}</tspan>{'{'}
                            &nbsp;
                            <tspan>{'}'}</tspan>{'}'}
                            <tspan>{'}'}</tspan>{'}'}
                            &nbsp;&nbsp;
                            <tspan>{'{'}</tspan>{'{'}
                            <tspan>{'{'}</tspan>{'{'}
                            &nbsp;
                            <tspan>{'}'}</tspan>{'}'}
                            <tspan>{'}'}</tspan>{'}'}
                            &nbsp;&nbsp;
                            <tspan>{'{'}</tspan>{'{'}
                            <tspan>{'{'}</tspan>{'{'}
                            &nbsp;
                            <tspan>{'}'}</tspan>{'}'}
                            <tspan>{'}'}</tspan>{'}'}
                            &nbsp;&nbsp;
                        </textPath>                        </text>
                    <text className="mandala-ring mandala-accent-4" dy="70" textLength="1257">
                        <textPath textLength="1257" href="#circle4">&nbsp;&nbsp;&nbsp;<tspan>../../</tspan> &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;<tspan>../../</tspan> &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;<tspan>../../</tspan> &nbsp;&nbsp;&nbsp;../../ &nbsp;&nbsp;&nbsp;<tspan>../../</tspan> &nbsp;&nbsp;&nbsp;../../ </textPath>
                    </text>
                    <text className="mandala-ring mandala-accent-5" dy="70" textLength="1005">
                        <textPath textLength="1005" href="#circle5"><tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;<tspan>&lt;&gt;</tspan>&lt;/&gt;</textPath>
                    </text>
                </svg>
            </div>
       
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
                    <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
