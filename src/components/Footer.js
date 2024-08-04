import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";
import Instagram from "../assets/img/Instagram.png";
import Whatsapp from "../assets/img/Whatsapp.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={10} sm={5}>
              <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto' }} />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/chetankumarpulipati" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/chetan-kumar-b4388926b/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://x.com/ChetanK77580589" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="" target="_blank"><img src={Instagram} alt="Icon" /></a>
              <a href="https://web.whatsapp.com/" target="_blank"><img src={Whatsapp} alt="Icon" /></a>
            </div>
            <p>Copyright 2024 @chetankumarpulipati</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}