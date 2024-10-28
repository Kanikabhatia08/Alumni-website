import React from 'react';
import eventData from '../data/EventData.json';  // Importing the JSON file

const Events = () => {
  return (
    <div className="container bg-gray-200 mx-auto mt-20 w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        {eventData.map((item, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${item.position === 'right' ? 'right-timeline' : 'left-timeline flex-row-reverse'}`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-darkBlue shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-[#fff]">{index + 1}</h1>
            </div>
            <div className={`order-1 ${item.bgColor} rounded-lg shadow-xl w-5/12 px-6 py-4`}>
              <div>
                
              </div>

              <h3 className="mb-3 font-bold text-xl" style={{ color: item.textColor }}>{item.title}</h3>
              <p className="text-sm leading-snug tracking-wide" style={{ color: item.textColor }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
