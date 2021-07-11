import React from 'react'

function ContactItem({icon, title, text}) {
  return (
    <div className='contact'>
      <div className="contact-items">
        <img src={icon} alt="icons" />
        <div className="contact-details">
          <h6>{title}</h6>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactItem;
