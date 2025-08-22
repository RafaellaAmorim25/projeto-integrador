import Logo from "../../assets/Logotipo/logoPrincipal.png";
import styled from "styled-components";
import Input from "../common/Input";
import { Button } from "../common/Button";
import imagemFundo from "../../assets/Fundo/ImagemDeFundo.jpg";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  background-image: url(${imagemFundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`;

const SectionLogin = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(10, 65, 120, 0.85);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 450px;
  box-sizing: border-box;

  h1 {
    color: #fc9a34;
    font-size: 1.375rem;
    text-align: center;
    font-weight: bold;
    line-height: 1.4;
    margin-top: 0.3125rem;
    margin-bottom: 1.25rem;
    padding: 0 0.625rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    letter-spacing: 0.5px;
  }

  img {
    width: 80%;
    margin: 0 auto;
    max-width: 280px;
    filter: drop-shadow(0 0 5px #fc9a34);
    position: relative;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 10px;
  }

  p {
    color: white;
    text-align: center;
    font-size: 0.875rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  overflow: visible;
`;

function Login() {
  return (
    <MainContainer>
      <SectionLogin>
        <LogoContainer>
          <img src={Logo} alt="" width={"260px"} height={"176px"} />
        </LogoContainer>
        <h1>Tudo o que um corretor precisa, em um só lugar.</h1>
        <Input
          icon={faEnvelope}
          tipo={"email"}
          placeholder={"Email"}
          id={"email"}
        />
        <Input
          icon={faLock}
          tipo={"password"}
          placeholder={"Senha"}
          id={"senha"}
        />
        <Button />
        <p>Não tem uma conta?</p>
        <a href="./">Criar uma conta</a>
      </SectionLogin>
    </MainContainer>
  );
}

export default Login;
