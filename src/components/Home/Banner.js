// Banner.js

import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function Banner() {
  return (
    <div className="banner">
      <Container className="home-content banner-component">
          <Row>
            <Col md={10} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> Australian Communication Theory Workshop (AusCTW)</strong>
              </h1>
              <h2 className='heading-name'> 4-7 February 2024, Melbourne</h2>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Banner;
