import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import BannerOther from "../Home/BannerOther";

function Venue() {
  return (
    <section>
      <Container fluid id="venue"  className="home-content"> 
    <BannerOther mainText="Venue and Travel"/>
</Container>
      <Container>
        <p style={{textAlign:"left"}}><strong>The 2024 AusCTW will be held at Level 1, Forum, Melbourne Connect, Faculty of Engineering and Information Technology, University of Melbourne. </strong></p>
        <Row>
          <h2 style={{paddingTop:"10px"}}>Hotels</h2>
          <p style={{textAlign:"left"}}>Here are some hotels near to the Melbourne Connect, along with their websites and approximate distances from the conference venue:</p>
          <ol className="reg-page travel-grants" style={{paddingLeft:"50px", paddingTop:"0px !important"}}>
            <li>
            Clocktower Apartment Hotel
            <ul className="home-about-body list-items" style={{paddingLeft:"80px"}}>
              <li>Website: <a href="https://www.clocktower.com.au/" target="_blank" rel="noopener noreferrer">https://www.clocktower.com.au/</a></li>
              <li>Distance: 0.3 km</li>
            </ul>
            </li>
            <br/>
            <li>
            BEST WESTERN PLUS Travel Inn
            <ul className="home-about-body list-items" style={{paddingLeft:"80px"}}>
              <li>Website: <a href="https://www.bestwestern.com/en_US/book/hotels-in-melbourne/best-western-plus-travel-inn-hotel/" target="_blank" rel="noopener noreferrer">https://www.bestwestern.com/en_US/book/hotels-in-melbourne/best-western-plus-travel-inn-hotel/</a></li>
              <li>Distance: 0.35 km</li>
            </ul>
            </li>
            <br/>
            <li>
            Ibis Melbourne - Hotel & Apartments
            <ul className="home-about-body list-items" style={{paddingLeft:"80px"}}>
              <li>Website: <a href="https://www.guestreservations.com/ibis-melbourne-hotel-and-apartments/" target="_blank" rel="noopener noreferrer">https://www.guestreservations.com/ibis-melbourne-hotel-and-apartments/</a></li>
              <li>Distance: 0.8 km</li>
            </ul>
            </li>
            <br/>
            <li>
            Jasper Boutique Hotel
            <ul className="home-about-body list-items" style={{paddingLeft:"80px"}}>
              <li>Website: <a href="https://jasper-hotel-melbourne.hotelsone.com" target="_blank" rel="noopener noreferrer">https://jasper-hotel-melbourne.hotelsone.com</a></li>
              <li>Distance: 0.9 km</li>
            </ul>
            </li>
            <br/>
            <li>
            Rydges Melbourne
            <ul className="home-about-body list-items" style={{paddingLeft:"80px"}}>
              <li>Website: <a href="https://www.rydges.com/accommodation/melbourne-vic/melbourne-cbd/" target="_blank" rel="noopener noreferrer">https://www.rydges.com/accommodation/melbourne-vic/melbourne-cbd/</a></li>
              <li>Distance: 2.2 km</li>
            </ul>
            </li>
            <br/>
            <li>
            Park Hyatt
            <ul className="home-about-body list-items" style={{paddingLeft:"80px"}}>
              <li>Website: <a href="https://melbourne.park.hyatt.com/en/hotel/" target="_blank" rel="noopener noreferrer">https://melbourne.park.hyatt.com/en/hotel/</a></li>
              <li>Distance: 2.6 km</li>
            </ul>
            </li>

          </ol>

          <p style={{textAlign:"left"}}>
          Please note that distances are approximate. It's advisable to check the hotel's website for the most up-to-date 
          information and to make reservations as needed.
          </p>
        </Row>
        <Row>
        <h2 style={{paddingTop:"10px"}}>Transportation (From Melbourne Airport to Melbourne Connect)</h2>
          <ol className="reg-page travel-grants" style={{paddingLeft:"50px", paddingTop:"0px !important"}}>
            <li>
            <strong>By Bus</strong>
            <p style={{textAlign:"left", paddingLeft:"0px", paddingTop:"10px"}}>
            Shuttle bus service is available from Melbourne Airport to the heart of Melbourne City at Southern Cross Station. Services commence 4am and continue to 1am with departures every 10 minutes between 7am and 7pm. 
            Please check the detailed timetable <a href="https://www.skybus.com.au/melbourne-city-express/timetable/" target="_blank" rel="noopener noreferrer">here</a>.
            </p>

            <p style={{textAlign:"left", paddingLeft:"0px"}}>
            From Southern Cross Station, you will have to catch a metered taxi or tram service to get to Melbourne Connect and the nearby hotels. 
            Tram Map for Melbourne is available <a href="https://www.ptv.vic.gov.au/assets/PTV-default-site/Maps-and-Timetables-PDFs/Maps/Network-maps/Tram_Network_Map_October-2023.pdf" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
            </li>

            <li>
              <strong>By Taxi</strong>
              <p style={{textAlign:"left", paddingLeft:"0px", paddingTop:"10px"}}>
              For convenience, especially for those with big luggage, it is advisable that attendees take the airport taxis direct to the Melbourne Connect and nearby hotels.
            </p>
            </li>
          </ol>
        </Row>
      </Container>
    </section>
  );
}
export default Venue;
