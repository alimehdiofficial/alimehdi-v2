import styled from "styled-components";

function Button({ text, onClick, type, Icon }) {
  return (
    <Container onClick={onClick} type={type}>
      {text}
      {Icon && <Icon />}
    </Container>
  );
}

export default Button;

const Container = styled.button`
  background-color: #7f5af0;
  color: #fffffe;
  border: none;
  border-radius: 4px;
  padding: 7px 35px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  font-size: 16px;
  margin-right: 5px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 10px;

  > .MuiSvgIcon-root {
    font-size: 21px;
  }

  @media (max-width: 375px) {
    max-width: 80px;
    padding-left: 22px;
  }
`;
