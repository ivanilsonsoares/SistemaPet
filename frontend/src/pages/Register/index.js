import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logo from '../../assets/logo.png';
import Api from '../../services/api'


export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data ={
            name,
            email,
        };

        try{
            const response = await Api.post('sessions', data);
            const { id } = response.data;
            const { name } = response.data;

            alert(`Seu ID de acesso: ${name}`);
            localStorage.setItem('name', name);
            localStorage.setItem('User', id);

            history.push('/profile');
        }catch(err){
            alert('Erro no cadastro, tente novamento.');
        }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro na plataforma Faça seu cadastro na plataforma 
                        Faça seu cadastro na plataforma</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color='#E02041' />
                        Voltar a home
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome do usuario"
                    value={name}
                    onChange={e =>setName(e.target.value)}
                    />
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e =>setEmail(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
