/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from './Images/profile.png';

class Account extends Component {
  render() {
    return (
      <Container fluid className="page-container" id="page-container">
        <Row>
          <Col sm={4} style={{ background: '#4dd8ff' }}>
            <Row>
              <Image fluid className="profile-picture" src={profile} alt="profile" />
            </Row>
            <Row>
              <div className="font-medium text-center">John Appleseed</div>
            </Row>
            <Row>
              <div>Username: JApple01</div>
            </Row>
            <Row>
              <div>Email: johnappleseed@gmail.com</div>
            </Row>
            <Row>
              <div>Phone: (xxx) xxx-xxxx</div>
            </Row>
          </Col>
          <Col sm={8}>
            <div>hello</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Account;
