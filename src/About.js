import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './Images/ScrewtheReviewLogo.png';
import rachel from './Images/Rachel.png';
import kenzie from './Images/Kenzie.png';
import lulu from './Images/LuLu.png';
import luke from './Images/Luke.png';


class About extends Component {
    render() {
        return (
            <Container fluid id="about-container">
                <Row className="align-items-center">
                    {/* Column 1: Logo and Page Description*/}
                    <Col id="landing_col_1" align='center' style={{ paddingBottom: 20 }} lg={6} md={12} sm={12} xs={12}>
                        <img src={logo} alt="Logo" id="logo" />
                        <h5 id="welcome"> About &amp; Our Team </h5>
                        <p id="info"> Screw the Review and experience something new! Screw the Review provides users with new experiences by generating activities based
                        a set of filters. It utilizes Yelp to provide users with details of their new experience and Auth0 to provide account support
                        for users. </p>

                        <p id="info"> This application was developed as part of CSE 403: Software Engineering at the University
                        of Washington by our team! </p>


                    </Col>

                    {/* Column 2: Luke & Mackenzie's Tiles */}
                    <Col lg={3} md={6} sm={6} xs={6} style={{ paddingBottom: 40 }}>
                        {/* Luke */}
                        <div className="card" id="Luke">
                            <img className="card-img-top" id="headshot" src={luke} alt="luke" />
                            <div className="card-body">
                                <h5 id="card-title">Luke LeVasseur</h5>
                                <p id="card-info">Backend Developer</p>
                            </div>
                        </div>

                        {/* Mackenzie*/}
                        <div className="card" id="Mackenzie">
                            <img className="card-img-top" id="headshot" src={kenzie} alt="kenzie" />
                            <div className="card-body">
                                <h5 id="card-title">Mackenzie Leach</h5>
                                <p id="card-info">Frontend Developer</p>
                            </div>
                        </div>
                    </Col>

                    {/* Column 3: LuLu & Rachel's Cards*/}
                    <Col lg={3} md={6} sm={6} xs={6} style={{ paddingBottom: 40 }}>
                        {/* LuLu */}
                        <div className="card" id="LuLu">
                            <img className="card-img-top" id="headshot" src={lulu} alt="lulu" />
                            <div className="card-body">
                                <h5 id="card-title">LuLu Pinczower</h5>
                                <p id="card-info">Full-Stack Developer</p>
                            </div>
                        </div>

                        {/* Rachel */}
                        <div className="card" id="Rachel">
                            <img className="card-img-top"  id="headshot" src={rachel} alt="rachel" />
                            <div className="card-body">
                                <h5 id="card-title">Rachel Ye</h5>
                                <p id="card-info">Full-Stack Developer</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;