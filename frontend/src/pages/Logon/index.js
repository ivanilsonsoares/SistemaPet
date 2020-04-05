import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import logo from '../../assets/logo.png';

import api from '../../services/api';

export default function Logon(){
    const [email,setEmail] = useState('');

    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { email });

            localStorage.setItem('email',email);
            localStorage.setItem('name',response.data.name);

            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamento.');
        }

    }

    return(
        <div className="logon-container">
            <div className="content">
                <section className="form">
                   
                    <form onSubmit={handleLogin}>
                        <center> <h1>Faça seu Login</h1> </center> 
                        <input 
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={e =>setEmail(e.target.value)}
                        />
                        <button className="button" type="submit">Entrar</button>
                        *Acesso restrito
                        <Link className="back-link" to="/">
                            <FiLogIn size={16} color='#E02041' />
                            Voltar ao inicio
                        </Link>
                    </form>
                </section>

                <img src={logo} alt="PET-SI"/>
            </div>
      </div>
    )

}