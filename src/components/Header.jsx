// Imports
import { useState, useEffect, useRef } from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';

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
        <header className="header ">
            <div
                className={`header px-4 py-5 fixed top-0 left-0 w-full z-40 transform transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                {/* Header background and logo */}
                <div className="bg-transparent  px-4 backdrop-blur-md  h-[3.25rem] overflow-hidden  flex items-center justify-between lg:justify-around border border-[#FF00A6] rounded-3xl ">
                    <div className="logo cursor-pointer  " onClick={handleLogoClick}>
                        <img src="/images/kalrav-logo.png" alt="Logo" className="h-[6.5rem]  w-auto object-cover" />
                    </div>
                    <button className="menu-btn" onClick={toggleSidebar}>
                        <div className="flex flex-col gap-1 hamburger-menu">
                            <div className="w-6 h-[3px] bg-gradient-to-tr from-[#D9D9D9] to-[#737373]"></div>
                            <div className="w-6 h-[3px] bg-gradient-to-tr from-[#D9D9D9] to-[#737373]"></div>
                            <div className="w-6 h-[3px] bg-gradient-to-tr from-[#D9D9D9] to-[#737373]"></div>
                        </div>
                    </button>
                </div>

            </div>
            {/* Sidebar component */}
            <div
                className={`fixed top-1/2 -translate-y-1/2 h-[80vh] right-0 w-[65%] sm:w-1/2 lg:w-[30%] transform transition-all duration-300 z-[100] ${showSidebar ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
            {/* <div
                className={`fixed bottom-0  h-[81vh] right-0 w-[65%] sm:w-1/2 lg:w-[30%] transform transition-all duration-300 z-[100] ${showSidebar ? 'translate-x-0' : 'translate-x-full'
                    }`}
            > */}
                <SideBar hide={closeSidebar} />
            </div>
            {/* Overlay when sidebar is open */}
            {showSidebar && (
                <div
                    className="fixed inset-0 w-screen h-screen bg-gray-700 opacity-20 z-50"
                    onClick={closeSidebar}
                ></div>
            )}
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