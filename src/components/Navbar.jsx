import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                document.querySelector(".navbar").classList.add("shadow-xl");
            } else {
                document.querySelector(".navbar").classList.remove("shadow-xl");
            }
        });
    }, []);

    return (
        <div className=' py-2 fixed bg-fixed w-full bg-[#ffffff] z-10 navbar duration-700'>
            <nav className='flex justify-between lg:items-center  max-w-[85%] mx-auto text-lg'>

                <div className=' w-16'>
                    <img src={logo} alt='Punjabi University' />
                </div>

                <div>
                    <ul className="flex gap-8 font-semibold underline-offset-8 	 ">
                        <li className='hover:underline hover:text-darkBlue decoration-2'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='hover:underline hover:text-darkBlue decoration-2'>
                            <Link to='/Alumni'>Alumni</Link>
                        </li>
                        <li className='hover:underline hover:text-darkBlue decoration-2'>
                            <Link to='/'>Events</Link>
                        </li>
                        <li className='hover:underline hover:text-darkBlue decoration-2'>
                            <Link to='/ContactUs'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
