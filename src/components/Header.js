import { Link } from "react-router-dom";
import styled from "styled-components";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { useEffect, useState } from "react";

function Header() {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
  }, []);

  return (
    <Container isTop={isTop}>
      <ToggleDarkMode>
        <WbSunnyIcon />
      </ToggleDarkMode>
      <HeaderLinks>
        <Link to="">Dashboard</Link>
        <Link to="">Blog</Link>
        <Link to="">About</Link>
        <Link to="/">Home</Link>
      </HeaderLinks>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #16161a;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 220px;
  padding-bottom: 10px;
  height: ${(props) => (props.isTop ? "20px" : "80px")};

  @media (max-width: 1024px) {
    padding: 30px 120px;
  }

  @media (max-width: 786px) {
    padding: 30px 30px;
    padding-right: 40px;
  }

  @media (max-width: 425px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const ToggleDarkMode = styled.button`
  background-color: #7f5af0;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  > .MuiSvgIcon-root {
    font-size: 16px;
    color: white;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  > a {
    letter-spacing: 0.2px;
    font-weight: 500;
    color: #fffffe;
    text-decoration: none;
  }

  @media (max-width: 425px) {
    gap: 10px;
  }
`;
