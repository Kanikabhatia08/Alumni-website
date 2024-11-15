import React, { useState, useEffect, useRef } from 'react';
import data from '../data/aluminiData.json';
import { Link } from 'react-router-dom';

export default function Alumni() {
    const [searchTerm, setSearchTerm] = useState(""); // State to track search input
    const [filteredData, setFilteredData] = useState([]);
    const [searchClicked, setSearchClicked] = useState(false); // Track if search button is clicked
    const [currentIndex, setCurrentIndex] = useState(0); // Track current carousel index
    const inputRef = useRef(null); // Create a reference for the search input field

    const slides = [
        { id: 1, image: 'images/slider1.jpg' },
        { id: 2, image: 'images/slider2.jpg' },
        { id: 3, image: 'images/slider3.jpg' },
        { id: 4, image: 'images/slider4.jpg' },
        { id: 5, image: 'images/slider5.jpg' },
    ];

    // Filter alumni data based on search term
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

    // Carousel auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Auto-slide every 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent form submission to maintain hover effect
        setSearchClicked(true); // Trigger search when Enter or button is clicked
        inputRef.current.blur(); // Remove focus from the input to remove the typing cursor
    };

    const handleReset = () => {
        setSearchTerm("");
        setSearchClicked(false);
    };

    const handleGoToAllData = () => {
        setSearchTerm("");
        setSearchClicked(false); // Reset the search and show all data
    };

    const handleFocus = () => {
        setSearchClicked(true); // Keep the search bar in focus to allow typing again
    };

    return (
        <div className="w-full bg-gray-50 pt-14">
            
                <div className="relative hidden md:block w-full h-screen overflow-hidden mb-10 mt-6">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                    {/* Navigation Buttons */}
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
            <div className="max-w-[85%] mx-auto my-24">
                {filteredData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredData.map((item, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="h-[60%]">
                                    <img
                                        src={item.Image || '/images/user.jpg'}
                                        alt={item.Name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">{item.Name}</h3>
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

            {/* Button to Go to All Alumni Data */}
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

            {/* Reset Data Button */}
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
