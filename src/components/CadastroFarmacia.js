import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import { useFarms } from '../contexts/FármáciasContext';
export default function CadastroFarmacia(){
    // const {farms, setFarms} = useFarms()
    const [farm, setFarm] = useState({
        razao:'',
        cnpj:'',
        nome:'',
        email:'',
        telefone:'',
        celular:'',
        cep:'',
        logradouro:'',
        numero:'',
        bairro:'',
        cidade:'',
        estado:'',
        complemento:'',
        latitude:'',
        longitude:''
    })
    const [cepDados, setCepDados] = useState({
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
      });
      useEffect(() => {
        if (cepDados.cep.length === 9) {
            fetch(`https://viacep.com.br/ws/${cepDados.cep}/json/`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setCepDados(data);
            });
        }
      }, [cepDados.cep]);
    return(
        <>
            <h1>Cadastro de Nova Farmácia</h1>
            <div>

            </div>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Razão Social</label>
                        <input type="text" className="form-control" placeholder="Digite aqui a razão social"
                        onChange={(e) => {
                            setFarm({
                                ...farm,
                                razao:e.target.value
                            })
                        }}/>
                    </div>
                    <div className="col">
                        <label classname="form-label">CNPJ</label>
                        <input type="text" className="form-control" placeholder="Digite aqui o CNPJ"
                        onChange={(e) => {
                            setFarm({
                                ...farm,
                                cnpj:e.target.value
                            })
                        }}/>
                    </div>
                    <div className="col">
                        <label classname="form-label">Nome Fantasia</label>
                        <input type="text" className="form-control" placeholder="Nome fantasia ex: Farmacia Magalhães"
                        onChange={(e) => {
                            setFarm({
                                ...farm,
                                nome:e.target.value
                            })
                        }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label classname="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="Digite aqui a email"
                        onChange={(e) => {
                            setFarm({
                                ...farm,
                                email:e.target.value
                            })
                        }}/>
                    </div>
                    <div className="col-3">
                        <label classname="form-label">Telefone</label>
                        <input type="text" className="form-control" placeholder="Digite aqui o telefone"
                        onChange={(e) => {
                            setFarm({
                                ...farm,
                                telefone:e.target.value
                            })
                        }}/>
                    </div>
                    <div className="col-3">
                        <label classname="form-label">Celular</label>
                        <input type="text" className="form-control" placeholder="Digite aqui o celular"
                        onChange={(e) => {
                            setFarm({
                                ...farm,
                                celular:e.target.value
                            })
                        }}/>
                    </div>
            </div>
            <div>
                <div className="row">
                    <div className="col-3">
                        <label classname="form-label">CEP</label>
                        <input type="text" className="form-control" placeholder="CEP com hífen. Ex: 01001-000"
                        value={cepDados.cep}
                        onChange={(e) => setCepDados({ ...cepDados, cep: e.target.value })}
                        />
                    </div>
                    <div className="col-6">
                        <label classname="form-label">Logradouro</label>
                        <input type="text" className="form-control" placeholder="Digite aqui o seu endereço"
                        value={cepDados.logradouro}
                        onChange={(e) => setCepDados({ ...cepDados, logradouro: e.target.value })}/>
                    </div>
                    <div className="col-3">
                        <label classname="form-label">Número</label>
                        <input type="text" className="form-control" placeholder="Digite aqui o numero da rua" />
                    </div> 
                </div>
                <div className="row">
                    <div className="col-5">
                        <label classname="form-label">Bairro</label>
                        <input type="text" className="form-control" placeholder="Digite aqui seu bairro"
                        value={cepDados.bairro}
                        onChange={(e) => setCepDados({ ...cepDados, bairro: e.target.value })}/>
                    </div>
                    <div className="col-5">
                        <label classname="form-label">Cidade</label>
                        <input type="text" className="form-control" placeholder="Digite aqui o sua cidade"
                        value={cepDados.localidade}
                        onChange={(e) => setCepDados({ ...cepDados, localidade: e.target.value })}/>
                    </div>
                    <div className="col-2">
                        <label classname="form-label">Estado</label>
                        <input type="text" className="form-control" placeholder="Digite o estado.Ex: SC"
                        value={cepDados.uf}
                        onChange={(e) => setCepDados({ ...cepDados, uf: e.target.value })}/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-6">
                        <label classname="form-label">Complemento</label>
                        <input type="text" className="form-control" placeholder="Digite o complemento. Ex: Apartamento 101"/>
                    </div>
                    <div className="col-3">
                        <label classname="form-label">Latitude</label>
                        <input type="text" className="form-control" placeholder="Digite aqui a latitude"/>
                    </div>
                    <div className="col-3">
                        <label classname="form-label">Longitude</label>
                        <input type="text" className="form-control" placeholder="Digite aqui a longitude" />
                    </div> 
                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit" 
                        className="btn btn-primary">Cadastrar</button>
                    </div>
                </div>
            </div>
            {console.log(cepDados)}
            {console.log(farm)}
        </>
    )
}