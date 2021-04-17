import styled from "styled-components";

function RecentVideo({ title, description, views, link }) {
  return (
    <Container href={link} target="_blank">
      <TopContainer>
        <Title>{title}</Title>
        <Views>{views} views</Views>
      </TopContainer>
      <Description>{description}</Description>
    </Container>
  );
}

export default RecentVideo;

const Container = styled.a`
  max-width: 660px;
  display: inline-block;
  text-decoration: none;
  margin-bottom: 32px;
`;

const TopContainer = styled.p`
  width: 660px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  color: #fffffe;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 8px;
  max-width: 550px;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 18px;
    max-width: 350px;
  }

  @media (max-width: 375px) {
    max-width: 330px;
  }
`;

const Views = styled.p`
  color: #94a1b2;
  opacity: 0.7;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: #94a1b2;
  font-weight: 500;

  @media (max-width: 425px) {
    max-width: 355px;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    max-width: 300px;
  }
`;
