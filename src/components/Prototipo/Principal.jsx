import styled from "styled-components";
import DashBoardHeader from "./dashboard/DashboardHeader";
import DashBoardCards from "./dashboard/DashBoardCards";

const Content = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

function Principal() {
  return (
    <>
      <Content>
        <DashBoardHeader />
        <DashBoardCards />
      </Content>
    </>
  );
}

export default Principal;
