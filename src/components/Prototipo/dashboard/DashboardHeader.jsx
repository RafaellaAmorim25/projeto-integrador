import styled from "styled-components";
const DashBoardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    margin: 0px;
    color: #2c3e50;
    font-size: 1.8rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
function DashBoardHeader() {
  return (
    <>
      <DashBoardContent>
        <h2>Dashboard</h2>
        <div>
          <span>Período: </span>
          <select name="" id="periodo-dashboard">
            <option value="Hoje">Hoje</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensal">Mensal</option>
            <option value="Ano">Anual</option>
          </select>
        </div>
      </DashBoardContent>
    </>
  );
}
export default DashBoardHeader;
