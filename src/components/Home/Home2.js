import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/uni_logo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import SpeakerCards from "./kSpeaker";
import speaker1 from "../../Assets/speaker1.png"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={2} className="speaker-card">
            <SpeakerCards
              imgPath={speaker1}
              isBlog={false}
              title="Sachitha Bandara"
              description="Senior Vice President and Chief Technology Officer of Agilent Technologies"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={2} className="speaker-card">
            <SpeakerCards
              imgPath={speaker1}
              isBlog={false}
              title="Sachitha Bandara"
              description="Senior Vice President and Chief Technology Officer of Agilent Technologies"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={2} className="speaker-card">
            <SpeakerCards
              imgPath={speaker1}
              isBlog={false}
              title="Sachitha Bandara"
              description="Senior Vice President and Chief Technology Officer of Agilent Technologies"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={2} className="speaker-card">
            <SpeakerCards
              imgPath={speaker1}
              isBlog={false}
              title="Sachitha Bandara"
              description="Senior Vice President and Chief Technology Officer of Agilent Technologies"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={2} className="speaker-card">
            <SpeakerCards
              imgPath={speaker1}
              isBlog={false}
              title="Sachitha Bandara"
              description="Senior Vice President and Chief Technology Officer of Agilent Technologies"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET US <span className="purple"> INTRODUCE </span> OURSELVES
            </h1>
            <p className="home-about-body">
              We are the ORGANIZING Committee of This Year's AusCTW!
              <br />
              <br />Welcome to
              <i>
                <b className="purple"> University of Melbourne, Faculty of Engineering and IT </b>
              </i>
              <br />
              <br />
              Our team consists &nbsp;
              <i>
                <b className="purple">Faculty </b> and
                {" "}
                <b className="purple">
                Grad Students
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col> 
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
