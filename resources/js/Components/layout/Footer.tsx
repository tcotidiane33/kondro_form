import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">KondroNetworks</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              Empowering professionals through expert-led technology training and certification.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/courses" className="text-base text-gray-300 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/paths" className="text-base text-gray-300 hover:text-white">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/labs" className="text-base text-gray-300 hover:text-white">
                  Labs
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-base text-gray-300 hover:text-white">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/video-library" className="text-base text-gray-300 hover:text-white">
                  Video Library
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-base text-gray-300 hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-base text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-base text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
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
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 KondroNetworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;