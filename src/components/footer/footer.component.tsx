import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FooterStyle, Column, Row, Links } from "./footer-styles";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyle>
      <Links>
        <Row>
          <p>
            A community for ladies who crush beta while empowering each other
            through climbing. #ladycrushcrew
          </p>
        </Row>
        <Row>
          <Column>
            <h4>About Us</h4>
            <Link to='/about'>Mission/Vision</Link>
            <Link to='/about'>Leaders</Link>
            <Link to='/about'>Ambassadors</Link>
          </Column>
          <Column>
            <h4>Links</h4>
            <Link to='/events'>Events</Link>
            <Link to='/volunteer'>Volunteer</Link>
            <Link to='/shop'>Shop</Link>
          </Column>
          <Column>
            <h4>Contact Us</h4>
            <a href="https://www.instagram.com/ladycrushcrew/" target="_blank" rel="noreferrer">Instagram</a>
            <Link to='/contact'>Email</Link>
          </Column>
          <Column>
            <img src={Logo} alt="Logo" />
          </Column>
        </Row>
        <Row>©{currentYear} Copyright LadyCrushCrew | Coded with 💗 by Vanessa Vun</Row>
      </Links>
    </FooterStyle>
  );
}

export default Footer;
