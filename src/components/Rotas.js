import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import CadastroFarmacia from "./CadastroFarmacia"
import Login from "./Login"
import Mapa from "./Mapa"
import NaoEncontrado from "./NaoEncontrado"
import NavBar from "./NavBar"

export default function Rotas(){
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Navigate replace to="/"/>}/>
                <Route path="/cadastro-farmacia" element={<CadastroFarmacia/>}/>
                <Route path="/mapa" element={<Mapa/>}/>
                <Route path="*" element={<NaoEncontrado/>}/>
            </Routes>
        </BrowserRouter>
    )
}