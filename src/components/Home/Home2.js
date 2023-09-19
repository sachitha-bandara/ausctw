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
import emanuele from "../../Assets/EmanueleViterbo.jpg";
import steven from "../../Assets/StevenWeller.jpg";
import CardList from "./CardList";

function Home2() {
  return (
    <Container fluid id="about">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
           <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Keynote </span> Speakers
              <br/>
              <br/>
          </h1>
        </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col className="speaker-card">
            <SpeakerCards
              imgPath={philippa}
              name="Philippa Martin"
              affiliation="University of Canterbury, NZ"
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
              affiliation="Australian Research Council"
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
              description="Emanuele Viterbo received his degree (Laurea) in Electrical Engineering in 1989 and his Ph.D. in 1995 in Electrical Engineering, both from the Politecnico di Torino, Torino, Italy. From 1990 to 1992 he was with the European Patent Office, The Hague, The Netherlands, as a patent examiner in the field of dynamic recording and error-control coding. Between 1995 and 1997 he held a post-doctoral position in the Dip. di Elettronica of the Politecnico di Torino. In 1997-98 he was a post-doctoral research fellow in the Information Sciences Research Center of AT&T Research, Florham Park, NJ, USA. He became first Assistant Professor (1998) then Associate Professor (2005) in Dip. di Elettronica at Politecnico di Torino. In 2006 he became Full Professor in DEIS at University of Calabria, Italy. Since 2010 he has been Professor in the Electrical and Computer Systems Eng. Department and Associate Dean Graduate Research (2012-2020) of the Faculty of Engineering at Monash University, Melbourne, Australia.

              Prof. Emanuele Viterbo is a 2011 Fellow of the IEEE, a 2010 ISI Highly Cited Researcher and Member of the Board of Governors of the IEEE Information Theory Society (2011-2018) and Conference Committee Chair (2016-2018). He served as Associate Editor of IEEE Transactions on Information Theory, European Transactions on Telecommunications and Journal of Communications and Networks, Guest Editor for IEEE Journal of Selected Topics in Signal Processing: Special Issue Managing Complexity in Multiuser MIMO Systems, and Editor of Foundations and Trends® in Communications and Information Theory.
              "
            />
          </Col>
        </Row>
        {/* <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-4">Card Collection</h1>
          <CardList />
        </div> */}
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2em" }}>
              <span className="purple"> Technical </span> Speakers
            </h1>
            <ul className="home-about-body" style={{paddingLeft:"180px", fontSize:"1.2em"}}>
              <li>Akram Hourani (RMIT)</li>
          
              <br/>
              <li>Amin Sakzad (Monash University)</li>
           
              <br/>
              <li>Felix Shen (University of Western Australia)</li>
         
              <br/>
              <li>Girish Nair (University of Melbourne)</li>
              <br/>
              <li>Margreta Kuijper (University of Melbourne)</li>
          
              <br/>
              <li>Pawel Dmochowski (Victoria University of Wellington, NZ)</li>
           
              <br/>
              <li>Ross Murch (HKUST)</li>
           
              <br/>
              <li>Siu Wai Ho (University of Adelaide)</li>
             
              <br/>
              <li>Tao Huang (James Cook University)</li>
            
              <br/>
              <li>Thanh Tung Vu (Macquarie University)</li>
            
              <br/>
              <li>Tian Han (University of Melbourne)</li>
              
              <br/>
              <li>Wibowo Hardjawana (University of Sydney)</li>
          
              <br/>
              <li>Xiangyun (Sean) Zhou (Australian National University)</li>
             
              <br/>
              <li>Yue Rong (Curtin University)</li> 
              <br />
            </ul>
          </Col> 
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-body">
            <h2 style={{textAlign:"center"}}>
              <span className="purple">Announcements </span>
            </h2>
            <br/>
            <br />
            <p style={{paddingLeft:"20px", fontSize:"1.2em !important"}}>
              <strong>The 21<sup>st</sup> Australian Communications Theory Workshop (AusCTW) will be held at the University of Melbourne, 5-7 February 2024. </strong>
              <br />
              <br />
              Workshop registration will open soon!
              <br />
              <br />
              <strong>To facilitate maximum participation, all attendees are invited to present a poster at the workshop. More information about the poster abstract submissions will be available soon.</strong>
              <br/>
              
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
