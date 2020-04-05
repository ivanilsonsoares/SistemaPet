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
    const [information, setInformation ] = useState([]);
    const id_user = localStorage.getItem('user');
    const Name = localStorage.getItem('Name');
    const history = useHistory(); 
    useEffect(()=>{
        async function loadInformation(){
            const response = await api.get('information',{}); 
            setInformation(response.data);
        }
        loadInformation();
    },[]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`information/${id}`,  {
                headers:{
                    Authorization: id_user,
                }
            });
            setInformation(information.filter(information => information.id !== id));
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
            <header>
                <span>Bem- vindo, {Name}</span>
            </header>
            <h1>Infomações Cadastradas</h1>
            <div className="content">
                <ul>
                    {information.map(informations => (
                        <li key={informations._id}>
                            <strong>Titulo:</strong>
                            <p>{informations.title}</p>
                            <strong>Descrição:</strong>
                            <p>{informations.description}</p>
                            <header style={{ backgroundImage: `url(${informations.imagem_url})` }}/>
                            <strong>Cadastro feito:</strong>
                            <p>{informations.id}</p>

                            <button onClick={() => handleDeleteIncident(informations.id)} type="button">
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
                        href="https://drive.google.com/file/d/1WbpXCU5ChE74SvA5AslS5jSbRjRUamC0/view?usp=sharing">
                        <h2>
                            <FiChevronRight size={18} color="#000"/> 
                            A aplicação da refatoração de software para a solução da complexidade no código do SEven
                        </h2>
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1WbpXCU5ChE74SvA5AslS5jSbRjRUamC0/view?usp=sharing">
                        <h2>
                            <FiChevronRight size={18} color="#000"/> 
                            A aplicação da refatoração de software para a solução da complexidade no código do SEven
                        </h2>
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1WbpXCU5ChE74SvA5AslS5jSbRjRUamC0/view?usp=sharing">
                        <h2>
                            <FiChevronRight size={18} color="#000"/> 
                            A aplicação da refatoração de software para a solução da complexidade no código do SEven
                        </h2>
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1WbpXCU5ChE74SvA5AslS5jSbRjRUamC0/view?usp=sharing">
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