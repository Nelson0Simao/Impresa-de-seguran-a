import React from 'react'
import './style.css'
import clock from './../../../assets/img/clock-free-icon-font.png'
import logo from './../../../assets/img/logo.png'
import phone from './../../../assets/img/phone-call-free-icon-font.png'
import sms from './../../../assets/img/envelope-free-icon-font.png'

export default function SubHeader() {
  return (
    <div className='SubHeader'>
        <img src={logo} alt="icon" className='logo-main' />
       <div className='el-items-header'>    
       <div className='box-it-1'>
            <img src={clock} alt="icon" />
            <ul>
                <li>HORÁRIO DE ATENDIMENTO</li>
                <li>ADMINISTRATIVO: 07:00 às 17:00</li>
                <li>CENTRAL DE OPERAÇÕES: 24 horas</li>
            </ul>
        </div>
        <div className='box-it-2'>
        <img src={phone} />
            <ul>
                <li>LIGUE AGORA</li>
                <li>(27) 2121-0100</li>
            </ul>
        </div>
        <div className='box-it-3'>
        <img src={sms}/>
            <ul>
                <li>FALE CONOSCO</li>
                <li>envie uma mensagem</li>
            </ul>
        </div>
        </div>
    </div>
  )
}
