// ParallaxSection.js
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import studentsImage from '../images/campus.webp'; // Import the image
import speaker from '../images/speaker.png'
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom';


const ParallaxSection = () => {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            image: studentsImage,  // Use the imported image
            speed: 40,            // Adjust the speed for faster movement (negative for faster parallax)
          },
        ]}
        className=" h-[80vh]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className='flex justify-between items-center'>
            <div className='size-[70%]'>
              <img src={speaker} alt="speaker" />
            </div>
            <div className='text-[#fff]'>
              <h3 className='text-7xl font-extrabold  '>Experience the Buzz:</h3>
              <h2 className='font-bold text-4xl text-[#87d3f5]'>Check Out Upcoming Events in Your Community!</h2>
              <Link to='/events'>
                <button className='flex gap-2 my-3 font-semibold items-center rounded-lg px-5 py-3 bg-darkBlue text-3xl'>
                  Events
                  <span className='mt-1'><HiArrowSmRight /></span>
                </button>
              </Link>

            </div>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default ParallaxSection;
