/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import logo from './Images/ScrewtheReviewLogo.png';
import searchIcon from './Images/SearchIcon.png';
import wheelIcon from './Images/WheelIcon.png';
import contactIcon from './Images/ContactIcon.png';
import aboutIcon from './Images/AboutIcon.png';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Track the state of the modal to determine when contact form is shown */
      isOpen: false,
    };
  }

    openModal = () => this.setState({ isOpen: true });

    closeModal = () => this.setState({ isOpen: false });

    render() {
      return (
        <Container id="page-container">
          <Row className="align-items-center">
            {/* Column 1: Logo, Auth0 Widgets and Description */}
            <Col id="landing_col_1" align="center" style={{ paddingBottom: 20 }} lg={6} md={12} sm={12} xs={12}>
              <h5 id="welcome"> Welcome to</h5>
              <img src={logo} alt="Logo" id="logo" />

              <p id="info">
                {' '}
                Don`&#39;`t know what you want to do today? Screw the Review is designed to provide
                new experiences like dining, arts and shopping at the click of a button.
                Search generates an experience from filters like price, location and
                keyword. Spin the roulette wheel to receive a category and we`&#39;`ll pick a
                new experience from it!
              </p>

              <p id="tiles">Click the tiles to learn more and experience something new!</p>

              <LoginButton id="auth0-button"> Sign In </LoginButton>
              <LogoutButton id="auth0-button">Sign Out</LogoutButton>

            </Col>

            {/* Column 2: Search and Roulette Cards */}
            <Col lg={3} md={6} sm={12} xs={12}>
              {/* Search Card */}
              <div className="card" id="Search">
                <img className="card-img-top" src={searchIcon} alt="search-icon" />
                <div className="card-body">
                  <a href="/search" className="btn btn-link btn-block" id="button">Search</a>
                </div>
              </div>

              {/* Roulette Card */}
              <div className="card" id="Roulette">
                <img className="card-img-top" src={wheelIcon} alt="wheel-icon" />
                <div className="card-body">
                  <a href="/roulette" className="btn btn-link btn-block" id="button">Roulette</a>
                </div>
              </div>

            </Col>

            {/* Column 3: About Us and Contact Us Cards */}
            <Col lg={3} md={6} sm={12} xs={12}>
              {/* About Us Card */}
              <div className="card" id="AboutUs">
                <img className="card-img-top" src={aboutIcon} alt="about-icon" />
                <div className="card-body">
                  <a href="/about" className="btn btn-link btn-block" id="button">About Us</a>
                </div>
              </div>

              {/* Contact Us Card: */}
              <div className="card" id="ContactUs">
                <img className="card-img-top" src={contactIcon} alt="contact-icon" />
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-center" id="modal">
                    <Button id="contact-button" variant="primary" onClick={this.openModal}> Contact </Button>
                  </div>

                  {/* Opens a pop-up window with contact form */}
                  <Modal show={this.state.isOpen} onHide={this.closeModal} id="pop-up">
                    <Modal.Header closeButton>
                      <Modal.Title id="modal-title">Contact Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modal-body">
                      {/* Contact Form is integrated with Netlify */}
                      <p id="contact-prompt"> Please fill out the form below to let us know what you think about Screw the Review! </p>
                      <form name="contact" netlify>
                        <p>
                          <label htmlFor="form-text" id="form-text">
                            Name:
                            <input id="name" type="text" name="name" />
                          </label>
                        </p>
                        <p>
                          <label htmlFor="form-text" id="form-text">
                            Email:
                            <input id="name" type="email" name="email" />
                          </label>
                        </p>
                        <p>
                          <label htmlFor="form-text" id="form-text">
                            Message:
                            <textarea id="name" name="message" />
                          </label>
                        </p>
                        <p><button id="submit-contact" type="submit">Send</button></p>
                      </form>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      );
    }
}

export default Home;
