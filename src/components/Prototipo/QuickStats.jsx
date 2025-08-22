import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faBuilding,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  box-sizing: border-box;
  
  h3 {
    margin-top: 0px;
    color: #0a4178;
    margin-bottom: 18px;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 0.95rem;
  }
  span {
    margin-right: 5px;
    color: #e99309;
  }
`;

function QuickStats() {
  return (
    <>
      <Container>
        <h3>Resumo</h3>
        <ul>
          <li>
            <span>24</span> Clientes
          </li>
          <li>
            <span>42</span> Imóveis
          </li>
          <li>
            <span>8</span> Negócios
          </li>
        </ul>
      </Container>
    </>
  );
}

export default QuickStats;
