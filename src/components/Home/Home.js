import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/uni.jpg";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Banner from "./Banner";

function Home() {
  return (
    <section>
      <Container fluid id="home"  className="home-content"> 
        {/* <Particle /> */}
        <Banner/>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
