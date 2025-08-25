import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

const HeaderEstilizado = styled.header`
  background-color: #180462;
  border-bottom: 2px solid #e99309;
`;

function Header() {
  return (
    <>
      <HeaderEstilizado>
        <Logo />
        <Menu />
      </HeaderEstilizado>
    </>
  );
}

export default Header;
