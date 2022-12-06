import React from 'react'
import './header.css'
import Ai from '../../assects/ai.png'
import People from '../../assects/people.png'

const Header = () => {
  return (
    <div className='header' id='Home'>
      <div className='header__mom'>
        <div className='header__content'>
          <p className='header__title'>
            Let’s Build Something
            amazing with GPT-3
            OpenAI
          </p>
          <p className='header__paragraph'>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className='header__email-box'>
            <input className='header__email-box__input' type="text" placeholder='Your Email Address'/>
            <button className='header__email-box__btn'>Get Started</button>
          </div>
          <div className='header__members'>
            <img className='header__members__people' src={People} alt="people" />
            <p className='header__members__paragraph'>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='header__head-pt'>
          <img src={Ai} alt="Ai" />
        </div>
      </div>
    </div>
  )
}

export default Header
