import './App.css';
import { LoginProvider } from './components/LoginContext';
import Rotas from './components/Rotas';
import { Modal } from 'bootstrap';

// Modal.setAppElement("#root")

function App() {
  return (

      <LoginProvider>
        <Rotas/>
      </LoginProvider>

  );
}

export default App;
