import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import Blog01 from '../../assects/blog01.png'
import Blog02 from '../../assects/blog02.png'
import Blog03 from '../../assects/blog03.png'
import Blog04 from '../../assects/blog04.png'
import Blog05 from '../../assects/blog05.png'

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog__mom'>
        <p className='blog__title'>
        A lot is happening, We are blogging about it.
        </p>
        <div className='blog__container'>
          <div className='blog__gp-a'>
            <Article className='box' imgurl={Blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          </div>
          <div className='blog__gp-b'>
            <Article imgurl={Blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
            <Article imgurl={Blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
            <Article imgurl={Blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
            <Article imgurl={Blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
