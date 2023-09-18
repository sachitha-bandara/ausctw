import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Home/Banner";
// import Particle from "../Particle";

function Registration() {
  return (
    <section>
      <Container fluid id="registration"  className="home-content"> 
    <Banner mainText="Registration"/>
</Container>
<Container>
    <h2>Workshop registration will open soon!</h2>
</Container>
    </section>
    
  );
}
export default Registration;
