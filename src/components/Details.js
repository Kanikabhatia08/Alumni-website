import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/aluminiData.json';

const Details = () => {
  const { id } = useParams();
  const alumni = data.find(item => item.id === parseInt(id));

  return (
    <div className="details">
      {alumni ? (
        <>
          <img src={alumni.image} alt={alumni.name} />
          <h2>{alumni.name}</h2>
          <p><strong>Course:</strong> {alumni.course}</p>
          <p><strong>Session:</strong> {alumni.session}</p>
          <p><strong>Designation:</strong> {alumni.designation}</p>
          <p><strong>Organization:</strong> {alumni.organization}</p>
          <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </>
      ) : (
        <p>Alumni not found.</p>
      )}
    </div>
  );
};

export default Details;
