import React from 'react'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

function HomePage() {
  return (
    <div className='Homepage'>
      <header className="hero">
        <h1 className="hero-text">
          HI, I am <span>John</span>
        </h1>
        <p className='hero-sub-text'>
          The ancient Greeks were well aware that a paradox can take us outside our usual way of thinking. 
          They combined the prefix para- ("beyond" or "outside of") with the verb dokein ("to think"), 
          forming paradoxos, an adjective meaning "contrary to expectation." 
          Latin speakers picked up the word and used it to create their noun paradoxum, 
          which English speakers borrowed during the 1500s to create paradox.
        </p>
        <div className="icons">
          <Link className='icon-link'>
            <FontAwesomeIcon icon={faGithub} className='icon gt' />
          </Link>
          <Link className='icon-link'>
            <FontAwesomeIcon icon={faFacebook} className='icon fb' />
          </Link>
          <Link className='icon-link'>
            <FontAwesomeIcon icon={faTwitter} className='icon tw' />
          </Link>
          <Link className='icon-link'>
            <FontAwesomeIcon icon={faInstagram} className='icon is' />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default HomePage;
