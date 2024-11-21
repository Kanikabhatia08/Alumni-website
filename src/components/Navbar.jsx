import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation(); // Get the current location

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                document.querySelector(".navbar").classList.add("shadow-xl");
            } else {
                document.querySelector(".navbar").classList.remove("shadow-xl");
            }
        });
    }, []);

    // Helper function to check if a tab is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className='py-2 fixed bg-fixed w-full bg-[#ffffff] z-50 navbar duration-700'>
            <nav className='flex justify-between items-center max-w-[85%] mx-auto text-lg'>
                <div className='w-16'>
                    <img src='/images/logo.png' alt='Punjabi University' />
                </div>
                <div>
                    <ul className="flex gap-8 font-semibold underline-offset-8">
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
                    </ul>
                </div>
            </nav>
        </div>
    );
};
