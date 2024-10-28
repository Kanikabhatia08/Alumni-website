import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data/aluminiData.json';
import user from '../images/user.webp'
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'


export default function Alumni() {
    const [filteredData, setFilteredData] = useState([]);
    const { Course } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { id: 1, image: slider1 },
        { id: 2, image: slider2 },
        { id: 3, image: slider3 },
        { id: 4, image: slider4 },
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
            <div className="max-w-[85%] justify-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {data.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Image, Name, and Designation */}
                        <img 
                            src={item.Image ? require(`./${item.Image}`) : user}  // Replace with default image if no image provided
                            alt={item.Name} 
                            className="w-full h-fit object-cover" 
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{item.Name}</h3>
                            <p className="text-gray-700">{item.Occupation}</p> {/* Show occupation as designation */}
                            <Link to={`/details/${item.id}`} className="text-blue-500 hover:underline">
                                See More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
