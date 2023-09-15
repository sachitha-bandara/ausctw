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
import philippa from "../../Assets/philippa.jpg";
import matthew from "../../Assets/MatthewMcKay.jpg";
import emanuele from "../../Assets/Emanuele-Viterbo.jpg";
import steven from "../../Assets/StevenWeller.jpg";

function Home2() {
  return (
    <Container fluid id="about">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
           <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Keynote </span> Speakers
          </h1>
        </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col className="speaker-card">
            <SpeakerCards
              imgPath={philippa}
              name="Philippa Martin"
              affiliation="University of Canterbury, Christchurch, NZ"
              description="Prof. Philippa Martin received the B.E. (Hons.) and Ph.D. degrees in electrical and electronic engineering from Te Whare Wānanga o Waitahi | University of Canterbury (UC), Ōtautahi | Christchurch, Aotearoa | New Zealand, in 1997 and 2001, respectively. She was a Postdoctoral Fellow there in 2001-2004. In 2002, she was a Visiting Researcher at the University of Hawaii at Manoa, USA. Since 2004, she has been an Academic with UC, where she is currently a Professor. She is a Fellow of Engineering New Zealand, Senior Member of IEEE and a Senior Fellow of the Higher Education Academy, UK.  

              Her communications research interests include error correction coding, decoding and detection algorithms, equalization, multiple antenna systems, channel modelling, and 5G-6G communications, in particular for wireless communications. She served as an Editor of the IEEE Transactions on Wireless Communications in 2005-2008 and 2014-2016. She was a member of the IEEE Communication Society Board of Governors in 2019-2021 and currently serves on their Financial standing committee.  
              
              In addition, Philippa has a Certificate of Arts in Te Reo Māori and Māori and Indigenous Studies, Postgraduate Certificate in Counselling Studies, Postgraduate Certificate in Strategic Leadership and Postgraduate Certificate in Tertiary Teaching. Her research interests include engineering education as well as diversity, equity and inclusion. She set up an award-winning peer mentoring program at UC called ENG ME! (ENVI 2023 Engineering Education award from Engineering New Zealand), while being Dean of Engineering (First Year) in 2017-2021. In 2023, she received the national Te Whatu Kairangi Aotearoa Tertiary Teaching Award for transforming engineering education for students, institutions and community benefit. "
            />
          </Col>

          <Col  className="speaker-card">
            <SpeakerCards
              imgPath={matthew}
              name="Matthew McKay"
              affiliation="University of Melbourne"
              description="Matthew McKay is an ARC Future Fellow and Professor at the University of Melbourne.  He holds a joint appointment in the Department of Electrical and Electronic Engineering and the Department of Microbiology and Immunology in the Peter Doherty Institute for Infection and Immunity. Matthew was previously an Assistant Professor, Hari Harilela Associate Professor, and Full Professor at the Hong Kong University of Science and Technology (HKUST), where he continues to hold an Adjunct Professor position. He has been a Research Scientist with the Institute for Medical Engineering & Science (IMES) at MIT and with the Department of Statistics at Stanford.  He received his Ph.D. in electrical engineering from The University of Sydney. He is a Fellow of the IEEE, and has served as a Young Scientist of the World Economic Forum and the World Laureates Forum. In 2021, he was awarded the Australia-China Alumni Award for Research and Science by the Australia-China Alumni Association.  Matthew's areas of interest include machine learning and signal processing, and their applications to infectious diseases and vaccines."
            />
          </Col>

          <Col className="speaker-card">
            <SpeakerCards
              imgPath={steven}
              name="Steven Weller"
              affiliation="University of Newcastle, Executive Director, Engineering and Information Sciences, ARC"
              description="Professor Steven Weller joined the ARC as Executive Director, Engineering, Information and Computing Sciences in March 2023.

              Prof. Weller received the B.E. (Hons. I) degree in Computer Engineering in 1988, the M.E. degree in Electrical Engineering in 1992, and the Ph.D. degree in Electrical Engineering in 1994, all from the University of Newcastle, Australia.
              
              During 1994–1997, he was a Lecturer in the Department of Electrical and Electronic Engineering, University of Melbourne, Australia. In 1997, he joined the University of Newcastle, where he served as Head of School of Electrical Engineering and Computer Science (2007–2009). He was also Assistant Dean Research (2011–2013) for the Faculty of Engineering and Built Environment, where he served as Deputy Head of Faculty (2013-2020). Over the period 2020–2023 he was Director of the Science and Engineering Challenge (SEC) a national outreach program inspiring young people to study science, technology, engineering and mathematics subjects in senior high school.
              
              Currently he is Professor of Electrical Engineering at the University of Newcastle. Highly awarded, Professor Weller is also an elected Fellow of the Royal Society of New South Wales.
              
              Prof. Weller's research interests are in control theory and its applications. He is especially interested in applications of control theory to energy systems, climate economics, and in cyber-security of modern power systems"
            />
          </Col>

          <Col className="speaker-card">
            <SpeakerCards
              imgPath={emanuele}
              name="Emanuele Viterbo"
              affiliation="Monash University"
              description="Emanuele Viterbo"
            />
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2em" }}>
              <span className="purple"> Technical </span> Speakers
            </h1>
            <p className="home-about-body" style={{paddingLeft:"20px", fontSize:"1.2em"}}>
              1. Xiangyun (Sean) Zhou (Australian National University)
              <br />
              <br/>
              2. Margreta Kuijper (University of Melbourne)
              <br />
              <br/>
              3. Amin Sakzad (Monash University)
              <br />
              <br/>
              4. Thanh Tung Vu (Macquarie University)
              <br/>
              <br/>
              5. Wibowo Hardjawana (University of Sydney)
              <br/>
              <br/>
              6. Yue Rong (Curtin University)
              <br/>
              <br/>
              7. Ross Murch (HKUST)
              <br />
              <br/>
              8. Felix Shen (University of Western Australia)
              <br />
              <br/>
              9. Siu Wai Ho (University of Adelaide)
              <br />
              <br/>
              10. Akram Hourani (RMIT)
              <br />
              <br/>
              11. Tian Han (University of Melbourne)
              <br />
              <br/>
              12. Pawel Dmochowski (Victoria University of Wellington, NZ)
              <br />
              <br/>
              13. Tao Huang (James Cook University)
              < br/>
              <br/>
              14. Girish Nair (University of Melbourne)
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
          <Col md={12} className="home-about-body">
            <h2 style={{textAlign:"center"}}>
              News and <span className="purple">Announcements </span>
            </h2>
            <br/>
            <br />
            <p style={{paddingLeft:"20px", fontSize:"1.2em !important"}}>
              <strong>Welcome to the Australian Communication Theory Workshop (AusCTW) website.</strong>
              <br />
              <br />
              AusCTW 2024 conference will be held <strong>in person 4 - 7 Feb 2024, in Melbourne</strong>
              <br />
              <br />
              <strong>Instructions for Presenters available</strong>
              <br/>
              <br/>
              If you are to present your work at AusCTW 2024, you can find instructions on technical equipment and guidelines for presentation here: '' - see you in Melbourne.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
