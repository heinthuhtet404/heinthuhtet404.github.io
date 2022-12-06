import React from 'react'
import './article.css'

const Article = ({imgurl, date, title}) => {
  return (
    <div className='article'>
      <div className='article__mom'>
        <img src={imgurl} alt="imgpoto" />
      </div>
      <div className='article__content'>
        <div className='article__up'>
          <p className='mini'>
            {date}         
          </p>
          <p className='maxi'>
            {title}
          </p>
        </div>
        <p className='mini two'>
          Read full article
        </p>
      </div>
    </div>
  )
}

export default Article
