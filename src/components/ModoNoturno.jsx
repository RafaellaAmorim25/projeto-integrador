import { useState } from "react";
import './Dark.css'

function ModoNoturno() {
  const [ModoNoturno, setModoNoturno] = useState(false);


  return (
    <div className={ModoNoturno ? 'dark' : 'light'}> 
      <h1>Título</h1>
      <p>Conteúdo...</p>
      <button onClick={() => setModoNoturno(!ModoNoturno)}>Alternar Modo</button>
    </div>
  );
}
export default ModoNoturno