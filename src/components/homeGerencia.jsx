import React, { Component } from 'react'
import Login from './login'
import '../css/home.css'

class HomeGerencia extends Component{
    render(){
        return <div className="home">
            <Login nome={"Gerência"} signUp={'/gerencia/cadastro'}/>
        </div>
    }
}

export default HomeGerencia