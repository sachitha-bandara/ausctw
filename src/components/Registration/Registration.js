import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerOther from "../Home/BannerOther";
import RegistrationPage from "./RegistrationPage";
// import Particle from "../Particle";

function Registration() {
  return (
    <section>
      <Container fluid id="registration"  className="home-content banner-title-other"> 
    <BannerOther mainText="Registration"/>
</Container>
<RegistrationPage/>
    </section>
    
  );
}
export default Registration;
