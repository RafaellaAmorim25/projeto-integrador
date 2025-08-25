import styled from "styled-components";
import UserProfile from "./UserProfile";
import QuickStats from "./QuickStats";
import QuickActions from "./QuickActions";

const ContainerAside = styled.aside`
  background-color: #f8f8f8;
  border-right: 1px solid #ddd;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Sidebar() {
  return (
    <>
      <ContainerAside>
        <UserProfile />
        <QuickStats />
        <QuickActions />
      </ContainerAside>
    </>
  );
}

export default Sidebar;
