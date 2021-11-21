import React, { Component } from 'react'
import Login from './login'
import '../css/home.css'
import {logout} from '../firebase'

class HomeGerencia extends Component{
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
            <Login nome={"Gerência"} signUp={'/gerencia/cadastro'} navigateUrl = {'/gerencia/dashboard'}/>
        </div>
    }
}

export default HomeGerencia