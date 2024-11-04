import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data/aluminiData.json';


export default function Alumni() {
    const [filteredData, setFilteredData] = useState([]);
    const { Course } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { id: 1, image: 'images/slider1.jpg' },
        { id: 2, image: 'images/slider2.jpg' },
        { id: 3, image: 'images/slider3.jpg' },
        { id: 4, image: 'images/slider4.jpg' },
        { id: 4, image: 'images/slider5.jpg' },
    ];

    useEffect(() => {
        if (Course) {
            setFilteredData(data.filter(item => item.Course.toLowerCase() === Course.toLowerCase()));
        } else {
            setFilteredData(data);
        }
    }, [Course]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Auto slide every 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="w-full ">
            {/* Slider Section */}
            <div className="relative hidden md:block w-full h-screen overflow-hidden my-20">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={slide.image} alt={slide.image} className="object-fit w-full h-full" />

                    </div>
                ))}
                {/* Navigation buttons */}
                <div className="absolute inset-0 flex justify-between items-center">
                    <button
                        className="text-white bg-black bg-opacity-50 p-2 rounded-full ml-4"
                        onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
                    >
                        &#10094;
                    </button>
                    <button
                        className="text-white bg-black bg-opacity-50 p-2 rounded-full mr-4"
                        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
                    >
                        &#10095;
                    </button>
                </div>
            </div>

            {/* Alumni List Section */}
            <h1 className="text-center font-bold text-3xl mt-24 my-6 md:my-6">All Alumni</h1>
            <div className="max-w-[85%] justify-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {data.map((item, index) => (
                    <div key={index} className="bg-white  shadow-lg rounded-lg overflow-hidden">
                        <div className="h-[60%]">
                            <img
                                src={item.Image ? item.Image : "/images/user.jpg"}
                                alt={item.Name}
                                className="size-full object-fit "
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{item.Name}</h3>
                            <div className='text-lg'>
                            <p>{item.Occupation}</p>
                            <p>{item.InsituteName}</p>
                            {/* {
                                item.LinkedIn ?
                                    <p>LinkedIn: <span>{item.LinkedIn}</span></p> :
                                    <p></p>
                            } */}
                            {
                                item.Skill?
                                <p className='font-bold'>Skills: <span className='font-normal'>{item.Skill}</span></p> :
                                <p></p>
                            }
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
