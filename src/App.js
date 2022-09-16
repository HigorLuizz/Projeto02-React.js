import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Mapa from './components/Mapa';
import CadastroFarmacia from './components/CadastroFarmacia';
import CadastroMedicamentos from './components/CadastroMed';
import ListagemMed from './components/ListagemMed';
import { FarmProvider } from './contexts/FarmaciasContext';
import NavBar from './components/NavBar';
import { LoginProvider } from './components/LoginContext';
import Rotas from './components/Rotas';

function App() {
  return (
    <FarmProvider>
      <LoginProvider>
        <Rotas/>
      </LoginProvider>
    </FarmProvider>
  );
}

export default App;
