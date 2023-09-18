import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerOther from "../Home/BannerOther";
// import Particle from "../Particle";

function Committee() {
  return (
    <Container fluid id="committee"  className="home-content"> 
         <BannerOther mainText="Committee"/>
    </Container>
  );
}
export default Committee;
