import React from 'react'
import './possibility.css'
import Possibilit from '../../assects/possibility.png'
const Possibility = () => {
  return (
    <div className='possibility' id='CaseStudies'>
      <div className='possibility__mom'>
        <img className='possibility__mom__logo' src={Possibilit} alt="vr" />
        <div className='possibility__mom__content'>
          <p className='mini'>
          Request Early Access to Get Started
          </p>
          <p className='title'>
          The possibilities are beyond your imagination
          </p>
          <p className='paragraph'>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <p className='mini-two'>
          Request Early Access to Get Started
          </p>
        </div>
      </div>
    </div>
  )
}

export default Possibility
