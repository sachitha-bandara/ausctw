import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Home/Banner";
// import Particle from "../Particle";

function Committee() {
  return (
    <Container fluid id="committee"  className="home-content"> 
         <Banner mainText="Committee"/>
    </Container>
  );
}
export default Committee;
