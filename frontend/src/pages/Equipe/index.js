import React from 'react';
/* imagens */
import LogoImg from '../../assets/logo.png';
import Sippa from '../../assets/sippa.png';
import Savi from '../../assets/savi.png';
import Sisac from '../../assets/sisac.png';
import Gpa from '../../assets/gpa.jpg';
import Contest from '../../assets/contest.png';
import {FiMapPin} from 'react-icons/fi';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* Imagens bolsistas*/
import Edval from '../../assets/Equipe/edval.jpg';
import Ronier from '../../assets/Equipe/ronier.jpg';
import Camilo from '../../assets/Equipe/camilo.jpg';
import Ivan from '../../assets/Equipe/ivan.jpg';
import Vitinho from '../../assets/Equipe/victor.jpg';
import Padre from '../../assets/Equipe/padre.jpg';
import Luan from '../../assets/Equipe/luan.jpg';
import Evenilson from '../../assets/Equipe/even.jpg';
import Ana from '../../assets/Equipe/kely.jpg';
import Junior from '../../assets/Equipe/junior.jpg';
import Jean from '../../assets/Equipe/jean.jpg';
import Robson from '../../assets/Equipe/robson.jpg';
import Wladmir from '../../assets/Equipe/edval.jpg';


/* import */
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Profile(){

    return(
        <div>
            <div className="menu">
                <ul> 
                    <img src={LogoImg} alt="Pet-SI"/>
                    <li><Link to="/incidents/new">Login</Link></li>
                    <li><Link to="/sobre">Sobre o programa</Link></li>
                    <li><Link to="/equipe">Equipe</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link className="active" to="/">Home</Link></li>
                </ul>
            </div>
            <div className="profile-container">
                <h1>Tutor</h1>
                <Container>
                    {/* Primeiro */}
                    <Row>
                        <Col></Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Wladmir} />
                            <Card.Body>
                                <Card.Title>Wladmir Tavares</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                    <h1 className="mover">
                        Bolsistas
                    </h1>
                    {/* Segundo */}
                    <div className="segundo">
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Edval} />
                                <Card.Body>
                                    <Card.Title>Edval Júnior</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Ronier} />
                            <Card.Body>
                                <Card.Title>Ronier Lima</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Ana} />
                                <Card.Body>
                                    <Card.Title>Ana Kely</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    </div>

                    {/* Terceiro */}
                    <div className="segundo">
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Ivan} />
                                <Card.Body>
                                    <Card.Title>Ivanilson Soares</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Camilo} />
                            <Card.Body>
                                <Card.Title>Camilo Lima</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Evenilson} />
                                <Card.Body>
                                    <Card.Title>Evenilson Liandro</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    </div>
                    {/* Quarto */}
                    <div className="segundo">
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Junior} />
                                <Card.Body>
                                    <Card.Title>Júnior Costa</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Luan} />
                            <Card.Body>
                                <Card.Title>Luanderson Evangelista</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Robson} />
                                <Card.Body>
                                    <Card.Title>Robson Silva</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* Quarto */}
                    <div className="segundo">
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Padre} />
                                <Card.Body>
                                    <Card.Title>Vitor Pinheiro</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Vitinho} />
                            <Card.Body>
                                <Card.Title>Victor Sousa</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Jean} />
                                <Card.Body>
                                    <Card.Title>Jean Pantoja</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    </div>
                    </div>
                </Container>
                
            <div className="content">
                
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