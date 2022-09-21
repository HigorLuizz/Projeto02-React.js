import { BrowserRouter, Routes, Outlet, Route, Navigate} from "react-router-dom"
import CadastroFarmacia from "./CadastroFarmacia"
import CadastroMedicamentos from "./CadastroMed"
import ListagemMed from "./ListagemMed"
import Login from "./Login"
import Mapa from "./Mapa"
import NaoEncontrado from "./NaoEncontrado"
import NavBar from "./NavBar"
import { useLogin } from './LoginContext';
import NaoLogado from "./PaginaNaoLogado"

export default function Rotas(){
    function RotaPrivada(){
        const { login } = useLogin()
        return login === "logado" ? <Outlet/> : <Navigate to="/nao-logado" replace/>
    }
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/nao-logado" element={<NaoLogado/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Navigate replace to="/"/>}/>
                <Route path="*" element={<NaoEncontrado/>}/>
                <Route element={<RotaPrivada/>}>
                    <Route path="/cadastro-farmacia" element={<CadastroFarmacia/>}/>
                    <Route path="/mapa" element={<Mapa/>}/>
                    <Route path="/cadastro-medicamento" element={<CadastroMedicamentos/>}/>
                    <Route path='/lista-de-medicamentos' element={<ListagemMed/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}