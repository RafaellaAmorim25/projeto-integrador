import { Routes, Route, Link } from 'react-router-dom';
function HomePage() { return <h1>Página Inicial</h1>; }
function ContatoPage() { return <h1>Sobre Nós</h1>; }
 
function App() {
  return (
<<<<<<< HEAD
    <div>
      <nav>
        <Link to="/">Início</Link> | <Link to="/Contato">ContatoPage</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contato" element={<ContatoPage />} />
      </Routes>
    </div>
  );
}






export default App
