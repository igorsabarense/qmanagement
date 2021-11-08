import React, { Component } from 'react'
import Login from './login';
import '../css/home.css'

class HomeCliente extends React.Component{
        

    render(){
        return <div className="home">
            <Login nome={"Cliente"} signUp={'/cliente/cadastro'} navigateUrl = {'/cliente/dashboard'}/>
        </div>
    }
}

export default HomeCliente;