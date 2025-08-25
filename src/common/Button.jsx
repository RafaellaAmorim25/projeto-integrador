import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ButtonStyle = styled.button`
  margin-top: 20px;
  height: 45px;
  width: 100%;
  background-color: #fc9a34;
  color: #0a4178;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export function Button({ className, children }) {
  return (
    <>
      <ButtonStyle className={className}>
        <FontAwesomeIcon icon={faSignInAlt} />
        {children || "Entrar"}
      </ButtonStyle>
    </>
  );
}

// export default Button;
