import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerOther from "../Home/BannerOther";
// import Particle from "../Particle";

function Contact() {
  return (
    <section>
      <Container fluid id="contact"  className="home-content"> 
        <BannerOther mainText="Contact Us"/>
      </Container>
      <Row>
        <span>
          <strong>Please Contact the General Chair of the workshop for any inquiries.</strong>
        </span>
        <br />
        <br />
        <span>
        Rajitha Senanayake <br/>
        Department of Electrical and Electronic Engineering <br/>
        The University of Melbourne, Victoria 3010 Australia <br/>
        Email: <a href="rajitha.senanayake@unimelb.edu.au">rajitha.senanayake@unimelb.edu.au</a>

        </span>
      </Row>
    </section>
  );
}
export default Contact;
