function Perfil(props) {
return (
  <div className="perfilCliente">
    <h2> {props.nome} </h2>
    <p> {props.renda} </p>
  </div>
)
}
export default Perfil