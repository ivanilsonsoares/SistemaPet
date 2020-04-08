import React, {useState ,useEffect} from 'react';
/* imagens */
import LogoImg from '../../assets/logo.png';
import Sippa from '../../assets/sippa.png';
import Savi from '../../assets/savi.png';
import Sisac from '../../assets/sisac.png';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import {Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2, FiMapPin} from 'react-icons/fi';
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
            <Navbar className="bg-color" expand="lg">
            <Navbar.Brand href="/profile">
                <div className="conf">
                    <img src={LogoImg} alt="Pet-SI"></img>    
                </div>  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ><Link to="/profile">Inicio</Link></Nav.Link>
                <Nav.Link ><Link to="/list">Projetos</Link></Nav.Link>
                <DropdownButton title="Cadastros">
                    <Dropdown.Item><Link to="/projets/new">Cadastrar Projetos</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/incidents/new">Cadastrar informações</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/register">Cadastrar Usuario</Link></Dropdown.Item>
                </DropdownButton>
                <Nav.Link >
                    <a onClick={handleLogout}   href={'/'} type="button">
                        <FiPower size={18} color="#E02041"/>
                    </a>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
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