import React from 'react';
import image2 from '../img/img8.jpg';

function ImageSection() {
  return (
    <div className='imageSection'>
      <div className="img">
        <img src={image2} alt="image2" />
      </div>
      <div className="about-info">
        <h4>I am <span>John Katua</span></h4>
        <p className='about-text'>
          John Katua studied Business Information Technology at Technical University of Kenya.
          John Katua studied Business Information Technology at Technical University of Kenya.
          John Katua studied Business Information Technology at Technical University of Kenya.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Name</p>
            <p>Location</p>
            <p>Occupation</p>
            <p>Age</p>
          </div>
          <div className="right-section">
            <p>: John Katua</p>
            <p>: Nairobi, Kenya</p>
            <p>: Student</p>
            <p>: 22</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  )
}

export default ImageSection
