import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, BookOpen, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">KondroNetworks</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/courses" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Courses
              </Link>
              <Link to="/certifications" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Certifications
              </Link>
              <Link to="/video-library" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Video Library
              </Link>
              <Link to="/hands-on-labs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Labs
              </Link>
              <Link to="/discussion-forum" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Forum
              </Link>
              <Link to="/blog" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Blog
              </Link>
              <Link to="/events" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Events
              </Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search courses..."
              />
            </div>
            
            <Link to="/dashboard" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Dashboard
            </Link>
            
            <div className="ml-3 relative">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/courses" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Courses
            </Link>
            <Link to="/certifications" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Certifications
            </Link>
            <Link to="/video-library" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Video Library
            </Link>
            <Link to="/hands-on-labs" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Labs
            </Link>
            <Link to="/discussion-forum" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Forum
            </Link>
            <Link to="/blog" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Blog
            </Link>
            <Link to="/events" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Events
            </Link>
            <Link to="/about" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              About
            </Link>
            <Link to="/contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Contact
            </Link>
            <Link to="/dashboard" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;