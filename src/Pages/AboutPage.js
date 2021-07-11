import React from 'react'
import ImageSection from '../Components/ImageSection'
import ServiceSection from '../Components/ServiceSection'
import SkillSection from '../Components/SkillSection'
import Title from '../Components/Title'
import image4 from '../img/image4.jpg';
import image5 from '../img/image5.jpg';
import image6 from '../img/image6.jpg';


function AboutPage() {
  return (
    <div className='about'>
      <Title title={'About me'} span={'About me'} />
      <ImageSection />
      <Title title={'My skills'} span={'My skills'} />
      <div className="skills-container">
        <SkillSection skill={'Javascript'} progress={'80%'}  width={'80%'} />
        <SkillSection skill={'Node JS'} progress={'70%'}  width={'70%'} />
        <SkillSection skill={'Typescript'} progress={'40%'}  width={'40%'} />
        <SkillSection skill={'React JS'} progress={'85%'}  width={'85%'} />
      </div>
      <Title title={'Techniques'} span={'Techniques'} />
      <div className="service-container">
        <ServiceSection image={image4} title={'Javascript Developer'} text={'Great deal'} />
        <ServiceSection image={image5} title={'React Developer'} text={'Great deal'} />
        <ServiceSection image={image6} title={'NodeJS Developer'} text={'Great deal'} />
      </div>
    </div>
  )
}

export default AboutPage;
