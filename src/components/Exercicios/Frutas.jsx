function Frutas() {
  const frutas = ['Banana', 'Morango', 'Uva'];
  return (
    <ul>
      {frutas.map(fruta =>  <li>{fruta}</li>)}
      </ul> 
  )
};
export default Frutas;