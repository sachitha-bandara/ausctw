import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Schedule from "./Schedule";
import BannerOther from "../Home/BannerOther";
import Talks from "./Talks";
import PDFTalkDetails from "../../Assets/TalkDetails.pdf";

function Program() {
  return (
    <section>
      <Container fluid id="program"  className="home-content"> 
        <BannerOther mainText="Program"/>
      </Container>
      <Schedule />
      <Container>
        <div style={{fontWeight: "bold"}}>Click <a href={PDFTalkDetails} target="_blank">here</a> to download the detailed program.</div>
      </Container>
      <Talks />
    </section>
  );
}
export default Program;
