import React from 'react'
import './style.css'
import iconFacebook from './../../../assets/img/facebook.png'
import iconInstagram from './../../../assets/img/instagram.png'

export default function FirsHeader() {
  return (
    <header className='header'>
    <ul className='box-el-1'>
        <li><img src={iconFacebook} alt="Facebook" /></li>
        <li><img src={iconInstagram} alt="Instagram" /></li>
    </ul>
    <ul className='box-el-2'>
        <li><a href=''>TRABALHE CONOSCO</a></li>
        <li><a href=''>PORTAL DO COLABORADOR</a></li>
        <li><a href=''>PORTAL DO CLIENTE</a></li>
    </ul>
  </header>
  )
}
