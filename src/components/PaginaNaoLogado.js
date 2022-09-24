import { useNavigate } from 'react-router-dom';

export default function NaoLogado(){

    const navigate = useNavigate()

    function PaginaLogin(){
        navigate("/")
    }
    return(
        <div className='naologado'>
            <h1>Parece que você não está logado...</h1>
            <img className='fotoemoji' src="https://images.emojiterra.com/google/android-11/512px/1f622.png" alt="Carinha de choro"></img>
            <p>Clique no botão abaixo para fazer login e poder acessar as páginas do site.</p>
            <button className='bntfazerlogin' onClick={PaginaLogin}>Fazer Login</button>
        </div>
    )
}