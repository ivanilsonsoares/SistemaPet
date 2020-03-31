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
/* import */
import { Link } from 'react-router-dom';

export default function Profile(){
    
    return(
        <div>
            <div className="menu">
                <ul> 
                    <img src={LogoImg} alt="Pet-SI"/>
                    <li><Link to="/sobre">Sobre o programa</Link></li>
                    <li><Link to="/equipe">Equipe</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link className="active" to="/">Home</Link></li>
                </ul>
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