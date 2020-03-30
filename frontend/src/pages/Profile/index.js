import React, {useState ,useEffect} from 'react';
/* imagens */
import LogoImg from '../../assets/logo.png';
import Sippa from '../../assets/sippa.png';
import Savi from '../../assets/savi.png';
import Sisac from '../../assets/sisac.png';
import Gpa from '../../assets/gpa.jpg';
import Contest from '../../assets/contest.png';

import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2, FiMapPin} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Profile(){
    const [incidents, setIncidents ] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();
    useEffect(()=>{
        api.get('profile', {
            headers:{
                Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data);
        })
    },[ongId])

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,  {
                headers:{
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(err){
            alert("Erro, tente novamente.");
        }
    }

    async function handleLogout(){
        localStorage.clear();

        history.push('/');

    }
    return(
        <div>
            <div className="menu">
                <ul> 
                    <img src={LogoImg} alt="Be The Hero"/>
                    <li>
                        <a onClick={handleLogout} type="button">
                            <FiPower size={18} color="#E02041"/>
                        </a>
                    </li>
                    <li><Link to="incidents/new">Cadastrar nova informação</Link></li>
                    <li><Link to="/register">Cadastrar Usuario</Link></li>
                    <li><a href="#about">Sobre o programa</a></li>
                    <li><a href="#news">Equipe</a></li>
                    <li><a href="#contact">Projetos</a></li>
                    <li><a class="active" href="#home">Home</a></li>
                </ul>
            </div>
            <div className="profile-container">
            <header>
                <span>Bem- vindo, {ongName}</span>
            </header>
            <h1>Infomações Cadastradas</h1>
            <div className="content">
                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Caso:</strong>
                            <p>{incident.title}</p>
                            <strong>Descriçaão:</strong>
                            <p>{incident.description}</p>

                            <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR',{style: 'currency' , currency:'BRL'}).format(incident.value)}</p>

                            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                                <FiTrash2 size={20} color="#a8a8a3"/>
                            </button>
                    </li>
                    ))}
                </ul>
                
                <div className="not">
                    <h1>Artigos</h1>
                    <a href="#"><h2>sasa</h2></a>
                    <a href="#"><h2>sasa</h2></a>
                    <a href="#"><h2>sasa</h2></a>
                    <a href="#"><h2>sasa</h2></a>
                    <a href="#"><h2>sasa</h2></a>
                    <a href="#"><h2>sasa</h2></a>
                    <a href="#"><h2>sasa</h2></a>
                    <a href="#"><h2>sasa</h2></a>
                    <a href="#"><h2>sasa</h2></a>
                    
                </div>
            </div>
            
        </div>

        <div className="nav-bar">
            <h1><FiMapPin size={18} color="#000"/> Links Importantes:</h1>
            <center>
            <table>
            <tr>
                <td>
                    <a href="https://academico.quixada.ufc.br/sippa/">
                        <div className="circulo">
                            <img src={Sippa} alt="SIPPA"/>
                        </div>
                    </a>
                </td>
                <td>
                    <a href="https://academico.quixada.ufc.br/savi/">
                        <div className="circulo">
                            <img src={Savi}  alt="SAVI"/>
                        </div>
                    </a>
                </td>
                <td> 
                    <a href="https://academico.quixada.ufc.br/sisac/">
                        <div className="circulo">
                            <img src={Sisac} alt="SISAC"/>
                        </div>
                    </a>
                </td>
                <td>
                    <a href="https://sistemas.quixada.ufc.br/gpa-pesquisa">
                        <div className="circulo-Gpa">
                            <img  src={Gpa} alt="GPA"/>
                        </div>
                    </a>
                </td>
                <td> 
                    <a href="https://contest.quixada.ufc.br/login">
                        <div className="circulo-contest">
                            <img  src={Contest} alt="CONTEST"/>
                        </div>
                    </a>
                </td>
            </tr>
        </table>
            </center>
        </div>

        <div class="footer">
            Copyright &copy; 2020 Pet-SI
        </div>
        
        </div>
        
        
    );
}