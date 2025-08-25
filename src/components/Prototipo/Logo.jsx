import styled from "styled-components";
import icone01 from "../assets/Logotipo/icone.png";

const NavMenu = styled.section`
  display: flex;
  text-align: start;
  align-items: center;

  h1 {
    color: #e99309;
    font-size: 1.5rem;
  }

  p {
    color: white;
  }
`;

function Menu() {
  return (
    <NavMenu>
      <div>
        <img src={icone01} alt="ícone do site" width={"70px"} />
      </div>
      <div>
        <h1>Fechou</h1>
        <p>Tudo o que um corretor precisa, em um só lugar.</p>
      </div>
    </NavMenu>
  );
}

export default Menu;
