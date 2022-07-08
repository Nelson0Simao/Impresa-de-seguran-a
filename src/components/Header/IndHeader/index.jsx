import React from 'react'
import './style.css'
import fundo from './../../../assets/img/web-alert.png'

export default function IndHeader() {
  return (
    <div className='ul-display'>
        <ul className='ul-el-list'>
           <div className='line-el'>
           <li>HOME</li>
            <li>INSTITUCIONAL</li>
            <li>VSG SOCIAL</li>
            <li>SERVIÇOS</li>
            <li>OUVIDORIA</li>
            <li>PORTAL DO COLABORADOR</li>
            <li>CONTATO</li>
           </div>
            <li className='view-el'><img src={fundo} /><span>WEB ALARME</span> </li>
        </ul>
    </div>
  )
}
