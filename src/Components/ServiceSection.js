import React from 'react'

function ServiceSection({image, title, text}) {
  return (
    <div className='service-section'>
      <div className="service">
        <div className="service-content">
          <img src={image} alt="" />
          <h5 className="service-title">{title}</h5>
          <p className="service-text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection;
