import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logo from '../../assets/logo.png';
import Api from '../../services/api'

export default function NewIncidents(){
    const [title, setTitle] = useState('');
    const [imagem, setImagem] = useState(null);
    const [description, setDescription] = useState('');
    const [organization, setOrganization] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    async function handleNewIncidents(e){
        e.preventDefault();

        const data = new FormData();
        
        data.append('title',title);
        data.append('imagem',imagem);
        data.append('description',description);
        data.append('organization',organization);

        try{
            await Api.post('projects', data,{
                headers:{
                    Authorization: ongId,
                }
            });

            history.push('/list');
        }catch(err){
            alert('Erro no cadastro, tente novamento.');
        }

    }


    return(
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                    <h1>Cadastrar um novo projeto</h1>
                    <p>Faça o cadastro de projetos na platafroma, as informações ficaram disponiveis na mesma.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color='#E02041' />
                        voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncidents}>
                    <input 
                    placeholder="Nomde do projeto"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                    placeholder="Organizadores"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                    />
                    <label className="imagem">
                        <input type="file"
                        onChange={e => setImagem(e.target.files[0])}
                        />  
                    </label>
                    *A imagem não deve conter espaço no seu nome
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}