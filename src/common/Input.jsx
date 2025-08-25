import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  pointer-events: none;
`;

const InputStyle = styled.input`
  height: 45px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 15px;
  font-size: 16px;
  box-sizing: border-box;

  &::placeholder {
    padding-left: 1.5rem;
  }
`;

function Input({icon, tipo, placeholder, id }) {
  return (
    <>
      <InputContainer>
        {icon && <Icon icon={icon} />}
        <InputStyle type={tipo} placeholder={placeholder} id={id} required />
      </InputContainer>
    </>
  );
}

export default Input;
