import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Schedule from "./Schedule";
import Banner from "../Home/Banner";

function Program() {
  return (
    <section>
      <Container fluid id="program"  className="home-content"> 
        <Banner mainText="Program"/>
      </Container>
      {/* <Schedule /> */}
    </section>
  );
}
export default Program;
