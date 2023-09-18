import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SpeakerBio from "./SpeakerBio.js";

function SpeakerCards(props) {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

    return (
      <Card className="custom-card">
        {/* <Card.Img variant="top" src={props.imgPath} alt="sCard-img" className="card-image"/> */}
        <div className="card-image">
        <div className="image-container">
          <img src={props.imgPath} alt={props.name} className="square-image" />
        </div>
      </div>
        <Card.Body>
          <Card.Title onClick={handleShowModal} className="s-card-title">{props.name}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {props.affiliation}
          </Card.Text>
          {/* <Button variant="primary" onClick={handleShowModal}>
            Bio
          </Button> */}
          <SpeakerBio show={showModal} handleClose={handleCloseModal} description={props.description} title={props.name}/>
        </Card.Body>
      </Card>
    );
  }
  export default SpeakerCards;
  