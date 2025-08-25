import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './PAGES/HomePage'
import CadastroCliente from './PAGES/CadastroCliente'
import ContatoPage from './PAGES/ContatoPage'
import Frutas from './components/Exercicios/Frutas'
 
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Início</Link> | <Link to="/Contato">ContatoPage</Link> | <Link to="/Cadastro">CadastroCliente</Link>
        <Frutas/>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contato" element={<ContatoPage />} />
        <Route path="/Cadastro" element={<CadastroCliente />} />
      </Routes>
    </div>
  );
}






export default App
