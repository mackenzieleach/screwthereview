import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import searchLogo from './Images/SearchLogo.png';
import coffee0 from './Images/coffee0.jpeg';
import people from './Images/people.jpeg';
import cafe from './Images/cafe.jpg';
import pasta from './Images/pasta.jpg';
import hike from './Images/hike.jpg';
import museum from './Images/museum.jpg';
import { Button } from 'react-bootstrap';
import Result from './Result';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', seeResult: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    seeResult = () => {
        this.setState({ seeResult: true });
    }

    render() {
        return (
            <Container fluid id="search-container">
                    {!this.state.seeResult ? (
                        <Row>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <div>
                                    <img className="card-img-top" src={museum} alt="museum" id="museum-pic" />
                                </div>
                                <div>
                                    <img className="card-img-top" src={coffee0} alt="coffee" id="coffee-pic-0" />
                                </div>
                                <div>
                                    <img className="card-img-top" src={pasta} alt="pasta" id="pasta-pic" />
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <div>
                                    <img className="card-img-top" src={people} alt="people" id="people-pic" />
                                </div>
                                <div>
                                    <img className="card-img-top" src={hike} alt="hike" id="hike-pic" />
                                </div>
                                <div>
                                    <img className="card-img-top" src={cafe} alt="cafe" id="cafe-pic" />
                                </div>
                            </Col>

                            <Col id="search-filters" lg={6} md={12} sm={12} xs={12}>
                                <img src={searchLogo} alt="Logo" class="searchLogo" id="searchLogo" />
                                <form onSubmit={this.handleSubmit}>
                                    <div class="form-group">
                                        <label for="inputdefault"></label>
                                        <input class="keywordBtn" id="inputdefault" type="text" placeholder="Type a keyword ... (hike, Chinese, etc.)" value={this.state.value} onChange={this.handleChange} />
                                    </div>
                                </form>
                                <Row>
                                    <label for="location" id="search-text" >Location</label>
                                    <select class="options" id="location">
                                        <option>Seattle, WA</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                    </select>
                                </Row>
                                <Row>
                                    <p id="search-text">Price</p>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <button type="button" class="dollarButton">
                                            <span>&#36;</span>
                                        </button>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <button type="button" class="dollarButton">
                                            <span>&#36;&#36;</span>
                                        </button>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <button type="button" class="dollarButton">
                                            <span>&#36;&#36;&#36;</span>
                                        </button>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <button type="button" class="dollarButton">
                                            <span>&#36;&#36;&#36;&#36;</span>
                                        </button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={3} md={2} sm={3} xs={12}>  <p id="search-text">Distance</p> </Col>
                                    <Col lg={2} md={2} sm={2} xs={3}>
                                        <button class="distanceButton">5 mi</button>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={3}>
                                        <button class="distanceButton">10 mi</button>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={3}>
                                        <button class="distanceButton">15 mi</button>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={3}>
                                        <button class="distanceButton">20 mi</button>
                                    </Col>
                                </Row>
                                <div class="text-center">
                                    <button type="button" class="screwReviewButton">Screw that Review!</button>
                                </div>
                            </Col>
                        </Row>

                    ) : (
                        <Row>
                            <Result location="seattle" category={this.state.value}></Result>
                        </Row>
                    )}
                </Container>
        );
    }
}

export default Search;
