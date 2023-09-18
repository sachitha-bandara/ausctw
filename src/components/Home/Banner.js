// Banner.js

import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function Banner(props) {
  return (
    <div className="banner">
      <div className="home-content banner-component">
          <Row>
            <Col md={12} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> {props.mainText}</strong>
              </h1>
              <h2 className='heading-name'> {props.secondaryText}</h2>
            </Col>
          </Row>
        </div>
    </div>
  );
}

export default Banner;
