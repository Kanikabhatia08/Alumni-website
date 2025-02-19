import React, { useState, useEffect, useRef, useCallback } from 'react';
import data from '../data/aluminiData.json';
import { Link } from 'react-router-dom';

export default function Alumni() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(25);
    const [currentIndex, setCurrentIndex] = useState(0);
    const inputRef = useRef(null);
    const loaderRef = useRef(null);

    const slides = [
        { id: 1, image: 'images/slider1.jpg' },
        { id: 2, image: 'images/slider2.jpg' },
        { id: 3, image: 'images/slider3.jpg' },
        { id: 4, image: 'images/slider4.jpg' },
        { id: 5, image: 'images/slider5.jpg' },
    ];

    useEffect(() => {
        if (searchTerm.trim()) {
            const results = data.filter((item) =>
                item.Name?.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(results);
            setVisibleCount(25); // Reset visible count on new search
        } else {
            setFilteredData(data);
            setVisibleCount(25);
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
        inputRef.current.blur();
    };

    const loadMore = useCallback(() => {
        setVisibleCount((prev) => prev + 25);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && visibleCount < filteredData.length) {
                    loadMore();
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [loadMore, visibleCount, filteredData.length]);

    return (
        <div className="w-full mt-20">
            {/* Image Slider */}
            <div className="relative hidden md:block max-h-full h-screen">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
                <div className="absolute inset-0 flex justify-between items-center">
                    <button
                        className="text-white bg-black bg-opacity-50 p-2 rounded-full ml-4"
                        onClick={() =>
                            setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
                        }
                    >
                        &#10094;
                    </button>
                    <button
                        className="text-white bg-black bg-opacity-50 p-2 rounded-full mr-4"
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
                    >
                        &#10095;
                    </button>
                </div>
            </div>

            {/* Heading */}
            <div className="w-full py-6 text-center">
                <h2 className="text-3xl font-semibold">All Alumni</h2>
            </div>

            {/* Search */}
            <div className="w-full">
                <div className="max-w-[85%] mx-auto">
                    <form onSubmit={handleSearch} className="flex justify-center items-center">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search Alumni by Name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-[80%] md:w-[50%] px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                        />
                    </form>
                </div>
            </div>

            {/* Alumni Cards */}
            <div className="max-w-[90%] md:max-w-[85%] mx-auto my-10 md:my-24">
                {filteredData.length ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {filteredData.slice(0, visibleCount).map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                            >
                                <div className="h-64 md:h-72 lg:h-80">
                                    <img
                                        src={item.Image || '/images/user.jpg'}
                                        alt={item.Name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 text-sm md:text-base">
                                    <h3 className="text-lg md:text-xl font-bold">{item.Name}</h3>
                                    {item.Course && <p><strong>Course:</strong> {item.Course}</p>}
                                    {item.Batch && <p><strong>Batch:</strong> {item.Batch}</p>}
                                    {item.Occupation && <p><strong>Occupation:</strong> {item.Occupation}</p>}
                                    {item.Skill && <p><strong>Skills:</strong> {item.Skill}</p>}
                                    {item.LinkedIn && (
                                        <p>
                                            <strong>LinkedIn:</strong>{" "}
                                            <Link to={item.LinkedIn} className="underline text-blue">
                                                {item.Name}
                                            </Link>
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

            {/* Loader */}
            {visibleCount < filteredData.length && (
                <div ref={loaderRef} className="text-center my-8">
                    <p className="text-gray-500">Loading more alumni...</p>
                </div>
            )}
        </div>
    );
}
