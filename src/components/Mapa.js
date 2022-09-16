import { useFarms } from "../contexts/FarmaciasContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function () {
  const { farms } = useFarms();
  console.log("mapa",farms)
  return (
    <>
      <h1>Mapa de Farmácias</h1>
      <MapContainer
        center={[-19.9266216, -43.9405144]}
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
