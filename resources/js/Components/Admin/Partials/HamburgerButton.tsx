import React from 'react';

interface HamburgerButtonProps {
    toggleSidebar: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ toggleSidebar }) => {
    return (
        <button className="md:hidden" onClick={toggleSidebar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
    );
};

export default HamburgerButton;
