import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerOther from "../Home/BannerOther";
import CommitteeList from "./CommitteeList";
// import Particle from "../Particle";

function Committee() {
  return (
    <section>
      <Container fluid id="committee"  className="home-content"> 
         <BannerOther mainText="Committee"/>
      </Container>
      <CommitteeList/>
    </section>
  );
}
export default Committee;
