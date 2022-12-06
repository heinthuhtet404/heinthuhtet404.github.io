import React from 'react'
import './footer.css'
import Logo from '../../assects/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='titlef'>
      Do you want to step in to the future before others
      </p>
      <p className='boxx'>
        Request Early Access
      </p>
      <div className='container'>
        <div className='container-one'>
          <img src={Logo} alt="gpt-logo" />
          <p className='para'>
          Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className='container-two'>
          <p className='dad'>Links</p>
          <p className='baby'>Overons</p>
          <p className='baby'>Social Media</p>
          <p className='baby'>Counters</p>
          <p className='baby'>Contact</p>
        </div>
        <div className='container-three'>
          <p className='dad'>Company</p>
          <p className='baby'>Terms & Conditions</p>
          <p className='baby'>Privacy Policy</p>
          <p className='baby'>Contact</p>
        </div>
        <div className='container-four'>
          <p className='dad'>Get in touch</p>
          <p className='baby'>Crechterwoord K12 182 DK Alknjkcb</p>
          <p className='baby'>085-132567</p>
          <p className='baby'>info@payme.net</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
