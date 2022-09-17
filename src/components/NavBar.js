import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="nav-link" to="/mapa"><h2>Clamed</h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to={"/cadastro-farmacia"} className="nav-link active" aria-current="page">Cadastro de Nova Farmácia</Link>
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
                </div>
            </div>
        </nav>
        
    )
}