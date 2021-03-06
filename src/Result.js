/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import server from './server';

class Result extends Component {
  constructor(props) {
    super(props);
    this.getDirections = this.getDirections.bind(this);
    this.state = {
      loading: true,
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
    fetch(server.getServerUrl(), {
      headers: {
        location: this.props.location,
        price: this.props.price,
        radius: this.props.radius,
        categories: this.props.category,
      },
    })
      .then((response) => response.text())
      .then((json) => {
        this.setState({
          loading: false,
        });
        this.parseResult(json);
      });
  }

  getDirections = () => {
    const origin = escape(this.props.location);
    const destination = escape(this.state.address);
    let link = 'https://www.google.com/maps/dir/?api=1&origin=';
    link += origin;
    link += '&destination=';
    link += destination;
    window.open(link);
  }

    parseResult = (json) => {
      const result = JSON.parse(json);
      // decompose categories
      const rCategories = result.categories;
      let sCategories = '';
      if (rCategories.length > 0) {
        sCategories = rCategories[0].title;
      }
      for (let i = 1; i < rCategories.length; i += 1) {
        sCategories += `, ${rCategories[i].title}`;
      }
      let sHours;
      if (result.hours === undefined) {
        sHours = '';
      } else {
        sHours = this.parseHours(result.hours);
      }
      this.setState({
        name: result.name,
        imageURL: result.image_url,
        phone: result.display_phone,
        website: result.url,
        address: result.location.display_address.join(' '),
        tags: sCategories,
        price: result.price,
        hours: sHours,
        description: result.description,
      });
      const map = document.getElementById('map-image');
      let mapSrc;
      mapSrc = 'https://maps.googleapis.com/maps/api/staticmap?size=400x400&markers=';
      mapSrc += this.state.address;
      mapSrc += '&key=AIzaSyAnf5cu-0DsgGB-pRF25wFURi2Cn1vNboc';
      map.src = mapSrc;
    }

    convertHours = (time) => {
      let result = '';

      const sHour = time.substring(0, 2);
      const sMin = time.substring(2, 5);

      let iHour = parseInt(sHour, 10);
      const iMin = parseInt(sMin, 10);
      let timeOfDay = ' am';

      // check time of day
      if (iHour === 0) {
        iHour = 12;
      }
      if (iHour > 12) {
        timeOfDay = ' pm';
        iHour -= 12;
        // add zero for single digit
        if (iHour < 10) {
          result = '0';
        }
      }
      result += iHour.toString();
      result += ':';

      // add zero for single digit
      if (iMin < 10) {
        result += '0';
      }
      result += iMin.toString();
      result += timeOfDay;
      return result;
    }

    parseHours = (hours) => {
      let result = '';
      const dayMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday'];
      let day;
      let dayStart;
      let dayEnd;
      const hoursOpen = hours[0].open;
      for (let i = 0; i < hoursOpen.length; i += 1) {
        day = hoursOpen[i];
        result += dayMap[day.day];
        result += ': ';
        dayStart = this.convertHours(day.start);
        result += dayStart;
        result += ' - ';
        dayEnd = this.convertHours(day.end);
        result += dayEnd;
        result += '\n';
      }
      return result;
    }

    render() {
      if (this.state.loading) {
        return (
          <Container className="loader-container">
            <Row>
              <Col>
                <Loader type="Oval" color="#00BFFF" height={300} width={300} timeout={30000} />
              </Col>
            </Row>
          </Container>
        );
      }
      return (
        <Container fluid className="page-container" style={{ paddingBottom: '36px' }}>
          <Row>
            <div id="result-name" className="col font-large">{this.state.name}</div>
          </Row>
          <Row>
            <Col sm={5}>
              <Row>
                <img id="result-image" alt="result" className="img-fluid" src={this.state.imageURL} style={{ width: '100%' }} />
              </Row>
              <Row>
                <table id="result-info-table">
                  <tbody>
                    <tr>
                      <td>Phone: </td>
                      <td>{this.state.phone}</td>
                    </tr>
                    <tr>
                      <td>
                        <a id="link" href={this.state.website}>Website</a>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>Tags: </td>
                      <td>{this.state.tags}</td>
                    </tr>
                    <tr>
                      <td>Price: </td>
                      <td>{this.state.price}</td>
                    </tr>
                  </tbody>
                </table>
              </Row>
            </Col>
            <Col sm={{ span: 6, offset: 1 }}>
              <div className="font-medium">About</div>
              <div>{this.state.description}</div>
              <Row>
                <Col sm={7}>
                  <img
                    id="map-image"
                    alt="map"
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&size=400x400&key=AIzaSyAnf5cu-0DsgGB-pRF25wFURi2Cn1vNboc"
                    className="img-responsive fit-image col-12"
                  />
                </Col>
                <Col sm={5}>
                  <div className="font-medium">Hours</div>
                  <div className="hours" id="result-hours-table">{this.state.hours}</div>
                </Col>
              </Row>
              <Row>
                <Col sm={7}>
                  <div className="font-medium">Location</div>
                  <div>{ this.state.address }</div>
                </Col>
                <Col sm={5}>
                  <button type="button" className="font-medium" onClick={this.getDirections}>Get Directions</button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    }
}

export default Result;
