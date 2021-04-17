import styled from "styled-components";
import { useHistory } from "react-router";

function Project({ title, description, id }) {
  const history = useHistory();

  return (
    <Container onClick={() => history.push(`/projects/${id}`)}>
      <Heading>{title}</Heading>
      <Description>{description}</Description>
    </Container>
  );
}

export default Project;

const Container = styled.div`
  background-color: #242629;
  padding: 30px;
  border-radius: 3px;
  max-width: 600px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: transform 200ms cubic-bezier(0.561, -0.163, 0.246, 1.27);

  :hover {
    box-shadow: 0 5px 15px -10px #000;
    transform: translate(0px, -4px);
  }

  @media (max-width: 425px) {
    padding: 20px;
    max-width: 325px;
  }

  @media (max-width: 375px) {
    max-width: 280px;
  }
`;

const Heading = styled.h2`
  color: #fffffe;
  margin-bottom: 5px;
  font-weight: 700;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  color: #94a1b2;
  line-height: 1.5;
  font-weight: 500;
`;
