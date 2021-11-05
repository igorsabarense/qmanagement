import React, { Component } from 'react'
import Login from './login';
import '../css/home.css'

class HomeCliente extends Component{
    render(){
        return <div className="home">
            <Login nome={"Cliente"} signUp={'/cliente/cadastro'}/>
        </div>
    }
}

export default HomeCliente;