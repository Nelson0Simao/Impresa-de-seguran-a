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
            <i class="fa fa-get-pocket fa-2x" aria-hidden="true"></i>
            </div>
            <img src={iconSegu} alt="segurança"/>
        </div>
    </>
  );
}

export default UsServes;