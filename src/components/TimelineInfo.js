import styled from "styled-components";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function TimelineInfo({ accomplishment, description }) {
  return (
    <Container>
      <Icon />
      <InfoContainer>
        <Accomplishment>{accomplishment}</Accomplishment>
        <Description>{description}</Description>
      </InfoContainer>
    </Container>
  );
}

export default TimelineInfo;

const Container = styled.div`
  padding: 20px 5px;
  padding-bottom: 0;
  width: 100%;
  display: flex;
  gap: 10px;
`;

const InfoContainer = styled.div``;

const Accomplishment = styled.p`
  display: flex;
  gap: 10px;
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 24px;

  @media (max-width: 425px) {
    max-width: 300px;
  }
`;

const Icon = styled(CheckCircleOutlineOutlinedIcon)`
  font-size: 21px !important;
  color: #2cb67d;
`;

const Description = styled.p`
  color: #94a1b2;
  line-height: 24px;
  font-weight: 500;
  width: 100%;
  max-width: 640px;

  @media (max-width: 425px) {
    max-width: 320px;
  }

  @media (max-width: 375px) {
    max-width: 270px;
  }
`;
