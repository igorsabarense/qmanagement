import {
    Routes, 
    Router
} from 'react-router-dom'
import Home from './components/home'
import HomeGerencia from './components/homeGerencia'
import HomeCliente from './components/homeCliente'

export default function MainRoutes(){
    return (
        <Routes>
            <Router path="/" element={<Home/>}/>
            <Router path="/gerencia-home" element={<HomeGerencia />} />
            <Router path="/cliente-home" element={<HomeCliente />} />
        </Routes>
    )
}