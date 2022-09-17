import './App.css';
import { FarmProvider } from './contexts/FarmaciasContext';
import { LoginProvider } from './components/LoginContext';
import Rotas from './components/Rotas';
import { Modal } from 'bootstrap';

// Modal.setAppElement("#root")

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
