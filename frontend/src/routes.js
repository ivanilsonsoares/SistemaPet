import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* Paginas */
import Inicio from './pages/Inicio';
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncidents';
import NewProjets from './pages/NewProjets';
import ProjetsList from './pages/ProjetosAdm'

import Equipe from './pages/Equipe';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/login" component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/equipe" component={Equipe}/>
                <Route path="/projetos" component={Projetos}/>
                <Route path="/list" component={ProjetsList}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/incidents/new" component={NewIncidents}/>
                <Route path="/projets/new"  component={NewProjets}/>
                
                
            </Switch>
        </BrowserRouter>
    );
}