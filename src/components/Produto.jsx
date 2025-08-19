function Produto({nome, preco, emEstoque}) {
  return(
        <div>
          <h3>{nome}</h3>
          <p>Preco {preco}</p>
          <p>Status: {emEstoque ?"Disponivel" : "Indisponivel"}</p>
        </div>
  )
}
export default Produto;