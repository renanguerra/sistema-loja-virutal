import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/home/index'
import Login from '../pages/login/index'
import Cadastro from '../pages/cadastro/index'
import Pesquisa from '../pages/pesquisa/index'
import Detalhes from '../pages/detalhes/index'
import Loja from '../pages/marketing/index'
import CRUD from '../pages/crud/index'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/cadastro' component={Cadastro}/>
            <Route exact path='/pesquisa/:name' component={Pesquisa}/>
            <Route exact path='/detalhes/:id' component={Detalhes}/>
            <Route exact path='/estabelecimento/:id' component={Loja}/>
            <Route exact path='/crud' component={CRUD}/>
            <Route exact path='*' component={() => <h1>Essa pagina não existe</h1>}/>
            </Switch>
    </BrowserRouter>
)

export default Routes;