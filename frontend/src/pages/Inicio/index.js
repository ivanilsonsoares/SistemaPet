import React, {useState ,useEffect} from 'react';
/* imagens */
import LogoImg from '../../assets/logo.png';
import Sippa from '../../assets/sippa.png';
import Savi from '../../assets/savi.png';
import Sisac from '../../assets/sisac.png';
import Ufc1 from '../../assets/camp.png';
import slide2 from '../../assets/slide2.png';

import Carousel from 'react-bootstrap/Carousel';
import {FiMapPin} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
/* import */


export default function Profile(){
    const [information, setInformation ] = useState([]);
    useEffect(()=>{
        async function loadInformation(){
            const response = await api.get('information',{}); 
            setInformation(response.data);
        }
        loadInformation();
    },[]);


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
                        src={slide2}
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
                    {information.map(informations => (
                        <li key={informations._id}>
                            <strong>Titulo:</strong>
                            <p>{informations.title}</p>
                            <strong>Descrição:</strong>
                            <p>{informations.description}</p>
                            <header style={{ backgroundImage: `url(${informations.imagem_url})` }}/>
                    </li>
                    ))}
                </ul>
                
            </div>
        </div>

        <div className="nav-bar">
            <h5><FiMapPin size={18} color="#000"/> Links Importantes:</h5>
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