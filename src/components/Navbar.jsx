import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility
    const location = useLocation(); // Get the current location
    const menuRef = useRef(null); // Reference to the mobile menu

    // Add a scroll shadow effect for the navbar
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".navbar").classList.add("shadow-xl");
            } else {
                document.querySelector(".navbar").classList.remove("shadow-xl");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Helper function to check if a tab is active
    const isActive = (path) => location.pathname === path;

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='py-2 fixed bg-fixed w-full bg-[#ffffff] z-50 navbar duration-700'>
            <nav className='flex justify-between items-center max-w-[85%] mx-auto text-lg'>
                <div className='w-16'>
                    <img src='/images/logo.png' alt='Punjabi University' />
                </div>
                <div className='absolute top-7 right-5 flex items-center md:hidden'>
                    <button onClick={toggleMenu} className='text-2xl'>
                        <GiHamburgerMenu />
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        ref={menuRef}
                        className="absolute top-full left-0 w-full bg-[#000] bg-opacity-75 shadow-md z-40 flex flex-col md:hidden"
                    >
                        <ul className="flex flex-col gap-4 text-[#fff] font-medium items-center py-4">
                            <li className={`hover:underline hover:text-lightBlue decoration-2 ${isActive('/') ? 'underline text-lightBlue' : ''}`}>
                                <Link to='/' onClick={toggleMenu}>Home</Link>
                            </li>
                            <li className={`hover:underline hover:text-lightBlue decoration-2 ${isActive('/Alumni') ? 'underline text-lightBlue' : ''}`}>
                                <Link to='/Alumni' onClick={toggleMenu}>Alumni</Link>
                            </li>
                            <li className={`hover:underline hover:text-lightBlue decoration-2 ${isActive('/Events') ? 'underline text-lightBlue' : ''}`}>
                                <Link to='/Events' onClick={toggleMenu}>Events</Link>
                            </li>
                            <li className={`hover:underline hover:text-lightBlue decoration-2 ${isActive('/ReachUs') ? 'underline text-lightBlue' : ''}`}>
                                <Link to='/ReachUs' onClick={toggleMenu}>Reach Us</Link>
                            </li>
                            <li>
                                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSf5mj2-fGe6UcxUhdUt2iRK26F8WD1Gk9Br0PdvJofuQkeA9w/viewform' target='blank'>
                                    <button className='bg-darkBlue hover:bg-[#222363] text-[#fff] op font-semibold rounded-lg py-2 px-3'>Register Now!</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
                {/* Desktop Menu */}
                <div>
                    <ul className="hidden md:flex gap-8 font-medium items-center underline-offset-8">
                        <li className={`hover:underline hover:text-darkBlue decoration-2 ${isActive('/') ? 'underline text-darkBlue' : ''}`}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className={`hover:underline hover:text-darkBlue decoration-2 ${isActive('/Alumni') ? 'underline text-darkBlue' : ''}`}>
                            <Link to='/Alumni'>Alumni</Link>
                        </li>
                        <li className={`hover:underline hover:text-darkBlue decoration-2 ${isActive('/Events') ? 'underline text-darkBlue' : ''}`}>
                            <Link to='/Events'>Events</Link>
                        </li>
                        <li className={`hover:underline hover:text-darkBlue decoration-2 ${isActive('/ReachUs') ? 'underline text-darkBlue' : ''}`}>
                            <Link to='/ReachUs'>Reach Us</Link>
                        </li>
                        <li>
                            <Link to='https://docs.google.com/forms/d/e/1FAIpQLSf5mj2-fGe6UcxUhdUt2iRK26F8WD1Gk9Br0PdvJofuQkeA9w/viewform' target='blank'>
                                <button className='bg-darkBlue hover:bg-[#222363] text-[#fff] font-semibold rounded-lg py-2 px-3'>Register Now!</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
