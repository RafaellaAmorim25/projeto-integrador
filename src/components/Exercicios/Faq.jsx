import { useState } from "react";
function Faq() {

  const [Pergunta, setPergunta] = useState('Pergunta');
  const [estaAberto, setestaAberto] = useState(false);
  const [Resposta, setResposta] = useState('Resposta');
  return (
<div>
  <button onClick={() => setestaAberto(!estaAberto)}>Resposta</button>
  <p>{Pergunta}</p>
  <p>{estaAberto &&Resposta}</p>

</div>

  )

}
export default Faq