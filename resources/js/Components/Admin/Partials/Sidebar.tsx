import React from 'react';
import { Link } from '@inertiajs/react';
import { FaUsers, FaBook, FaChalkboardTeacher, FaFileAlt } from 'react-icons/fa';

interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar, setActiveSection }) => {
    return (
        <aside className={`w-64 bg-gray-800 text-white p-4 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                <button className="md:hidden" onClick={toggleSidebar}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <button onClick={() => setActiveSection('dashboard')} className="flex items-center text-blue-400 hover:underline">
                            <FaUsers className="mr-2" /> Dashboard
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setActiveSection('users')} className="flex items-center text-blue-400 hover:underline">
                            <FaUsers className="mr-2" /> Gestion des utilisateurs
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setActiveSection('courses')} className="flex items-center text-blue-400 hover:underline">
                            <FaBook className="mr-2" /> Gestion des cours
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setActiveSection('lessons')} className="flex items-center text-blue-400 hover:underline">
                            <FaChalkboardTeacher className="mr-2" /> Gestion des leçons
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setActiveSection('materials')} className="flex items-center text-blue-400 hover:underline">
                            <FaFileAlt className="mr-2" /> Gestion des matériaux
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
