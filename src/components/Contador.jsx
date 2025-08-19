import { useState } from "react";

function Contador() {
  const [contagem, setContagem] = useState(0);

return (
    <div>
      <button onClick={() => setContagem(contagem - 1)}>-</button>
      <span> {contagem} </span>
      <button onClick={() => setContagem(contagem + 1)}>+</button>
    </div>
  );
}
export default Contador