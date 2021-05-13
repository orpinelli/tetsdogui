import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import {Container, Menu, PagBody} from './AppStyled';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRoute from "./components/PrivateRoute";
import Menuitem from "./components/Menuitem";
import Cart from './components/Cart';



export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <Menuitem icon="./assets/store.png" link="/" />
                    <Menuitem icon="./assets/order.png" link="/orders" />
                    <Menuitem icon="./assets/profile.png" link="/profile" />
                </Menu>
                <PagBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>

                        <PrivateRoute exact path= "/orders">
                            <div> Tela de Pedidos</div>
                        </PrivateRoute>

                        <PrivateRoute exact path= "/profile">
                            <div> Tela de Perfil</div>
                        </PrivateRoute>
                        
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PagBody>         
                <Cart/>
                   
            </Container>
                <h1>Oi, {name}</h1>

          
        </BrowserRouter>
    );
}