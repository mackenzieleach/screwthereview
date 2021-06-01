/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationSearchBar from './LocationSearchBar';
import searchLogo from './Images/SearchLogo.png';
import coffee0 from './Images/coffee0.jpeg';
import people from './Images/people.jpeg';
import cafe from './Images/cafe.jpg';
import pasta from './Images/pasta.jpg';
import hike from './Images/hike.jpg';
import museum from './Images/museum.jpg';
import Result from './Result';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', seeResult: false, locationVal: 'seattle', moneyVal: '', distanceVal: '', keyword: '', isActive1: false, isActive2: false, isActive3: false, isActive4: false, isActive5: false, isActive6: false, isActive7: false, isActive8: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMoney = this.handleMoney.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
    this.callBackFunctionSearchBar = this.callBackFunctionSearchBar.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleMoney(event) {
    if (event.target.id === 'dollarButton1') {
      this.setState({ moneyVal: '1' });
      this.setState((prevState) => ({
        isActive1: !prevState.isActive1,
      }));
    } else if (event.target.id === 'dollarButton2') {
      this.setState({ moneyVal: '2' });
      this.setState((prevState) => ({
        isActive2: !prevState.isActive2,
      }));
    } else if (event.target.id === 'dollarButton3') {
      this.setState({ moneyVal: '3' });
      this.setState((prevState) => ({
        isActive3: !prevState.isActive3,
      }));
    } else if (event.target.id === 'dollarButton4') {
      this.setState({ moneyVal: '4' });
      this.setState((prevState) => ({
        isActive4: !prevState.isActive4,
      }));
    }
  }

  handleSubmit(event) {
    this.setState({ keyword: event.target.value });
  }

  handleDistance(event) {
    if (event.target.id === 'dist-btn0') {
      this.setState((prevState) => ({
        isActive5: !prevState.isActive5,
      }));
    } else if (event.target.id === 'dist-btn1') {
      this.setState((prevState) => ({
        isActive6: !prevState.isActive6,
      }));
    } else if (event.target.id === 'dist-btn2') {
      this.setState((prevState) => ({
        isActive7: !prevState.isActive7,
      }));
    } else {
      this.setState((prevState) => ({
        isActive8: !prevState.isActive8,
      }));
    }
    this.setState({ distanceVal: event.target.value });
  }

  callBackFunctionSearchBar = (childData) => {
    this.setState({ locationVal: childData });
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
              <Col className="d-none d-md-block" smhidden="true" lg={3} md={6} sm={12} xs={12}>
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
                <img src={searchLogo} alt="Logo" className="searchLogo" id="searchLogo" />
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="inputdefault" />
                    <input alt="Keyword" className="form-control" id="inputdefault" type="text" placeholder="Type a keyword ... (hike, Chinese, etc.)" value={this.state.value} onChange={this.handleChange} />
                  </div>
                </form>
                <Row id="search-row">
                  <Col sm={12}>
                    <LocationSearchBar parentCallbackSearchBar={this.callBackFunctionSearchBar} />
                  </Col>
                </Row>
                <Row id="search-row">
                  <p id="search-text">Price</p>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <button id="dollarButton1" type="button" className={this.state.isActive1 ? 'dollarButtonTrue' : 'dollarButtonFalse'} onClick={this.handleMoney}>
                      <span>&#36;</span>
                    </button>
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <button id="dollarButton2" type="button" className={this.state.isActive2 ? 'dollarButtonTrue' : 'dollarButtonFalse'} onClick={this.handleMoney}>
                      <span>&#36;&#36;</span>
                    </button>
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <button id="dollarButton3" type="button" className={this.state.isActive3 ? 'dollarButtonTrue' : 'dollarButtonFalse'} onClick={this.handleMoney}>
                      <span>&#36;&#36;&#36;</span>
                    </button>
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <button id="dollarButton4" type="button" className={this.state.isActive4 ? 'dollarButtonTrue' : 'dollarButtonFalse'} onClick={this.handleMoney}>
                      <span>&#36;&#36;&#36;&#36;</span>
                    </button>
                  </Col>
                </Row>
                <Row id="search-row">
                  <p id="search-text">Distance</p>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <button type="button" id="dist-btn0" className={this.state.isActive5 ? 'distanceButtonTrue' : 'distanceButtonFalse'} onClick={this.handleDistance} value="5">5 mi</button>
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <button type="button" id="dist-btn1" className={this.state.isActive6 ? 'distanceButtonTrue' : 'distanceButtonFalse'} onClick={this.handleDistance} value="10">10 mi</button>
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <button type="button" id="dist-btn2" className={this.state.isActive7 ? 'distanceButtonTrue' : 'distanceButtonFalse'} onClick={this.handleDistance} value="15">15 mi</button>
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <button type="button" id="dist-btn3" className={this.state.isActive8 ? 'distanceButtonTrue' : 'distanceButtonFalse'} onClick={this.handleDistance} value="20">20 mi</button>
                  </Col>
                </Row>
                <div className="text-center">
                  <button id="str-search" type="button" className="str-button" onClick={this.seeResult}>Screw that Review!</button>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Result
                location={this.state.locationVal}
                category={this.state.value}
                price={this.state.moneyVal}
                radius={this.state.distanceVal}
                term={this.state.keyword}
              />
            </Row>
          )}
        </Container>
      );
    }
}

export default Search;
