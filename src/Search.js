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
            <Container fluid className="page-container" id="search-container">
                {!this.state.seeResult ? (
                    <Row>
                        <Col className="d-none d-md-block" lg={3} md={6} sm={12} xs={12}>
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
                        <Col className="d-none d-md-block" smHidden lg={3} md={6} sm={12} xs={12}>
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
                                    <input id="keyword-bar" class="keywordBtn" id="inputdefault" type="text" placeholder="Type a keyword ... (hike, Chinese, etc.)" value={this.state.value} onChange={this.handleChange} />
                                </div>
                            </form>
                            <Row id="search-row">
                                <label for="location" id="search-text" >Location</label>
                                <select class="options" id="location">
                                    {/* 50 Most Populated WA Cities (Hardcoded*/}
                                    <option>Select City</option>
                                    <option>Auburn, WA</option>
                                    <option>Bainbridge Island, WA</option>
                                    <option>Bellevue, WA</option>
                                    <option>Bellingham, WA</option>
                                    <option>Bothell, WA</option>
                                    <option>Bremerton, WA</option>
                                    <option>Burien, WA</option>
                                    <option>Des Moines, WA</option>
                                    <option>Edmonds, WA</option>
                                    <option>Everett, WA</option>
                                    <option>Federal Way, WA</option>
                                    <option>Graham, WA</option>
                                    <option>Issaquah, WA</option>
                                    <option>Kennewick, WA</option>
                                    <option>Kirkland, WA</option>
                                    <option>Kent, WA</option>
                                    <option>Lacey, WA</option>
                                    <option>Lake Stevens, WA</option>
                                    <option>Lakewood, WA</option>
                                    <option>Longview, WA</option>
                                    <option>Lynnwood, WA</option>
                                    <option>Marysville, WA</option>
                                    <option>Maple Valley, WA</option>
                                    <option>Mill Creek East, WA</option>
                                    <option>Mercer Island, WA</option>
                                    <option>Mount Vernon, WA</option>
                                    <option>Olympia, WA</option>
                                    <option>Orchards, WA</option>
                                    <option>Pasco, WA</option>
                                    <option>Parkland, WA</option>
                                    <option>Pullman, WA</option>
                                    <option>Puyallup, WA</option>
                                    <option>Redmond, WA</option>
                                    <option>Renton, WA</option>
                                    <option>Richland, WA</option>
                                    <option>Sammamish, WA</option>
                                    <option>Seattle, WA</option>
                                    <option>SeaTac, WA</option>
                                    <option>Shoreline, WA</option>
                                    <option>South Hill, WA</option>
                                    <option>Spanaway, WA</option>
                                    <option>Spokane, WA</option>
                                    <option>Spokane Valley, WA</option>
                                    <option>Tacoma, WA</option>
                                    <option>University Place, WA</option>
                                    <option>Vancouver, WA</option>
                                    <option>Walla Walla, WA</option>
                                    <option>Wenatchee, WA</option>
                                    <option>Yakima, WA</option>
                                </select>
                            </Row>
                            <Row id="search-row">
                                <p id="search-text">Price</p>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <button id="dollarButton" type="button" class="dollarButton">
                                        <span>&#36;</span>
                                    </button>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <button id="dollarButton" type="button" class="dollarButton">
                                        <span>&#36;&#36;</span>
                                    </button>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <button id="dollarButton" type="button" class="dollarButton">
                                        <span>&#36;&#36;&#36;</span>
                                    </button>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <button id="dollarButton" type="button" class="dollarButton">
                                        <span>&#36;&#36;&#36;&#36;</span>
                                    </button>
                                </Col>
                            </Row>
                            <Row id="search-row">
                                <p id="search-text">Distance</p>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <button id="distance-button" class="distanceButton">5 mi</button>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <button id="distance-button" class="distanceButton">10 mi</button>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <button id="distance-button" class="distanceButton">15 mi</button>
                                </Col>
                                <Col lg={2} md={2} sm={2} xs={2}>
                                    <button id="distance-button" class="distanceButton">20 mi</button>
                                </Col>
                            </Row>
                            <div class="text-center">
                                <button id="str-search" type="button" class="str-button" onClick={this.seeResult}>Screw that Review!</button>
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