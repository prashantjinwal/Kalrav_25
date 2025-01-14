// Imports
import { useState, useEffect, useRef } from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    // State management
    const [showSidebar, setShowSidebar] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const lastScrollY = useRef(0);
    const navigate = useNavigate();

    // Handle scroll behavior for navbar visibility
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            setIsNavbarVisible(false);
        } else {
            // Scrolling up
            setIsNavbarVisible(true);
        }
        lastScrollY.current = currentScrollY;
    };

    useEffect(() => {
        const debouncedHandleScroll = debounce(handleScroll, 100); // Debounce for performance
        window.addEventListener('scroll', debouncedHandleScroll);
        return () => window.removeEventListener('scroll', debouncedHandleScroll);
    }, []); // Empty dependency array ensures listener is only attached once

    // Control body scroll when sidebar is open
    useEffect(() => {
        document.body.style.overflow = showSidebar ? 'hidden' : 'unset';
    }, [showSidebar]);

    // Event handlers
    const toggleSidebar = () => setShowSidebar(!showSidebar);
    const closeSidebar = () => setShowSidebar(false);
    const handleLogoClick = () => navigate('/');

    return (
        <header className="header p-4">
            <div
                className={`header p-4 fixed top-0 left-0 w-full z-40 transform transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                {/* Header background and logo */}
                <div className="bg-[url('/images/header/headerBg.png')] bg-cover bg-no-repeat flex items-center justify-between lg:justify-around">
                    <div className="logo cursor-pointer" onClick={handleLogoClick}>
                        <img src="/images/header/logo.png" alt="Logo" className="h-10 w-auto" />
                    </div>

                    <button className="menu-btn" onClick={toggleSidebar}>
                        <img src="/images/header/hamburger.png" alt="Menu" className="hamburger w-auto h-9" />
                    </button>
                </div>

                {/* Sidebar component */}
                <div
                    className={`fixed top-0 right-0 w-[75%] sm:w-1/2 lg:w-[30%] transform transition-all duration-300 z-[100] ${showSidebar ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <SideBar hide={closeSidebar} />
                </div>

                {/* Overlay when sidebar is open */}
                {showSidebar && (
                    <div
                        className="fixed inset-0 w-screen h-screen bg-gray-700 opacity-20 z-50"
                        onClick={closeSidebar}
                    ></div>
                )}
            </div>
        </header>
    );
}


// Debounce utility
function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}