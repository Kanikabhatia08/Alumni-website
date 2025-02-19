import React from 'react'
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';


export const Footer = () => {
    return (
        <footer className="bg-darkBlue text-[#fff]  mt-12">
            <div className="mx-auto max-w-[95%] md:max-w-[85%] py-5 pt-10">
                <div className="lg:flex justify-between items-center">
                    <div className="flex flex-col gap-4">
                        <a href="">
                            <img src='/images/logo.png' className="" alt="Logo" />
                        </a>
                        <p className='w-full lg:w-[85%] sm:mt-0 3xl:text-xl text-justify'>"Founded in 1962, Punjabi University, Patiala, is a leading institution promoting Punjabi language, culture, and education. It offers a wide range of academic programs and is committed to excellence in research and student development."</p>
                    </div>
                    <div className="sm:flex gap-20 w-full justify-start mt-10 lg:mt-0 lg:justify-end font-mons">
                        <div>
                            <h2 className="mb-6 text-lg 3xl:text-2xl font-semibold uppercase ">Explore</h2>
                            <ul className=" font-medium 3xl:text-xl flex flex-col gap-2 md:gap-4">
                                <li>
                                    <NavLink to="#" className="hover:border-b-2">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Alumni" className="hover:border-b-2">Alumni</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Events" className="hover:border-b-2">Events</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ReachUs" className="hover:border-b-2">Reach Us</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg 3xl:text-2xl mt-10 sm:mt-0 font-semibold uppercase">Contact us</h2>
                            <ul className="font-medium flex flex-col gap-2 md:gap-4 3xl:text-xl  ">
                                <li className="flex items-center gap-2">
                                    <FiMail />
                                    <span>csepupalumni@gmail.com</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <FaPhoneAlt />
                                    <span>+91-175-3046313</span>
                                </li>
                                <li>
                                    <Link to="https://punjabiuniversity.ac.in/pages/DepartmentPunjabi.aspx?dsenc=19" target='blank' className='flex items-center gap-2'>
                                        <FaLink />
                                        <span>Punjabi University, Patiala</span>
                                    </Link>
                                </li>
                                <div className="flex mt-1">
                                    <a href="https://www.linkedin.com/school/punjabi-university-patiala/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target='blank'>
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://www.instagram.com/pbiunipatiala/profilecard/?igsh=emYyY3FueW1lbmxy" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-2 md:ms-5" target='blank'>
                                        <FaInstagram />
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className=" border-gray-200 sm:mx-auto my-8" />
                <div className="flex justify-center">
                    <span className="text-xs 3xl:text-base  ">©2023 <a href="#" className="hover:underline">Punjabi University</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}
