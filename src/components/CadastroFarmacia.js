import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import ItemFormulario from "./ItemFormulario";

const ACESS_TOKEN_MAP_BOX=`access_token=pk.eyJ1IjoiaGlnb3JsdWl6IiwiYSI6ImNsODFxbjBiaTAyajgzdnBocnhya2h3aWIifQ.orF6DkOQ-OS4knC920LCyg`
export default function CadastroFarmacia() {
  const [farms, setFarms] = useState(JSON.parse(localStorage.getItem('farmacias')))
  if (farms === null){
    setFarms([{
      razao: "Clamed Farmácias",
      cnpj: "12.074.073/0001-07",
      nome: "Farmácia do Higor",
      email: "famaciadohigor@gmail.com",
      telefone: "47 3473-1259",
      celular: "47 999546978",
      cep: "89223-490",
      logradouro: "Rua dos Timbiras",
      numero: "154",
      bairro: "Jardim Sofia",
      localidade: "Joinville",
      uf: "SC",
      complemento: "Casa 01",
      latitude: -26.240327,
      longitude: -48.846791,
    }])
  }
  useEffect(() => {
    if(farms.length>=1){
        localStorage.setItem('farmacias', JSON.stringify(farms))
    }
}, [farms])
  const [farm, setFarm] = useState({
    razao: "",
    cnpj: "",
    nome: "",
    email: "",
    telefone: "",
    celular: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    localidade: "",
    uf: "",
    complemento: "",
    latitude: "",
    longitude: "",
  });
  useEffect(() => {
    if (farm.cep.length === 9) {
      fetch(`https://viacep.com.br/ws/${farm.cep}/json/`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setFarm({
            ...farm,
            cep: data.cep,
            logradouro: data.logradouro,
            localidade: data.localidade,
            uf: data.uf,
            bairro: data.bairro,
          });
        });
    }
  }, [farm.cep]);
  useEffect(() => {
    if(farm.logradouro.length > 1){
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${farm.logradouro}.json?${ACESS_TOKEN_MAP_BOX}`)
        .then((response)=> response.json())
        .then((data)=>{
            setFarm({
                ...farm,
                latitude: data.features[0].center[1],
                longitude: data.features[0].center[0]
              })
        })
    }
  }, [farm.logradouro])
  function Cadastrar() {
    if((farm.nome ==="")||
    (farm.razao==="")||
    (farm.cnpj==="")||
    (farm.email==="")||
    (farm.celular==="")||
    (farm.cep==="")||
    (farm.logradouro==="")||
    (farm.numero==="")||
    (farm.bairro==="")||
    (farm.localidade==="")||
    (farm.uf==="")||
    (farm.longitude==="")||
    (farm.latitude==="")){
      alert("Esses campos devem ser preenchidos obrigatóriamente:\nRazão Social\nNome Fantasia\nCNPJ\nEmail\nCelular\nCep\nLogradouro\nNúmero\nBairro\nCidade\nEstado\nLatitude\nLongitude\n")
    }else{
      const farmComID = { ...farm, id: Math.random() };
      setFarms([...farms, farmComID]);
      alert('Farmácia cadastrada com sucesso!')
    }
  }
  function Limpar() {
    setFarm({
      razao: "",
      cnpj: "",
      nome: "",
      email: "",
      telefone: "",
      celular: "",
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      localidade: "",
      uf: "",
      complemento: "",
      latitude: "",
      longitude: "",
    });
  }
  return (
    <>
      <h1>Cadastro de Nova Farmácia</h1>
      <div></div>
      <div className="row">
        <ItemFormulario
          label={"Razão Social"}
          placeholder="Digite aqui a razão social"
          value={farm.razao}
          name="razao"
          setInfo={setFarm}
          colnumber="col-6"
        />
        <ItemFormulario
          label={"CNPJ"}
          placeholder="Digite aqui o CNPJ"
          value={farm.cnpj}
          name="cnpj"
          setInfo={setFarm}
          colnumber="col-3"
        />
        <ItemFormulario
          label="Nome Fantasia"
          placeholder="Nome fantasia ex: Farmacia Magalhães"
          value={farm.nome}
          name="nome"
          setInfo={setFarm}
          colnumber="col-3"
        />
      </div>
      <div className="row">
        <ItemFormulario
            label="Email"
            placeholder="Digite aqui o Email"
            value={farm.email}
            name='email'
            setInfo={setFarm}
            colnumber='col-6'
            />
        <ItemFormulario
          label="Telefone"
          placeholder="Digite aqui o telefone"
          value={farm.telefone}
          name='telefone'
          setInfo={setFarm}
          colnumber='col-3'
        />
        <ItemFormulario
          label="Celular"
          placeholder="Digite aqui o celular"
          value={farm.celular}
          name='celular'
          setInfo={setFarm}
          colnumber='col-3'
        />
      </div>
      <div>
        <div className="row">
            <ItemFormulario
            label="CEP"
            placeholder="CEP com hífen. Ex: 01001-000"
            value={farm.cep}
            name='cep'
            setInfo={setFarm}
            colnumber='col-3'
            />
            <ItemFormulario
            label="Logradouro"
            placeholder="Digite aqui o seu endereço"
            value={farm.logradouro}
            name='logradouro'
            setInfo={setFarm}
            colnumber='col-6'
            />
            <ItemFormulario
            label="Número"
            placeholder="Digite aqui o numero da rua"
            value={farm.numero}
            name='numero'
            setInfo={setFarm}
            colnumber='col-3'
            />
        </div>
        <div className="row">
            <ItemFormulario
            label="Bairro"
            placeholder="Digite aqui seu bairro"
            value={farm.bairro}
            name='bairro'
            setInfo={setFarm}
            colnumber='col-5'
            />
            <ItemFormulario
            label="Cidade"
            placeholder="Digite aqui seu bairro"
            value={farm.localidade}
            name='localidade'
            setInfo={setFarm}
            colnumber='col-5'
            />
            <ItemFormulario
            label="Estado/UF"
            placeholder="Digite o estado.Ex: SC"
            value={farm.uf}
            name='uf'
            setInfo={setFarm}
            colnumber='col-2'
            />
        </div>
        <div className="row">
            <ItemFormulario
            label="Complemento"
            placeholder="Digite o complemento. Ex: Apartamento 101"
            value={farm.complemento}
            name='complemento'
            setInfo={setFarm}
            colnumber='col-6'
            />
            <ItemFormulario
            label="Latitude"
            value={farm.latitude}
            name='latitude'
            setInfo={setFarm}
            colnumber='col-3'
            />
            <ItemFormulario
            label="Longitude"
            value={farm.longitude}
            name='longitude'
            setInfo={setFarm}
            colnumber='col-3'
            />
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary" onClick={Limpar}>
              Limpar Formulário
            </button>
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={Cadastrar}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
