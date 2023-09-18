import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Banner from "../Home/Banner";

function Venue() {
  return (
    <section>
      <Container fluid id="venue"  className="home-content"> 
    <Banner mainText="Venue and Travel"/>
</Container>
      <Container>
        <span>The 2024 AusCTW will be held at Level 1, Forum, Melbourne Connect, Faculty of Engineering and Information Technology, University of Melbourne. </span>
      </Container>
    </section>
  );
}
export default Venue;
