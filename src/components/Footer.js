import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <hr />
      <SpotifyPlugin>
        <Icon src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" />
        <Status>
          Not Playing – <span> Spotify</span>
        </Status>
      </SpotifyPlugin>

      <LinksContainer>
        <Link to="/">Home</Link>

        <Link to="/">About</Link>
        <Link to="/">Github</Link>
        <Link to="/guestbook">Guestbook</Link>

        <Link to="/">YouTube</Link>
        <Link to="/">Instagram</Link>
      </LinksContainer>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  color: white;
  padding-left: 300px;
  max-width: 672px;
  padding-bottom: 80px;

  > hr {
    height: 1px;
    border: 0px;
    background-color: rgba(148, 161, 178, 0.5);
    margin-top: 10px;
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    padding-left: 200px;
  }

  @media (max-width: 786px) {
    padding-left: 40px;
  }

  @media (max-width: 425px) {
    max-width: 350px;
  }

  @media (max-width: 375px) {
    max-width: 300px;
  }
`;

const SpotifyPlugin = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;

  @media (max-width: 425px) {
    justify-content: space-between;
  }
`;

const Icon = styled.img`
  height: 16px;

  @media (max-width: 425px) {
    order: 2;
  }
`;

const Status = styled.p`
  font-weight: 600;

  > span {
    font-weight: 500;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 672px;
  row-gap: 16px;

  > a {
    color: #94a1b2;
    text-decoration: none;
    font-weight: 500;
    width: 220px;
    transition: color 200ms ease-in-out;

    :hover {
      color: #7f5af0;
    }

    @media (max-width: 425px) {
      margin-bottom: 10px;
    }
  }
`;
