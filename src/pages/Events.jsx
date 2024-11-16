import React from 'react';
import eventData from '../data/EventData.json';  // Importing the JSON file

const Events = () => {
  return (
    <div className="container bg-gray-200 mx-auto mt-20 w-full h-full">
      <h1 className='text-4xl font-bold text-center mt-3 text-darkBlue'>Events Timeline</h1>
      <h3 className='font-bold text-center text-2xl'>Department of Computer Science</h3>

      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        {eventData.map((item, index) => (
          <div
            key={index}
            className={` -mb-20 flex justify-between items-center w-full ${item.position === 'right' ? 'right-timeline' : 'left-timeline flex-row-reverse'}`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-darkBlue shadow-xl w-8 h-8 rounded-full">
            </div>
            <div className={`order-1 ${item.bgColor} flex flex-col gap-3 rounded-lg shadow-xl w-5/12 px-6 py-4`}>
              <div>
                <h3 className="mb-3 font-bold text-2xl" style={{ color: item.textColor }}>{item.title}</h3>
                <p className="text-lg leading-snug tracking-wide text-justify" style={{ color: item.textColor }}>{item.description}</p>
              </div>
              <div className=''>
                <img src={item.image1 ? item.image1 : "/images/user.jpg"}
                  alt={item.Name}
                  className="size-full object-fit"
                  />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
