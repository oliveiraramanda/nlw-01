import React from 'react';
import { FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
    return (
    <div id="page-home">
        <div className="content">
            <header>
            <img src={logo} alt='Ecoleta'/>
            </header>
           <main>
               <h1>Coleta de resíduos em Cajamar</h1>
               <p>Ajudamos pessoas a encontrarem postos de coleta de forma eficiente. Vem ajudar o planeta também!</p>
           <Link to ='/create-point'>
              <span>
               <FiLogIn/>
              </span>
              <strong>Cadastre um ponto de coleta.</strong>
             </Link>
           </main>
        </div>
    </div>
    )
}

export default Home;