import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faFileContract,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import CardIcon from "./CardIcon";
import CardInfo from "./CardInfo";

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const DashBoardCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
`;

function DashBoardCards() {
  return (
    <>
      <ContainerCard>
        <DashBoardCard>
          <FontAwesomeIcon icon={faUser} size="2x" />
          <CardInfo texto="Clientes Ativos" valor={24} />
        </DashBoardCard>
        <DashBoardCard>
          <FontAwesomeIcon icon={faHome} size="2x" />
          <CardInfo texto="Imóveis Disponíveis" valor={18} />
        </DashBoardCard>
        <DashBoardCard>
          <FontAwesomeIcon icon={faFileContract} size="2x" />
          <CardInfo texto="Propostas Abertas" valor={7} />
        </DashBoardCard>
        <DashBoardCard>
          <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
          <CardInfo texto="Visitas Agendadas" valor={5} />
        </DashBoardCard>
      </ContainerCard>
    </>
  );
}
export default DashBoardCards;
