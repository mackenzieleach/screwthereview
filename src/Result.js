/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Map from './Map.png';
import server from './server';

class Result extends Component {
  constructor(props) {
    super(props);
    // this.getDirections = this.getDirections.bind(this);
    this.state = {
      name: null,
      description: null,
      phone: null,
      website: null,
      address: null,
      tags: null,
      price: null,
      hours: null,
    };
  }

  componentDidMount() {
    console.log(this.props.location);
    fetch(server.getServerUrl(), {
      headers: {
        location: this.props.location,
        category: this.props.category,
      },
    })
      .then((response) => response.text())
      .then((json) => {
        this.parseResult(json);
      });
  }

  getDirections() {
    fetch('https://www.google.com/maps/dir/?api=1', {
      headers: {
        origin: this.props.searchValue,
        category: this.props.category,
      },
    })
      .then((response) => response.text())
      .then((json) => {
        this.parseResult(json);
      });
    const { parentCallbackResult } = this.props;
    parentCallbackResult(this.state.name);
  }

    parseResult = (json) => {
      const result = JSON.parse(json);
      // console.log(result);
      // decompose categories
      const rCategories = result.categories;
      let sCategories = '';
      if (rCategories.length > 0) {
        sCategories = rCategories[0].title;
      }
      for (let i = 1; i < rCategories.length; i += 1) {
        sCategories += `, ${rCategories[i].title}`;
      }
      this.setState({
        name: result.name,
        imageURL: result.image_url,
        phone: result.display_phone,
        website: result.url,
        address: result.location.display_address.join(' '),
        tags: sCategories,
        price: result.price,
        hours: 'HOURS',
      });
    }

    render() {
      return (
        <Container fluid className="page-container" style={{ paddingBottom: '36px' }}>
          <Row>
            <div className="col font-large" data-testid="result-name">{this.state.name}</div>
          </Row>
          <Row>
            <Col sm={5}>
              <Row>
                <img alt="result" className="img-fluid" src={this.state.imageURL} style={{ width: '100%' }} />
              </Row>
              <Row>
                <table id="result-info-table" data-testid="result-info-table">
                  <tbody>
                    <tr data-testid="info-item">
                      <td>Phone: </td>
                      <td>{this.state.phone}</td>
                    </tr>
                    <tr data-testid="info-item">
                      <td>
                        <a id="link" href={this.state.website}>Website</a>
                      </td>
                      <td />
                    </tr>
                    <tr data-testid="info-item">
                      <td>Tags: </td>
                      <td>{this.state.tags}</td>
                    </tr>
                    <tr data-testid="info-item">
                      <td>Price: </td>
                      <td>{this.state.price}</td>
                    </tr>
                  </tbody>
                </table>
              </Row>
            </Col>
            <Col sm={{ span: 6, offset: 1 }}>
              <div className="font-medium">About</div>
              <div>More about this experience coming soon!</div>
              <Row>
                <Col sm={7}>
                  <img alt="map" src={Map} className="img-responsive fit-image col-12" />
                </Col>
                <Col sm={5}>
                  <div className="font-medium">Hours</div>
                  <table id="result-hours-table" data-testid="result-hours-table">
                    <tbody>
                      <tr data-testid="ht-item">
                        <td>Sunday</td>
                        <td>10:30AM-9:30PM</td>
                      </tr>
                      <tr data-testid="ht-item">
                        <td>Monday</td>
                        <td>10:30AM-9:30PM</td>
                      </tr>
                      <tr data-testid="ht-item">
                        <td>Tuesday</td>
                        <td>10:30AM-9:30PM</td>
                      </tr>
                      <tr data-testid="ht-item">
                        <td>Wednesday</td>
                        <td>10:30AM-9:30PM</td>
                      </tr>
                      <tr data-testid="ht-item">
                        <td>Thursday</td>
                        <td>10:30AM-9:30PM</td>
                      </tr>
                      <tr data-testid="ht-item">
                        <td>Friday</td>
                        <td>10:30AM-9:30PM</td>
                      </tr>
                      <tr data-testid="ht-item">
                        <td>Saturday</td>
                        <td>10:30AM-9:30PM</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
              <Row>
                <Col sm={7}>
                  <div className="font-medium">Location</div>
                  <div>{ this.state.address }</div>
                </Col>
                <Col sm={5}>
                  {/* <button type="button" className="font-medium"
                       onClick={this.getDirections}>Get Directions</button> */}
                  <button type="button" className="font-medium">Get Directions</button>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* <Row>
                    <Button className="str-button" href="/roulette">Spin Again!</Button>
                </Row> */}
        </Container>
      );
    }
}

export default Result;
