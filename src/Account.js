/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import profile from './Images/profile.png';

class Account extends Component {
  render() {
    return (
      <Container fluid className="page-container" id="page-container">
        <Row>
          <Col sm={{ span: 4, offset: 4 }}>
            <Row className="profile-picture-container">
              <Row>
                <Image fluid className="profile-picture" src={profile} alt="profile" />
              </Row>
              <Row className="profile-name">
                <Col>
                  <div className="font-medium text-center">John Appleseed</div>
                </Col>
              </Row>
              <Row className="profile-button-container">
                <Col>
                  <Button className="profile-button">Edit profile</Button>
                </Col>
              </Row>
            </Row>
            <Row>
              <Col className="profile-info-container">
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
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Account;
