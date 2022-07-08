import React from 'react'
import bgIcon from './../../assets/img/bg-copyright.png'
import './style.css'

export default function Footer() {
  return (
    <div className='view-el-content'>
      <img src={bgIcon} alt="icon" className='iconElement'/>
        <p className='el-p-item'>© 2022 Grupo create of soft. Todos os direitos reservados. Desenvolvido por Nelson Simão</p>
    </div>
  )
}
