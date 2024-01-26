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
        <p style={{textAlign:"left"}}>To facilitate maximum participation, poster slots will be allocated to attendees who submit a title and brief abstract (maximum 300 words) by 14, January 2024. Abstracts and author information are to be emailed to the submissions and awards co-chair Zainab Razia Zaidi (email: <a href={`mailto:"zainab.raziazaidi@unimelb.edu.au"`}>zainab.raziazaidi@unimelb.edu.au</a>). Poster boards are 1200W x 1800H, which allows for posters of size A0 or less (either landscape or portrait).</p><br/>
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
              Please submit the above information to <a href={`mailto:"zainab.raziazaidi@unimelb.edu.au"`}>zainab.raziazaidi@unimelb.edu.au</a> by 14, January 2024
            </li>

        </ol>
        <br/>
      </Container>
      <Container>
      <span><strong>Poster presentation guidelines</strong> </span>
        <br/>
        <br/>
        <p style={{textAlign:"left"}}>Poster Board Dimensions:</p>
        <ul style={{textAlign:"left"}}>
          <li>Poster boards measure 1200W x 1800H.</li>
          <li>Accommodates posters of size A0 or smaller.</li>
          <li>Suitable for both landscape and portrait orientations.</li>
        </ul>
        <p style={{textAlign:"left"}}>Printing Information:</p>
        <ul style={{textAlign:"left"}}>
          <li>Participants are required to bring a printed copy of their poster.</li>
          <li>Printing facilities will not be available onsite.</li>
        </ul>
        <p style={{textAlign:"left"}}>Program Booklet:</p>
        <ul style={{textAlign:"left"}}>
          <li>Participants will receive the program booklet at the beginning of the workshop.</li>
          <li>Your allocated poster presentation time will be specified in the program booklet.</li>
        </ul>
      </Container>
      {/* <Container>
      <span><strong>Submission guidelines for the 5-min Thesis Competition</strong> </span>
        <br/>
        <br/>
        <p style={{textAlign:"left"}}>The 5-min Thesis Competition is open only for the final year PhD students. To enter the competition please submit the title and a brief abstract (maximum 300 words), along with the start date of your PhD and the list of publications from your PhD work by 14 January 2024. All this information should be submitted in one PDF document and to be emailed to the submissions and awards co-chair Erfan Khodard (email: Erfan Khordad <a href={`mailto:"erfan.khordad@unimelb.edu.au"`}>erfan.khordad@unimelb.edu.au</a>).</p><br/>
        <p style={{textAlign:"left"}}>Our selection committee will go through the submissions and select 5 applications to be presented at the workshop. You will be informed of the results of your submission by 16th January 2024.</p>
      </Container> */}
    </section>
  );
}
export default Submissions;
