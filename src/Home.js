import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './Images/ScrewtheReviewLogo.png'
import searchIcon from './Images/SearchIcon.png'
import wheelIcon from './Images/WheelIcon.png'
import contactIcon from './Images/ContactIcon.png'
import aboutIcon from './Images/AboutIcon.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class Home extends Component {

    /* Track the state of the modal to determine when contact form is shown */
    state = { isOpen: false };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <Container fluid id="home-container">
                <Row className="align-items-center">
                    {/* Column 1: Logo, Auth0 Widgets and Description*/}
                    <Col id="landing_col_1" align='center' style={{ paddingBottom: 20 }} lg={6} md={12} sm={12} xs={12}>
                        <img src={logo} alt="Logo" id="logo" />
                        <h5 id="welcome"> Welcome to Screw the Review!</h5>
                        <p id="info"> Screw the Review provides new experiences by randomly generating activities. The Roulette
                        feature offers a totally randomized experience and Search generates an experience from filters
                        like price, location and keywords.
                        </p>
                        <p id="tiles">Click the tiles to learn more about Screw the Review and experience something new!</p>

                        <p>Place Holder: Auth0 Login and Signup Buttons</p>
                    </Col>

                    {/* Column 2: Search and About Us Cards*/}
                    <Col lg={3} md={6} sm={12} xs={12} style={{ paddingBottom: 40 }}>
                        {/* Search Card*/}
                        <div className="card" id="Search">
                            <img className="card-img-top" src={searchIcon} alt="search-icon" />
                            <div className="card-body">
                                <a href="/search" className="btn btn-link btn-block" id="button">Search</a>
                            </div>
                        </div>

                        {/* About Us Card*/}
                        <div className="card" id="AboutUs">
                            <img className="card-img-top" src={aboutIcon} alt="Logo" />
                            <div className="card-body">
                                <a href="/about" className="btn btn-link btn-block" id="button">About Us</a>
                            </div>
                        </div>
                    </Col>

                    {/* Column 3: Roulette and Contact Us Cards*/}
                    <Col lg={3} md={6} sm={12} xs={12} style={{ paddingBottom: 40 }}>
                        {/* Roulette Card*/}
                        <div className="card" id="Roulette">
                            <img className="card-img-top" src={wheelIcon} alt="Logo" />
                            <div className="card-body">
                                <a href="/roulette" className="btn btn-link btn-block" id="button">Roulette</a>
                            </div>
                        </div>

                        {/* Contact Us Card:
                            This card renders a modal (pop-up window) when clicked that displays a contact form
                        */}
                        <div className="card" id="ContactUs">
                            <img className="card-img-top" src={contactIcon} alt="Logo" />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center" style={{ height: "30px" }}>
                                    <Button variant="primary" onClick={this.openModal}> Contact </Button>
                                </div>

                                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Contact Us</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p> Please fill out the form below to let us know what you think about Screw the Review! </p>
                                        <form name="contact" netlify>
                                            <p><label id="form-text">Name: <input type="text" name="name" /></label></p>
                                            <p><label id="form-text">Email: <input type="email" name="email" /></label></p>
                                            <p><label id="form-text">Message: <textarea name="message"></textarea></label></p>
                                            <p><button type="submit">Send</button></p>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                </Row >
            </Container >
        );
    }
}

export default Home;

{/* <a href="/contact" className="btn btn-link btn-block" id="button">Contact</a> */ }