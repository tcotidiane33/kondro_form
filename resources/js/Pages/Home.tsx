import { ArrowRight, BookOpen, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import Hero from '../Components/Hero';
import Partners from '../Components/Partners';
import WhyKDN from '../Components/WhyKDN';
import VideoSection from '../Components/VideoSection';
import Experts from '../Components/Experts';
import LearningAreas from '../Components/LearningAreas';
import LearningPaths from '../Components/LearningPaths';
import FeaturedCourses from '../Components/FeaturedCourses';
import Training from '../Components/Training';
import KDNLive from '../Components/KDNLive';
import Contact from '../Components/Contact';
import TopNews from '../Components/TopNews';
import Courses from '../Components/Courses';
import Certifications from '../Components/Certifications';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Master New Skills</span>
              <span className="block text-indigo-200">Advance Your Career</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Access world-class training in technology and professional development. Learn from industry experts and get certified.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/courses" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Expert-led courses</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Learn from industry professionals with real-world experience.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Award className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Professional Certifications</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Earn recognized certifications to boost your career.
                </p>
                <Link to="/certifications" className="ml-16 text-base font-medium text-indigo-600 hover:text-indigo-500">
                  View Certifications
                </Link>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Community Support</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Connect with peers and get help when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Components */}
      <div className="bg-white">
        <Hero />
        <Partners />
        <WhyKDN />
        <VideoSection />
        <Experts />
        <LearningAreas />
        <LearningPaths />
        <FeaturedCourses />
        <TopNews />
      <Courses />
      <Certifications />
        <Training />
        <KDNLive />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
