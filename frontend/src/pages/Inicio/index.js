import React, {useState ,useEffect} from 'react';
/* imagens */
import LogoImg from '../../assets/logo.png';
import Sippa from '../../assets/sippa.png';
import Savi from '../../assets/savi.png';
import Sisac from '../../assets/sisac.png';
import Gpa from '../../assets/gpa.jpg';
import Ufc1 from '../../assets/camp.png';

import Contest from '../../assets/contest.png';

import Carousel from 'react-bootstrap/Carousel';
import {FiMapPin, FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
/* import */


export default function Profile(){
    const [incidents, setIncidents ] = useState([]);
    const ongId = localStorage.getItem('ongId');
    useEffect(()=>{
        api.get('profile', {
            headers:{
                Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data);
        })
    },[ongId]);

    

    return(
        <div>
            <div className="menu">
                <ul> 
                    <img src={LogoImg} alt="Pet-SI"/>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/sobre">Sobre o programa</Link></li>
                    <li><Link to="/equipe">Equipe</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link className="active" to="/">Home</Link></li>
                </ul>
            </div>
             {/* Carrosel */}
                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100 lt"
                        src={Ufc1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Ufc1}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>  
            <div className="profile-container">

            <div className="content">
                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Titulo:</strong>
                            <p>{incident.title}</p>
                            <strong>Descrição:</strong>
                            <p>{incident.description}</p>
                    </li>
                    ))}
                </ul>
                
                <div className="not">
                    <h1>Artigos</h1>
                    <a 
                        href="https://drive.google.com/file/d/1WbpXCU5ChE74SvA5AslS5jSbRjRUamC0/view?usp=sharing">
                        <h2>
                            <FiChevronRight size={18} color="#000"/> 
                            A aplicação da refatoração de software para a solução da complexidade no código do SEven
                        </h2>
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1BqswjUeY6i_MuOLXojJOa4TSzZMlBXvF/view?usp=sharing">
                        <h2>
                            <FiChevronRight size={18} color="#000"/> 
                            Um Estudo Sobre Diferentes Abordagens para Resolução do Problema Red-Blue Dominating Set
                        </h2>
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1X6u_KP-ahvcMBmKT34LpLJynIgXrE-yp/view?usp=sharing">
                        <h2>
                            <FiChevronRight size={18} color="#000"/> 
                            Proteção de Redes na Gestão da Segurança da Informação
                        </h2>
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1SjJEwsVX5q6RXVX_gLX9TEXS39lfyKaa/view?usp=sharing">
                        <h2>
                            <FiChevronRight size={18} color="#000"/> 
                            Impacto da tecnologia na perda de foco na hora de estudar
                        </h2>
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/14HQTVmkP_e5Ki5OBbPjYz-0kf-q0tgJJ/view?usp=sharing">
                        <h2>
                            <FiChevronRight size={18} color="#000"/> 
                            A aplicação da refatoração de software para a solução da complexidade no código do SEven

                        </h2>
                    </a>  
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