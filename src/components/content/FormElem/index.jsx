import React from 'react';
import './style.css'
import bgImg from './../../../assets/img/bg-copyright.png'
import  ImgUser from './../../../assets/img/user-free-icon-font.png'
import ImgSMS from './../../../assets/img/envelope-free-icon-font (1).png'
import ImgWhatsApp from './../../../assets/img/whatsapp-free-icon-font.png'
import ImgCalendary from './../../../assets/img/calendar-free-icon-font.png'
import Button from 'react-bootstrap/Button'

export default function FormElem() {
  return (
    <div className='FormElem'>
        <img src={bgImg} alt="bg-icon" className='bgImg'/>
        <form className='Elem-form'>
            <ul>
                <li><input type='text' placeholder='Name'/> <img src={ImgUser} alt='icon'/></li>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                    <Button name="Nelson"/>
            </ul>
            <ul>
                <li><input type='text' placeholder='E-mail'/> <img src={ImgSMS} alt='icon'/></li>
                <li><input type='text' placeholder='Abservações'/> <img src={ImgCalendary} alt='icon'/></li>
            </ul>
            <ul>
                <li><input type='text' placeholder='Telefone'/> <img src={ImgWhatsApp} alt='icon'/></li>
                <input type='submit' value='ENVIAR' className='btn-send'/>
            </ul>
        </form>
    </div>
  );
}
