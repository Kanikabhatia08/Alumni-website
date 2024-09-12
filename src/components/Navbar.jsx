import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex justify-between lg:items-center max-w-[90%] mx-auto text-lg pt-2'>
        <div className=' w-12'>
            <img src={logo} alt='Punjabi University' />
        </div>

        <div>
            <ul className="flex gap-8 font-semibold underline-offset-8 	 ">
                <li className='hover:underline hover:text-blue decoration-2'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:underline hover:text-blue decoration-2'>
                    <Link to='/'>Alumni</Link>
                </li>
                <li className='hover:underline hover:text-blue decoration-2'>
                    <Link to='/'>Contact Us</Link>
                </li>
            </ul>
        </div>

    </div>
  )
}
