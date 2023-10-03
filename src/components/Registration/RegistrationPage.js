import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PDFInstructions from "../../Assets/Instructions.pdf";

function RegistrationPage(){
    
    return (
        <Container>
        <Row style={{marginTop:"0"}}>
          <Col md={12} >
            
            <ul className="home-about-body" style={{paddingLeft:"180px", fontSize:"1.2em"}}>
              <li>Registration for all participants of AusCTW 2024 is required.</li>
          
              <br/>
              <li>Registration includes all the technical programs, morning and afternoon tea, and the banquet.</li>
            </ul>
          </Col> 
          <Row>
            <Col>
            <Button variant="success" href="https://ecommerce.unimelb.edu.au/ausctw-2024" target="_blank">Register Here</Button>
            </Col>
           
            <Col md={12} className="home-about-description" style={{paddingTop:"0px !important"}}>
            
            <ul className="home-about-body reg-page" style={{paddingLeft:"180px", paddingTop:"0px !important"}}>
              <li>More details on steps of registration can be <a href={PDFInstructions} target="_blank">found here</a>.</li>
            </ul>
          </Col> 
          </Row>
          <Row>
            <h2 style={{color:"red", paddingBottom:"10px"}}>Important Notice</h2>
            <br/>
            <br/>
            <p>
                <strong> Please note that a surcharge of 0.99% - 4% may apply to your card payments, depending on the payment option you choose.
                </strong>
            </p>
          </Row>
          <Row>
          <p className="travel-grants">If you have any questions regarding the registration, please email <a href={`mailto:"tian.han1@unimelb.edu.au"`}>tian.han1@unimelb.edu.au</a>.</p>
          </Row>
          <br/>
          <h2 style={{paddingTop:"10px"}}>Travel Grants</h2>
            <p className="travel-grants">
            We are pleased to offer a number of travel grants to students who will register, attend the workshop, and present a poster. The grants will be awarded competitively to a limited number of applicants who genuinely need financial support to attend AusCTW 2024. The amount may vary from case to case based on the available budget, travel distance, and other relevant factors.
            </p>
            <br/>
            <p className="travel-grants">
            To apply for a travel grant please send an email to the submissions and awards co-chair Erfan Khordad (email: <a href={`mailto:"erfan.khordad@unimelb.edu.au"`}>erfan.khordad@unimelb.edu.au</a>) with the following information:
            <ul className="home-about-body list-items" style={{paddingLeft:"200px"}}>
                <li>
                    Cover Letter
                </li>
                <li>
                    Estimated Budget
                </li>
                <li>
                    Short CV (max: 2 pages)
                </li>
            </ul>
            </p>
            <br/>
            <p className="travel-grants">
                <strong>
                The deadline for application for travel grants is 20 November 2023.
                </strong>
            </p>
          <Row>

          </Row>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
    </Container>
    );
   

}

export default RegistrationPage;