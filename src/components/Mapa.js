import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function () {
  const [farms, setFarms] = useState(JSON.parse(localStorage.getItem('farmacias')))

  if (farms === null){
    setFarms([{
      razao: "Clamed Farmácias",
      cnpj: "12.074.073/0001-07",
      nome: "Farmácia do Higorrr",
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
  return (
    <>
      <h1>Mapa de Farmácias</h1>
      <MapContainer
        center={[-26.240327, -48.846791]}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: "700px", width: "1350px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {farms.map((farmacia)=> (
            <Marker position={[farmacia.latitude, farmacia.longitude]}>
                <Popup>
                    <h3>Nome: {farmacia.nome}</h3>
                    <p>Razão Social: {farmacia.razao}</p>
                    <p>CNPJ: {farmacia.cnpj}</p>
                    <p>Email: {farmacia.email}</p>
                    <p>Telefone: {farmacia.telefone}</p>
                    <p>Celular: {farmacia.celular}</p>
                    <p>CEP: {farmacia.cep}</p>
                    <p>Rua: {farmacia.logradouro}, número: {farmacia.numero}</p>
                    <p>Bairro: {farmacia.bairro}</p>
                    <p>Cidade: {farmacia.localidade}</p>
                    <p>Estado: {farmacia.uf}</p>
                    <p>Complemento: {farmacia.complemento}</p>
                </Popup>
            </Marker>
        ))}
      </MapContainer>
    </>
  );
}
