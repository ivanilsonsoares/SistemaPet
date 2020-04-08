import React from 'react';
/* imagens */
import LogoImg from '../../assets/logo.png';
import Sippa from '../../assets/sippa.png';
import Savi from '../../assets/savi.png';
import Sisac from '../../assets/sisac.png';
import {FiMapPin} from 'react-icons/fi';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import */
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Profile(){
    
    return(
        <div>
            <div className="menu">
            <Navbar className="bg-color" expand="lg">
            <Navbar.Brand href="/">
                <div className="conf">
                    <img src={LogoImg} alt="Pet-SI"></img>    
                </div>  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ><Link to="/">Inicio</Link></Nav.Link>
                <Nav.Link ><Link to="/projetos">Projetos</Link></Nav.Link>
                <Nav.Link ><Link to="/sobre">Sobre</Link></Nav.Link>
                <Nav.Link ><Link to="/equipe">Equipe</Link></Nav.Link>
                <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
            <div className="profile-container">
                <div className="sobre">
                    <h1>O que é o PET?</h1>
                    <p>
                    O Programa de Educação Tutorial (PET) é um programa institucional oferecido pelo MEC,
                    onde estudantes de graduação, orientados por um docente, buscam aprimorar os cursos
                    de graduação trabalhando na tríade de ensino, pesquisa e extensão. Os grupos PET tem
                    como alguns de seus objetivos: promover uma formação multidisciplinar, interação entre
                    bolsistas e corpos docente e discente, promover o trabalho e ganho de conhecimento coletivo,
                    além de desenvolver características como proatividade, postura e oratória.
                    </p>
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

        <div class="footer">
            Copyright &copy; 2020 Pet-SI
        </div>
        
        </div>
    );
}