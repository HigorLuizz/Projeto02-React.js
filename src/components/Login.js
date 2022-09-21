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
            navigate("/cadastro-farmacia")
        }else{
            alert('Um email e uma senha com no mínimo 8 digitos são obrigatório')
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
console.log(/^(?=.*?[a-z])(?=(?:.*?\d){1})[a-z\d]{8,}$/i.test("2as"));
