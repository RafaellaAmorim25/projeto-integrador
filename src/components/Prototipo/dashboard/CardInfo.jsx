import styled from "styled-components";

const ContainerInfo = styled.div`
  font-size: 0.9rem;
  color: #666;

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    color: #666;
  }

  p {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

function CardInfo({ texto, valor }) {
  return (
    <>
      <ContainerInfo>
        <h3>{texto}</h3>
        <p>{valor}</p>
      </ContainerInfo>
    </>
  );
}

export default CardInfo;
