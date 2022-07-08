import React from 'react'
import './style.css'
import img1 from './slady1.png'
import img2 from './slady2.png'
import img3 from './slady3.png'

export default function MainViews() {
  return (
    <div className='views-el'>
      <img src={img1} alt="Los Angeles" className='img-slady' />
    </div>
  )
}
