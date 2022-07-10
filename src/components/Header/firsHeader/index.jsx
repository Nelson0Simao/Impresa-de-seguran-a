import React from 'react'
import './style.css'

export default function FirsHeader() {
  return (
    <header className='header'>
    <ul className='box-el-1'>
        <li><i class="fa fa-facebook" aria-hidden="true" style={{color:"#FFFFFF"}}></i></li>
        <li><i class="fa fa-instagram" aria-hidden="true" style={{color:"#FFFFFF"}}></i></li>
    </ul>
    <ul className='box-el-2'>
        <li><a href=''>TRABALHE CONOSCO</a></li>
        <li><a href=''>PORTAL DO COLABORADOR</a></li>
        <li><a href=''>PORTAL DO CLIENTE</a></li>
    </ul>
  </header>
  )
}
