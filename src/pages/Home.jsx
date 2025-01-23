import React from 'react'
import ParallaxSection from '../components/ParallaxSection'
import { Team } from '../components/Team'

export const Home = () => {
    return (
        <div className='  w-full bg-no-repeat h-full mt-20 flex flex-col gap-40' >
            <div className='relative w-full h-full'>
                <div className='w-full mt-20'>
                    <img src='/images/banner.png' alt='students' className='w-full hidden md:block' />
                    <img src='/images/banner-mobile.png' alt='students' className='w-full md:hidden' />
                </div>
                <div className='absolute inset-0 flex flex-col justify-start pt-9 items-center text-center bg-opacity-50 bg-white'>
                    <h1 className=' text-4xl xs:text-5xl sm:text-6xl lg:text-8xl leading-none font-extrabold font-mons uppercase text-[#0091CD] animate-fadeInTop'>
                        Celebrating <br />Excellence
                    </h1>
                    <h3 className=' xs:text-xl sm:text-2xl lg:text-3xl italic font-bold text-[#000] mt-4'>
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

            <div className='max-w-[95%] md:max-w-[85%] mx-auto flex flex-col gap-32'>
                <div className=' flex gap-10 lg:gap-20 items-center md:items-start  '>
                    <div className='w-full hidden md:flex '>
                        <img src='/images/logo.png' alt='Punjabi University' className='w-full' />
                    </div>
                    <div className='lg:flex flex flex-col gap-9 items-center md:items-start'>
                        <h3 className='text-4xl font-mons uppercase font-extrabold text-darkBlue '>
                            Our Story
                        </h3>
                        <img src='/images/logo.png' alt='Punjabi Univesity' className='md:hidden size-40 flex mx-auto' />
                        <p className='items-center text-justify flex '>Punjabi University, Patiala, founded under Punjab Act No. 35 of 1961 and inaugurated by Dr. S. Radhakrishnan on June 24, 1962, stands as a beacon of educational excellence. Established with the aim of promoting the Punjabi language, art, and literature, the University has grown into the largest in the state. As we celebrate our rich history and remarkable achievements, we take pride in honoring our distinguished alumni who have made significant contributions to society. Our campus now supports a vibrant community of over 14,000 students across various disciplines, from Humanities and Arts to Sciences and Engineering. This website is dedicated to recognizing and celebrating the accomplishments of our alumni, who continue to inspire and lead in diverse fields around the world.</p>
                    </div>
                </div>

                <div className=' w-full flex gap-10 lg:gap-20  items-center '>
                    <div className='lg:flex flex flex-col gap-9 md:w-[70%] '>
                        <h3 className='text-4xl font-mons text-center md:text-right font-bold text-darkBlue mt-4'>
                            Words of<span className='font-extrabold'> WISDOM</span>
                        </h3>
                        <img src='/images/HOD.jpg' alt='Dr. Gagandeep Kaur' className='md:hidden rounded-full size-40 flex mx-auto' />
                        <p className='text-justify '>
                            Dear alumni,<br />
                            We extend our heartfelt congratulations to each one of you who has carved a successful path in the IT sector. Your dedication, innovation, and resilience have not only brought you personal success but have also added immense pride to the Department of Computer Science at Punjabi University, Patiala. Each of you represents the spirit of our institution, and seeing you excel in your careers fills us with joy and admiration. Your achievements set a powerful example for current students, showing them what can be accomplished through hard work and passion.
                            We consider you invaluable members of our university community and are grateful for the inspiration you provide. Remember, you are always welcome to return, share your knowledge, and reconnect with us. We look forward to celebrating many more milestones with you in the future.
                            <br /><br />
                            <p className='font-semibold'>
                                Dr. Gagandeep<br />
                                Head & Professor<br />
                                Department of computer Science<br />
                                Punjabi University, Patiala
                            </p>
                        </p>
                    </div>
                    <div className='hidden md:flex items-center  md:h-[90%] md:w-[25%]'>
                        <img src='/images/hodMaam.jpg' alt='Punjabi University' className='object-fit' />
                    </div>
                </div>
            </div>

            <div>
                <ParallaxSection />
            </div>

            <Team />

        </div>
    )
}
