import { useState } from "react";
function FiltroProdutos() {
const [termoBusca, setTermoBusca] = useState('');
return (
  <div>
   <label> Procurat Produto:</label>
   termoBusca:<input type="text"
   value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
        placeholder="Ex: Camiseta"
   />
      <p>A procurar por: <strong>{termoBusca}</strong></p>
       <p><strong>Pré-visualização:</strong></p>
     
   

   
  </div>
)
}
export default FiltroProdutos