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
      <Card className="speaker-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="sCard-img" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {props.affiliation}
          </Card.Text>
          <Button variant="primary" onClick={handleShowModal}>
            Bio
          </Button>
          <SpeakerBio show={showModal} handleClose={handleCloseModal} description={props.description} title={props.name}/>
        </Card.Body>
      </Card>
    );
  }
  export default SpeakerCards;
  