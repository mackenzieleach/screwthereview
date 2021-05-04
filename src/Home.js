import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './ScrewtheReviewLogo.png'

// 

class Home extends Component {
    render() {
        return (
            <Container fluid style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 30, paddingBottom: 30}}>
                <Row>
                    {/* Column 1: Logo, Auth0 Widgets and Description*/}
                    <Col align='center' style= {{paddingBottom: 20}} lg={6} md={12} sm={12} xs={12}>
                        <img  src={logo} alt="Logo" style={{ width: '600px'}} />
                        <h5 style={{textAlign: "center", paddingBottom: 20}}> Welcome to Screw the Review!</h5>
                        <p> Screw the Review provides new experiences by randomly generating activities. The Roulette
                            feature offers a totally randomized experience and Search generates an experience from filters
                            like price, location and keywords.
                        </p>
                        <p>Click the tiles to learn more about Screw the Review and experience something new!</p>

                        <p>Place Holder: Auth0 Login and Signup Buttons</p>
                    </Col>

                    {/* Column 2: Search and About Us Cards*/}
                    <Col lg={3} md={6} sm={6} xs ={6}>
                        {/* Search Card*/}
                        <div class="card" style={{marginBottom: '20px'}}>
                            <img class="card-img-top" src={logo} alt="Logo" style={{paddingTop: 10}}/>
                            <div class="card-body">
                                <p> Short Description for Search here </p>
                                <a href="#" class="btn btn-primary">Search</a>
                            </div>
                        </div>

                        {/* About Us Card*/}
                        <div class="card">
                            <img class="card-img-top" src={logo} alt="Logo" style={{paddingTop: 10}} />
                            <div class="card-body">
                                <p> Short Description for About Us here </p>
                                <a href="#" class="btn btn-primary">About Us</a>
                            </div>
                        </div>
                    </Col>

                    {/* Column 3: Roulette and Contact Us Cards*/}
                    <Col lg={3} md={6} sm={6} xs = {6}>
                        {/* Roulette Card*/}
                        <div class="card" style={{marginBottom: '20px'}}>
                            <img class="card-img-top" src={logo} alt="Logo" style={{paddingTop: 10}}/>
                            <div class="card-body">
                                <p> Short Description for Roulette here </p>
                                <a href="#" class="btn btn-primary">Roulette</a>
                            </div>
                        </div>

                        {/* Contact Us Card*/}
                        <div class="card">
                            <img class="card-img-top" src={logo} alt="Logo" style={{paddingTop: 10}}/>
                            <div class="card-body">
                                <p> Short Description for Contact here </p>
                                <a href="#" class="btn btn-primary">Contact</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;