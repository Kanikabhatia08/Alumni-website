// ParallaxSection.js
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const ParallaxSection = () => {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            image: 'images/campus.webp',
            speed: 40,
          },
          {
            children: <div className="absolute inset-0 bg-[#000] opacity-50" />,
            speed: 0,
          },
        ]}
        className="h-[90vh]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center'>
            <div className='sm:size-[70%] size-[50%] '>
              <img src='images/speaker.png' alt="speaker" />
            </div>
            <div className='text-[#fff] text-center sm:text-left'>
              <h3 className=' text-4xl md:text-7xl font-extrabold'>Experience the Buzz:</h3>
              <h2 className='font-bold text-2xl md:text-4xl text-[#87d3f5]'>Check Out Upcoming Events in Your Community!</h2>
              <Link to='/events'>
                <button className='flex gap-2 my-3 mx-auto sm:mx-0 font-semibold items-center rounded-lg py-2.5 px-3 md:px-5 md:py-3 bg-darkBlue text:xl md:text-3xl'>
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
