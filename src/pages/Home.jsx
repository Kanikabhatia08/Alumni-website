import React from 'react'
import logo from '../images/logo.png'
import banner from '../images/banner.png'
import sir from "../images/vishalSir.webp"
import alumni from "../images/alumni.jpg"


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
                <h3 className='text-4xl font-mons uppercase font-bold text-darkBlue mt-4'>
                    Our Story
                </h3>
                <div className='flex gap-20 mx-auto my-10'>
                    <img src={logo} alt='Punjabi University' className='w-full' />
                    <p className='items-centerflex my-auto'>Punjabi University, Patiala, founded under Punjab Act No. 35 of 1961 and inaugurated by Dr. S. Radhakrishnan on June 24, 1962, stands as a beacon of educational excellence. Established with the aim of promoting the Punjabi language, art, and literature, the University has grown into the largest in the state. As we celebrate our rich history and remarkable achievements, we take pride in honoring our distinguished alumni who have made significant contributions to society. Our campus now supports a vibrant community of over 14,000 students across various disciplines, from Humanities and Arts to Sciences and Engineering. This website is dedicated to recognizing and celebrating the accomplishments of our alumni, who continue to inspire and lead in diverse fields around the world.</p>
                </div>
            </div>

            <div className='max-w-[85%] flex flex-col items-end mx-auto my-20'>
                <h3 className='text-4xl font-mons text-right  font-bold text-darkBlue mt-4'>
                    Our <br /> FACULTY ADVISER
                </h3>
                <div className='flex gap-20 mx-auto my-10'>
                    <p className='items-centerflex my-auto'>Sir Vishal Goyal has been a driving force behind the creation of this website, offering invaluable guidance and insight throughout the process. His vision for a digital platform has enabled us to enhance our learning experience and foster collaboration within our community.
                        With extensive experience in the higher education sector, Sir Vishal specializes in Natural Language Processing, E-Learning, and research. His deep understanding of these fields enriches our curriculum and equips us with essential skills for the future. As a Microsoft-certified solution developer, he not only teaches complex concepts but also demonstrates their real-world applications, making learning engaging and relevant.
                        Sir Vishal's mentorship has been pivotal in inspiring us to explore new technologies and innovative solutions. His encouragement fosters a culture of curiosity and creativity, motivating students to pursue their passions with confidence.
                        We are deeply grateful for his unwavering support and dedication, which continue to shape our academic journeys. Thank you, Sir Vishal, for your commitment to our success and for being an exceptional adviser!</p>
                    <img src={sir} alt='Punjabi University' className=' w-56' />
                </div>
            </div>
            <div>
                <img src={alumni} alt='Alumni' />
            </div>

        </div>
    )
}
