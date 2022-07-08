import React from 'react'
import './style.css'
import logoView from './../../assets/img/logo.png'

export default function ISign() {
  return (
    <div className='container'>
        <header>
            <img src={logoView} className="logo"/>
        </header>
        <main>
            <form>
                <ul>
                    <li><h1 className='title-h1'>WEB ALARME</h1></li>
                    <li className='sign-p'>Insira seus dados de acesso abaixo para acessar a central do Web Alarme.</li>
                    <div className='input-conta'>
                        <label for="password">Conta</label>
                        <input type="text" />
                    </div>
                    <div className='input-conta'>
                        <label for="password">Senha</label>
                        <input type="password" />
                    </div>
                    <button type="submit" className='btnEnter'>Enter</button>
                </ul>
            </form>
        </main>
    </div>
  )
}