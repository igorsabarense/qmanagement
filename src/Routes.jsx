import {
   Router, Routes
} from 'react-router-dom'
import Home from './components/home'
import HomeGerencia from './components/homeGerencia'
import HomeCliente from './components/homeCliente'
import Cadastro from './components/cadastro'
import ClienteDashboard from './components/clienteDashboard'
import GerenteDashboard from './components/gerenteDashboard'

export default function MainRoutes(){
    return (

        <Routes>
            <Router path="/" element={<Home/>}/>
            
            {/* GERENCIA */}
            <Router path="/gerencia" element={<HomeGerencia />} />
            <Router path="/gerencia/cadastro" element={<Cadastro nome={'Cadastro de Gerente'} />} />
            <Router path="/gerencia/dashboard" element={<GerenteDashboard/>} />
            {/* CLIENTE */}
            <Router path="/cliente" element={<HomeCliente />} />
            <Router path="/cliente/cadastro" element={<Cadastro nome={'Cadastro de Cliente'}/>} />
            <Router path="/cliente/dashboard" element={<ClienteDashboard/>} />
            
        </Routes>
    
    )
}