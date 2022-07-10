import React from 'react';
import './style.css';
import iconSegu from './../../../assets/img/seguranca-servicos.png'

function UsServes() {
  return (
    <>
        <div className='services'>
            <h1>NOSSOS SERVIÇOS</h1>
            <p>Há mais de 30 anos oferecendo as soluções em segurança que você precisa.</p>
            <div className='servies-el-indetity'>
                <ul>
                    <li><a src="#">SEGURANÇA PATRIMONIAL</a><i class="fa fa-get-pocket fa-2x" aria-hidden="true"></i></li>
                    <li><a src="#">SEGURANÇA PESSOAL</a><i class="fa fa-get-pocket fa-2x" aria-hidden="true"></i></li>
                    <li><a src="#">CONTROLE DE PORTARIA</a><i class="fa fa-get-pocket fa-2x" aria-hidden="true"></i></li>
                    <li><a src="#">ALARME PERIMETRAL</a><i class="fa fa-get-pocket fa-2x" aria-hidden="true"></i></li>
                </ul>
                <ul>
                    <li><img src={iconSegu} alt="segurança"/></li>
                </ul>
                <ul>
                    <li><i class="fa fa-get-pocket fa-2x" aria-hidden="true"></i><a src="#">MONITORAMENTO DE IMAGENS (CFTV)</a></li>
                    <li><i class="fa fa-get-pocket fa-2x" aria-hidden="true"></i><a src="#">MONITORAMENTO 24 HORAS</a></li>
                    <li><i class="fa fa-get-pocket fa-2x" aria-hidden="true"></i><a src="#">SEGURANÇA ELETRÔNICA INTEGRADA</a></li>
                    <li><i class="fa fa-get-pocket fa-2x" aria-hidden="true"></i><a src="#">PORTARIA VIRTUAL</a></li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default UsServes;