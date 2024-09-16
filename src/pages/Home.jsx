import React from 'react'
import logo from '../images/logo.png'
import banner from '../images/banner.png'


export const Home = () => {
    return (
        <div className='  w-full bg-no-repeat h-full mt-20' >
            <div className='relative w-full h-full'>
                <img src={banner} alt='students' className='w-full h-auto' />
                <div className='absolute inset-0 flex flex-col justify-start pt-9 items-center text-center bg-opacity-50 bg-white'>
                    <h1 className='text-8xl leading-none font-extrabold font-mons uppercase text-[#0091CD]'>
                        Celebrating <br />Excellence
                    </h1>
                    <h3 className='text-3xl italic font-bold text-[#000] mt-4'>
                        "Honoring Our Distinguished Alumni"
                    </h3>
                </div>
            </div>
            <div className='max-w-[85%] flex flex-col items-start mx-auto my-20'>
                <h3 className='text-5xl  font-bold text-[#000] my-4'>
                    Our Story
                </h3>
                <div className='flex gap-20 max-w-[90%] mx-auto mt-20'>
                    <img src={logo} alt='Punjabi University' className='w-full'/>
                    <p className='items-centerflex my-auto'>Punjabi University, Patiala, founded under Punjab Act No. 35 of 1961 and inaugurated by Dr. S. Radhakrishnan on June 24, 1962, stands as a beacon of educational excellence. Established with the aim of promoting the Punjabi language, art, and literature, the University has grown into the largest in the state. As we celebrate our rich history and remarkable achievements, we take pride in honoring our distinguished alumni who have made significant contributions to society. Our campus now supports a vibrant community of over 14,000 students across various disciplines, from Humanities and Arts to Sciences and Engineering. This website is dedicated to recognizing and celebrating the accomplishments of our alumni, who continue to inspire and lead in diverse fields around the world.</p>
                </div>
            </div>

        </div>
    )
}
