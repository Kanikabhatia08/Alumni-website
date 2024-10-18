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
          <img src={alumni.Image} alt={alumni.Name} />
          <h2>{alumni.Name}</h2>
          {/* <p><strong>Course:</strong> {alumni.course}</p> */}
          <p><strong>Session:</strong> {alumni.Batch}</p>
          <p><strong>Designation:</strong> {alumni.Profession}</p>
          <p><strong>Organization:</strong> {alumni.InsituteName}</p>
          <a href={alumni.LinkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </>
      ) : (
        <p>Alumni not found.</p>
      )}
    </div>
  );
};

export default Details;
