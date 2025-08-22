import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUser,
  faHome,
  faFileContract,
  faCalendarAlt,
  faDollarSign,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const NavMenu = styled.nav`
  background-color: #4079b6;
  display: flex;
  align-items: center;

  ul {
    border-top: 1px solid #e99309;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    flex: 1;
    padding: 0.4375rem 0.9375rem;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: #e99309;
    }
  }
`;

function Menu() {
  return (
    <>
      <NavMenu>
        <ul>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faChartLine} /> DashBoard
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faUser} />
              Clientes
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faHome} />
              Imóveis
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faFileContract} />
              Propostas
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faCalendarAlt} />
              Agenda
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faDollarSign} />
              Financeiro
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faCog} />
              Configurações
            </a>
          </li>
        </ul>
      </NavMenu>
    </>
  );
}

export default Menu;
