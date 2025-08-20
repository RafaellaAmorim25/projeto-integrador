import { useState } from "react";

function  Formulario() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  return (
    <div>
      nome:<input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" />
      mensagem:<textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Sua mensagem"></textarea>
            <hr />
      <p><strong>Pré-visualização:</strong></p>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Mensagem:</strong> {mensagem}</p> 
      </div>
  ) 
}
export default Formulario