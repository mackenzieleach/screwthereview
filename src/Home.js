import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './ScrewtheReviewLogo.png'

// 

class Home extends Component {
    render() {
        return (
            <Container fluid id = "home_container" style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 30}} >
                <Row>
                    {/* Column 1: Logo, Auth0 Widgets and Description*/}
                    <Col id="landing_col_1" align='center' style={{paddingBottom: 20}} lg={6} md={12} sm={12} xs={12}>
                        <img  src={logo} alt="Logo" id ="logo"/>
                        <h5 id="welcome" style={{textAlign: "center", paddingBottom: 20}} > Welcome to Screw the Review!</h5>
                        <p id="info"> Screw the Review provides new experiences by randomly generating activities. The Roulette
                            feature offers a totally randomized experience and Search generates an experience from filters
                            like price, location and keywords.
                        </p>
                        <p id="tiles">Click the tiles to learn more about Screw the Review and experience something new!</p>

                        <p>Place Holder: Auth0 Login and Signup Buttons</p>
                    </Col>

                    {/* Column 2: Search and About Us Cards*/}
                    <Col lg={3} md={6} sm={12} xs ={12} style={{paddingBottom: 40}}>
                        {/* Search Card*/}
                        <div className="card">
                            <img className="card-img-top" src={logo} alt="Logo"/>
                            <div className="card-body">
                                <a href="#" class="btn btn-link btn-block">Search</a>
                            </div>
                        </div>

                        {/* About Us Card*/}
                        <div className="card">
                            <img className="card-img-top" src={logo} alt="Logo"/>
                            <div className="card-body">
                                <a href="#" class="btn btn-link btn-block">About Us</a>
                            </div>
                        </div>
                    </Col>

                    {/* Column 3: Roulette and Contact Us Cards*/}
                    <Col lg={3} md={6} sm={12} xs = {12} style={{paddingBottom: 40}}>
                        {/* Roulette Card*/}
                        <div className="card">
                            <img className="card-img-top" src={logo} alt="Logo"/>
                            <div className="card-body">
                                <a href="#" class="btn btn-link btn-block">Roulette</a>
                            </div>
                        </div>

                        {/* Contact Us Card*/}
                        <div className="card">
                            <img class="card-img-top" src={logo} alt="Logo"/>
                            <div class="card-body">
                                <a href="#" class="btn btn-link btn-block">Contact</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;