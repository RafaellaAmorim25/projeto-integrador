import { Routes, Route, Link } from 'react-router-dom';

import Alerta from './Exercicios/Alerta/Alerta'
import Contador from './Exercicios/Contador/Contador'
import Carrinho from './Exercicios/Carrinho/Carrinho'

import Login from './Exercicios/LoginForm'

function PaginaIndex() {
  return (
    <div>
      <nav>
        <Link to="/Alerta">Alerta</Link> | 
        <Link to="/Contador">Contador</Link> |
        <Link to="/Carrinho">Carrinho</Link> | 
        <Link to="/Login">Login de teste</Link> | 
      </nav>
      <hr />
      <Routes>
        <Route path="/Alerta" element={<Alerta />} />
        <Route path="/Contador" element={<Contador />} />
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default PaginaIndex;
