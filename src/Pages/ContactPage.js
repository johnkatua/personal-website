import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/image8.jpg';
import email from '../img/image9.jpg';
import location from '../img/image10.jpg';
import Title from '../Components/Title';


function ContactPage() {
  return (
    <div>
      <div className="contact-title">
        <Title title={'Contact me'} span={'Contact me'} />
      </div>
      <div className='contact-container'>
        <div className="map-section">
        <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32374894913!2d36.70730606241929!3d-1.3032050558925203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1625402946797!5m2!1sen!2ske" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className="contact-section">
          <ContactItem icon={phone} text={'+24511111111'} title={'phone'} />
          <ContactItem icon={email} text={'johnkatua99@gmail.com'} title={'email'}/>
          <ContactItem icon={location} text={'Nairobi, Kenya'} title={'location'} />
        </div>
      </div>
    </div>
  )
}

export default ContactPage;
