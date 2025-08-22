import FotoPerfil from "../assets/Logotipo/icone01.png";
import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #e99309;
    margin-bottom: 10px;
  }

  h3 {
    margin: 5px 0px;
    color: #0a4178;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

function UserProfile() {
  return (
    <>
      <UserContainer>
        <img src={FotoPerfil} alt="Foto do usuário" />
        <h3>Olá,Corretor</h3>
        <p>Último acesso: 19/08/2025, 14:34</p>
      </UserContainer>
    </>
  );
}

export default UserProfile;
