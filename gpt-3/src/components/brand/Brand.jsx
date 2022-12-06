import React from 'react'
import './brand.css'
import Google from '../../assects/google.png'
import Slack from '../../assects/slack.png'
import Atlassian from '../../assects/atlassian.png'
import Dropbox from '../../assects/dropbox.png'
import Shopify from '../../assects/shopify.png'

const Brand = () => {
  return (
    <div className='brand'>
      <div className='brand__mom'>
        <img src={Google} alt="Google" />
        <img src={Slack} alt="Slack" />
        <img src={Atlassian} alt="Atlassian" />
        <img src={Dropbox} alt="Dropbox" />
        <img src={Shopify} alt="Shopify" />
      </div>
    </div>
  )
}

export default Brand
