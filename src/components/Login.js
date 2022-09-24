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
        (dadosLogin.senha.length>=8)&&
        (/^.*?[a-z]/i.test(dadosLogin.senha) === true)&&
        (/^(?:.*?\d){1}/.test(dadosLogin.senha) === true)&&
        (dadosLogin.email.includes("@") === true)){
            setLogin("logado")
            navigate("/mapa")
        }else{
            alert('Um email válido e uma senha com:\n  -Mínimo de 8 dígitos\n  -Mínimo 1 letra e 1 número\nSão obrigatórios')
        }  
    }
    return(
        <div className='bodylogin'>
            <form className='formlogin'>
                <div className='row'>
                    <div><h2>Faça seu Login para continuar</h2></div>
                    <div className="mb-3">
                        <label className="form-label d-inline">Email      </label>
                        <input type="email" 
                        className="col-12" 
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
                </div>
                <div className='row'>
                    <div className="mb-3">
                        <label className="form-label">Senha </label>
                        <input type="password" 
                        className="col-12" 
                        id="exampleInputPassword1"
                        placeholder='Digite sua senha aqui. A senha deve conter mais de 8 dígitos'
                        value={dadosLogin.senha}
                        inputmode="numeric"
                        onChange={(e) => {
                            setDadosLogin({
                                ...dadosLogin,
                                senha:e.target.value
                            })
                        }}/>
                    </div>

                </div>
                <button type="submit" 
                className="btn btn-success"
                onClick={LoginValidate}>Entrar</button>
            </form>

        </div>
        
    )
}
