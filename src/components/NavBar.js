import { Link, useNavigate } from "react-router-dom"
import { useLogin } from './LoginContext';

export default function NavBar(){
    const navigate = useNavigate()
    const { setLogin } = useLogin()
    function Sair(){
        setLogin("naologado")
        alert("Você saiu!")
        navigate("/")
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <Link className="nav-link" to="/mapa"><img className="fotoclamed" src="https://s3.amazonaws.com/gupy5/production/companies/961/career/1368/images/2020-04-29_18-48_logo.jpg" alt="Clamed"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to={"/cadastro-farmacia"} className="nav-link text-white" aria-current="page">Cadastro de Nova Farmácia</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/mapa">Mapa das Farmácias</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/cadastro-medicamento">Cadastro de Novo Medicamento</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/lista-de-medicamentos">Lista de Medicamentos</Link>
                    </li>
                    
                </ul>
                <div className="sair">
                    <button className="btnsair" onClick={Sair}>Sair</button>
                </div>
                </div>
            </div>
        </nav>
        
    )
}