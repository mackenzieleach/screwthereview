import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import searchLogo from './Images/SearchLogo.png'
import coffee from './Images/Coffee.jpeg'
import coffee0 from './Images/coffee0.jpeg'
import people from './Images/people.jpeg'
import cafe from './Images/cafe.jpeg'
import { Button } from 'react-bootstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg={3} md={6} sm={12} xs ={12} style={{paddingBottom: 40}}> 
                        <div>
                            <img className="card-img-top" src={coffee} alt="coffee" id ="coffeePic" />
                        </div>
                        <div>
                            <img className="card-img-top" src={coffee0} alt="coffee" id ="coffeePic0" />
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12} style={{paddingBottom: 40}}>
                        <div>
                            <img className="card-img-top" src={people} alt="people" id ="peoplePic" />
                        </div>
                        <div>
                            <img className="card-img-top" src={cafe} alt="cafe" id ="cafePic" />
                        </div>
                    </Col>

                    <Col style={{paddingRight: 100}} style={{paddingBottom: 20}} lg={6} md={12} sm={12} xs={12}>
                        <img src={searchLogo} alt="Logo" class="searchLogo" id ="searchLogo"/>
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label for="inputdefault"></label>
                                <input class="keywordBtn" id="inputdefault" type="text" placeholder="Type a keyword ... (hike, Chinese, etc.)" value={this.state.value} onChange={this.handleChange}/>
                            </div>
                        </form>
                        <Row>
                            <label for="location">Location</label>
                            <select class="options" id="location">
                                <option>Seattle, WA</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </Row>                        
                        <Row xs={6}>
                            <p>Price</p>
                            <Col>
                                <button type="button" class="dollarButton">
                                    <span>&#36;</span>
                                </button>
                            </Col>
                            <Col>
                                <button type="button" class="dollarButton">
                                    <span>&#36;&#36;</span>
                                </button>
                            </Col>
                            <Col>
                                <button type="button" class="dollarButton">
                                    <span>&#36;&#36;&#36;</span>
                                </button>
                            </Col>
                            <Col>
                                <button type="button" class="dollarButton">
                                    <span>&#36;&#36;&#36;&#36;</span>
                                </button>
                            </Col>
                        </Row>
                        <Row>
                            <p>Distance</p>
                                <Col>
                                    <button class="distanceButton">5 miles</button>
                                </Col>
                                <Col>
                                    <button class="distanceButton">10 miles</button>
                                </Col>
                                <Col>
                                    <button class="distanceButton">15 miles</button>
                                </Col>
                                <Col>              
                                    <button class="distanceButton">20 miles</button>
                                </Col>
                        </Row>
                        <div class="text-center">
                            <button type="button" class="screwReviewButton">Screw that Review!</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;
