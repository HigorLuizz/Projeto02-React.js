import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/mapa">Clamed Farmácias</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to={"/cadastro-farmacia"} class="nav-link active" aria-current="page">Cadastro de Nova Farmácia</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/mapa">Mapa das Farmácias</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
    )
}