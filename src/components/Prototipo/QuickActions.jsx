import styled from "styled-components";
import { Button } from "../components/common/Button";

const ButtonQuick = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 15px;
  background-color: #0a4178;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 0px;
  cursor: pointer;
  font-size: 0.9rem;
`;

function QuickActions() {
  return (
    <>
      <h3>Ações Rápidas</h3>
      <ButtonQuick>Novo Cliente</ButtonQuick>
      <ButtonQuick>Novo Imóvel</ButtonQuick>
      <ButtonQuick>Agendar Visita</ButtonQuick>
    </>
  );
}

export default QuickActions;
