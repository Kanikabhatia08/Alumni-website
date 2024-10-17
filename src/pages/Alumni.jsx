import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data/aluminiData.json';

export default function Alumni() {
    const [filteredData, setFilteredData] = useState([]);
    const { course } = useParams();

    useEffect(() => {
        if (course) {
            setFilteredData(data.filter(item => item.course.toLowerCase() === course.toLowerCase()));
        } else {
            setFilteredData(data);
        }
    }, [course]);
    return (
        <div className="home">
            <h1>{course ? `${course.toUpperCase()} Alumni` : 'All Alumni'}</h1>
            <div className="alumni-cards">
                {filteredData.map((item) => (
                    <div key={item.id} className="card">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.designation}</p>
                        <Link to={`/details/${item.id}`}>See More</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
