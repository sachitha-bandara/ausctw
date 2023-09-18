// Banner.js

import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function BannerOther(props) {
  return (
    <div className="banner">
      <div className="home-content banner-component">
          <Row>
            <Col md={12} className="home-header">
              <h1 className="banner-title-other">
                <div className="main-name"> {props.mainText}</div>
              </h1>
            </Col>
          </Row>
        </div>
    </div>
  );
}

export default BannerOther;
