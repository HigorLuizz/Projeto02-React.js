import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Mapa from './components/Mapa';
import CadastroFarmacia from './components/CadastroFarmacia';
import CadastroMedicamentos from './components/CadastroMed';
import ListagemMed from './components/ListagemMed';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Mapa/> */}
      <CadastroFarmacia/>
      {/* <CadastroMedicamentos/> */}
      {/* <ListagemMed/> */}
    </div>
  );
}

export default App;
