import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLogin } from './LoginContext';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate()
    const { setLogin } = useLogin();
    const [dadosLogin, setDadosLogin] = useState({
        email:'',
        senha:''
    })
    function LoginValidate(e){
        e.preventDefault();
        if((dadosLogin.email.length>0) && 
        (dadosLogin.senha.length>=8)){
            setLogin("logado")
            navigate("/mapa")
        }else{
            alert('Um email e uma senha com no mínimo 8 digitos são obrigatório')
        }  
    }
    return(
        <form className='border border-danger'>
            <div>Faça seu Login para continuar</div>
            <div className="mb-3">
                <label className="form-label-6 d-inline">Email</label>
                <input type="email" 
                className="form-control-6 d-inline" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                placeholder='Digite seu email aqui'
                value={dadosLogin.email}
                onChange={(e) => {
                    setDadosLogin({
                        ...dadosLogin,
                        email:e.target.value
                    })
                }}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Senha</label>
                <input type="password" 
                className="form-control-12" 
                id="exampleInputPassword1"
                placeholder='Digite sua senha aqui. A senha deve conter mais de 8 dígitos'
                value={dadosLogin.senha}
                onChange={(e) => {
                    setDadosLogin({
                        ...dadosLogin,
                        senha:e.target.value
                    })
                }}/>
                {console.log(dadosLogin)}
            </div>
            <button type="submit" 
            className="btn btn-primary"
            onClick={LoginValidate}>Entrar</button>
        </form>
        
    )
}
