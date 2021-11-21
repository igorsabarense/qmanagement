import React, { Component } from 'react'
import Login from './login';
import '../css/home.css'
import { logout } from '../firebase';

class HomeCliente extends React.Component{
    
    componentDidMount(){
        this.handleLogout();
    }

    async handleLogout(){
        try{
            await logout();
        }catch{
            console.log('error logout')
        }
    }

    render(){
        

        return <div className="home">
            <Login nome={"Cliente"} signUp={'/cliente/cadastro'} navigateUrl = {'/cliente/dashboard'}/>
        </div>
    }
}

export default HomeCliente;