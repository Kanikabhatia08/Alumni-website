import React, { useState, useEffect, useRef } from 'react';
import data from '../data/aluminiData.json';
import { Link } from 'react-router-dom';

export default function Alumni() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [searchClicked, setSearchClicked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const inputRef = useRef(null);

    const slides = [
        { id: 1, image: 'images/slider1.jpg' },
        { id: 2, image: 'images/slider2.jpg' },
        { id: 3, image: 'images/slider3.jpg' },
        { id: 4, image: 'images/slider4.jpg' },
        { id: 5, image: 'images/slider5.jpg' },
    ];

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            const results = data.filter((item) =>
                item.Name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(results);
        } else {
            setFilteredData(data);
        }
    }, [searchTerm]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchClicked(true);
        inputRef.current.blur();
    };

    const handleReset = () => {
        setSearchTerm("");
        setSearchClicked(false);
    };

    const handleGoToAllData = () => {
        setSearchTerm("");
        setSearchClicked(false);
    };

    const handleFocus = () => {
        setSearchClicked(true);
    };

    return (
        <div className="w-full mt-20">
            <div className="relative hidden md:block scale-x-125 max-h-full h-screen">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-contain" // Switch between `object-cover` and `object-contain` as needed
                        />
                    </div>
                ))}
                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex justify-between items-center">
                    <button
                        className="text-white bg-black bg-opacity-50 p-2 rounded-full ml-4"
                        onClick={() =>
                            setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
                        }
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

            {/* All Alumni Heading Section */}
            <div className="w-full py-6 text-center">
                <h2 className="text-3xl font-semibold">All Alumni</h2>
            </div>

            {/* Search Section */}
            <div className="w-full ">
                <div className="max-w-[85%] mx-auto">
                    <form onSubmit={handleSearch} className="flex justify-center items-center">
                        <input
                            ref={inputRef} // Attach the ref to the input
                            type="text"
                            placeholder="Search Alumni by Name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={handleFocus} // Keep the input focused to allow typing
                            className="w-[50%] px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </form>
                </div>
            </div>

            {/* Alumni List Section */}
            <div className="max-w-[90%] md:max-w-[85%] mx-auto my-10 md:my-24">
                {filteredData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {filteredData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                            >
                                <div className="h-96">
                                    <img
                                        src={item.Image || '/images/user.jpg'}
                                        alt={item.Name}
                                        className="w-full h-full object-fit"
                                    />
                                </div>
                                <div className="p-4 text-sm md:text-base">
                                    <h3 className="text-lg md:text-xl font-bold">{item.Name}</h3>
                                    <p className="text-gray-600">{item.Occupation}</p>
                                    <p className="text-gray-500">{item.InstituteName}</p>
                                    {item.Skill && (
                                        <p className="font-bold">
                                            Skills: <span className="font-normal">{item.Skill}</span>
                                        </p>
                                    )}
                                    {item.LinkedIn && (
                                        <p className="font-bold">
                                            LinkedIn: <Link to={item.LinkedIn}><span className="font-normal">{item.Name}</span></Link>
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-10">
                        {searchTerm
                            ? `No alumni found matching "${searchTerm}".`
                            : "No alumni data available."}
                    </p>
                )}
            </div>

            {/* Buttons */}
            {searchTerm && !searchClicked && (
                <div className="text-center my-4">
                    <button
                        onClick={handleGoToAllData}
                        className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
                    >
                        Go to All Alumni Data
                    </button>
                </div>
            )}

            {searchClicked && searchTerm && (
                <div className="text-center my-4">
                    <button
                        onClick={handleReset}
                        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Reset
                    </button>
                </div>
            )}
        </div>
    );
}
