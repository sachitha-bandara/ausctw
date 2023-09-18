import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Home/Banner";
// import Particle from "../Particle";

function Contact() {
  return (
    <section>
      <Container fluid id="contact"  className="home-content"> 
        <Banner mainText="Contact Us"/>
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
        Email: rajitha.senanayake@unimelb.edu.au

        </span>
      </Row>
    </section>
  );
}
export default Contact;
