import React, {useState ,useEffect} from 'react';
/* imagens */
import LogoImg from '../../assets/logo.png';
import Sippa from '../../assets/sippa.png';
import Savi from '../../assets/savi.png';
import Sisac from '../../assets/sisac.png';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2, FiMapPin, FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Profile(){
    const [projects, setProjects] = useState([]);
    const ongId = localStorage.getItem('user');
    const history = useHistory(); 
    useEffect(()=>{
        async function loadProjects(){
            const ongId = localStorage.getItem('ongId');
            const response = await api.get('projects',{
                headers:{ ongId }
            }); 
            setProjects(response.data);
        }
        loadProjects();
    },[]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`projects/${id}`,  {
                headers:{
                    Authorization: ongId,
                }
            });
            setProjects(projects.filter(projetos => projetos.id !== id));
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
                    <img src={LogoImg} alt="Pet-SI"/>
                    <li>
                        <a onClick={handleLogout}   href={'/'} type="button">
                            <FiPower size={18} color="#E02041"/>
                        </a>
                    </li>
                    <li><Link to="/projets/new">Cadastrar projeto</Link></li>
                    <li><Link to="incidents/new">Cadastrar nova informação</Link></li>
                    <li><Link to="/register">Cadastrar Usuario</Link></li>
                    <li><Link to="/list">Projetos</Link></li>
                    <li><Link className="active" to="/profile">Home</Link></li>
                </ul>
            </div>

            <div className="profile-container">

            <div className="content">
                <ul>
                    {projects.map(projetos => (
                        <li key={projetos.id}>
                            <strong>Nome do Projeto:</strong>
                            <p>{projetos.title}</p>
                            <strong>Descrição:</strong>
                            <p>{projetos.description}</p>
                            <header style={{ backgroundImage: `url(${projetos.imagem_url})` }}/>
                            <strong>Organização:</strong>
                            <p>{projetos.organization}</p>
                            <strong>Cadastro feito:</strong>
                            <p>{projetos.user}</p>
                            
                            <button onClick={() => handleDeleteIncident(projetos.id)} type="button">
                                <FiTrash2 size={20} color="#a8a8a3"/>
                            </button>
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
                <Row>
                    <Col>
                        <a href="https://academico.quixada.ufc.br/sippa/">
                            <div className="circulo">
                                <img src={Sippa} alt="SIPPA"/>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://academico.quixada.ufc.br/savi/">
                            <div className="circulo">
                                <img src={Savi}  alt="SAVI"/>
                            </div>
                        </a> 
                    </Col>
                    <Col>
                        <a href="https://academico.quixada.ufc.br/sisac/">
                            <div className="circulo">
                                <img src={Sisac} alt="SISAC"/>
                            </div>
                        </a>
                    </Col>
                </Row>
                </center>
                
        </div>

        <div className="footer">
            Copyright &copy; 2020 Pet-SI
        </div>
        
        </div>
    );
}