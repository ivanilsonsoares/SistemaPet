import React, {useState , useMemo} from 'react';
import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logo from '../../assets/logo.png';
import Api from '../../services/api'

export default function NewIncidents(){
    const [title, setTitle] = useState('');
    const [imagem, setImagem] = useState(null);
    const [description, setDescription] = useState('');
    
    const history = useHistory();
    const preview = useMemo(()=>{
        return imagem ? URL.createObjectURL(imagem): null;
    }, [imagem])

    async function handleNewIncidents(e){
        e.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');
        data.append('title',title);
        data.append('imagem',imagem);
        data.append('description',description);
        try{
            await Api.post('information', data,{
                headers:{
                    Authorization: {user_id},
                }
            });

            history.push('/profile');
        }catch(err){
            alert('Erro no cadastro, tente novamento.');
        }

    }


    return(
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                    <h1>Cadastro de noticia</h1>
                    <p>Faça o cadastro da notica na platafroma, as informações ficaram disponiveis na mesma.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color='#E02041' />
                        voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncidents}>
                    <input 
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <label className="imagem" style={{backgroundImage: `url(${preview})`}}>
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