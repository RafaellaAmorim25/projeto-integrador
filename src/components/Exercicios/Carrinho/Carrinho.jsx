import { useState } from "react";
function Carrinho() {
const [Itens, setItens] = useState([]);
 return (
  <>
   <button className="LoginButton" onClick={() => setItens(Itens + {id: Date.now(), nome: 'Produto Novo'})}>Adcionar Item</button>
  <p> procurando por :{Itens}</p>
  </>
 )

}
export default Carrinho