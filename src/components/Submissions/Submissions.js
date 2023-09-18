import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import BannerOther from "../Home/BannerOther";

function Submissions() {
  return (
    <section>
      <Container fluid id="venue"  className="home-content"> 
    <BannerOther mainText="Submissions"/>
</Container>
      <Container>
        <span><strong>Submission guidelines for non-peer-reviewed poster abstracts</strong> </span>
        <br/>
        <br/>
        <p style={{textAlign:"left"}}>To facilitate maximum participation, poster slots will be allocated to attendees who submit a title and brief abstract (maximum 300 words) by 7, January 2024. Abstracts and author information are to be emailed to the poster sessions co-chair Zainab Razia Zaidi (email: <a href="zainab.raziazaidi@unimelb.edu.au">zainab.raziazaidi@unimelb.edu.au</a>). Poster sizes should be 60cm in width and 90cm in height. (This allows for A1 portrait and A1 landscape).</p><br/>
        <p style={{textAlign:"left"}}>The abstract submission guidelines are as follows:</p>
        <ol style={{textAlign:"left"}}>
            <li style={{textAlign:"left"}}>Please use the following format for the abstract submission
                <br/>
                <ol style={{textAlign:"left"}}>
                    <li style={{textAlign:"left"}}>Author names,</li>
                    <li style={{textAlign:"left"}}>Institution names,</li>
                    <li style={{textAlign:"left"}}>Title, and</li>
                    <li style={{textAlign:"left"}}>Abstract (maximum 300 words).</li>
                </ol>
            </li>
            <br/>
            <li style={{textAlign:"left"}}>
              Please submit the above information to <a href={`mailto:"zainab.raziazaidi@unimelb.edu.au"`}>zainab.raziazaidi@unimelb.edu.au</a> by 7, January 2024
            </li>

        </ol>
        <br/>
      </Container>
      <Container>
      <span><strong>Submission guidelines for the 5-min Thesis Competition</strong> </span>
        <br/>
        <br/>
        <p style={{textAlign:"left"}}>The 5-min Thesis Competition is open only for the final year PhD students. To enter the competition please submit the title and a brief abstract (maximum 300 words), along with the start date of your PhD and the list of publications from your PhD work by 7 January 2024. All this information should be submitted in one PDF document and to be emailed to the submissions and awards co-chair Erfan Khodard (email: Erfan Khordad <a href={`mailto:"erfan.khordad@unimelb.edu.au"`}>erfan.khordad@unimelb.edu.au</a>).</p><br/>
        <p style={{textAlign:"left"}}>Our selection committee will go through the submissions and select 5 applications to be presented at the workshop. You will be informed of the results of your submission by 14th January 2024.</p>
      </Container>
    </section>
  );
}
export default Submissions;
