import React from 'react'
import logo from '../images/logo.png'
import banner from '../images/banner.png'
import sir from "../images/vishalSir.webp"
import alumni from "../images/alumni.jpg"
import ParallaxSection from '../components/ParallaxSection'

export const Home = () => {
    return (
        <div className='  w-full bg-no-repeat h-full mt-20 flex flex-col gap-40' >
            <div className='relative w-full h-full'>
                <div className='w-full mt-20'>
                    <img src={banner} alt='students' className='w-full' />
                </div>
                <div className='absolute inset-0 flex flex-col justify-start pt-9 items-center text-center bg-opacity-50 bg-white'>
                    <h1
                        className='text-4xl md:text-6xl lg:text-8xl leading-none font-extrabold font-mons uppercase text-[#0091CD] 
            animate-fadeInTop'
                    >
                        Celebrating <br />Excellence
                    </h1>
                    <h3 className='lg:text-3xl italic font-bold text-[#000] mt-4'>
                        {Array.from(`"Honoring Our Distinguished Alumni"`).map((char, index) => (
                            <span
                                key={index}
                                className="inline-block opacity-0 animate-typedLetter"
                                style={{ animationDelay: `${index * 0.1}s` }} // Delay for each letter
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h3>
                </div>
            </div>

            <div className='max-w-[85%] mx-auto flex flex-col gap-32'>
                <div className=' flex gap-10 lg:gap-20 items-center md:items-start  '>
                    <div className='w-full hidden md:flex '>
                        <img src={logo} alt='Punjabi University' className='w-full' />
                    </div>
                    <div className='lg:flex flex flex-col gap-9 items-center md:items-start'>
                        <h3 className='text-4xl font-mons uppercase font-extrabold text-darkBlue '>
                            Our Story
                        </h3>
                        <p className='items-center text-justify flex '>Punjabi University, Patiala, founded under Punjab Act No. 35 of 1961 and inaugurated by Dr. S. Radhakrishnan on June 24, 1962, stands as a beacon of educational excellence. Established with the aim of promoting the Punjabi language, art, and literature, the University has grown into the largest in the state. As we celebrate our rich history and remarkable achievements, we take pride in honoring our distinguished alumni who have made significant contributions to society. Our campus now supports a vibrant community of over 14,000 students across various disciplines, from Humanities and Arts to Sciences and Engineering. This website is dedicated to recognizing and celebrating the accomplishments of our alumni, who continue to inspire and lead in diverse fields around the world.</p>
                    </div>
                </div>

                <div className=' w-full flex gap-10 lg:gap-20  items-center md:items-end '>
                    <div className='lg:flex flex flex-col gap-9 md:w-[70%] '>
                        <h3 className='text-4xl font-mons text-center md:text-right  font-bold text-darkBlue mt-4'>
                            Our <br /><span className='font-extrabold'> FACULTY ADVISER</span>
                        </h3>
                        <p className='text-justify flex'>Sir Vishal Goyal has been a driving force behind the creation of this website, offering invaluable guidance and insight throughout the process. His vision for a digital platform has enabled us to enhance our learning experience and foster collaboration within our community.
                            With extensive experience in the higher education sector, Sir Vishal specializes in Natural Language Processing, E-Learning, and research. His deep understanding of these fields enriches our curriculum and equips us with essential skills for the future. As a Microsoft-certified solution developer, he not only teaches complex concepts but also demonstrates their real-world applications, making learning engaging and relevant.
                            Sir Vishal's mentorship has been pivotal in inspiring us to explore new technologies and innovative solutions. His encouragement fosters a culture of curiosity and creativity, motivating students to pursue their passions with confidence.
                            We are deeply grateful for his unwavering support and dedication, which continue to shape our academic journeys. Thank you, Sir Vishal, for your commitment to our success and for being an exceptional adviser!</p>
                    </div>
                    <div className='hidden md:flex items-start h-[20%] w-[22%]'>
                        <img src={sir} alt='Punjabi University' className='w-full h-full' />
                    </div>
                </div>
            </div>

            <div>
                <ParallaxSection/>
            </div>

            <div>
                <h1 className='text-3xl font-bold text-center'>Celebrating Our Exceptional Alumni!</h1>
            </div>
        </div>
    )
}
