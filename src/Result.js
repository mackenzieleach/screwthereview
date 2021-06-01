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
    // console.log(this.props.location);
    fetch(server.getServerUrl(), {
      headers: {
        location: this.props.location,
        categories: this.props.category,
      },
    })
      .then((response) => response.text())
      .then(console.log(this.props.category))
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

    convertHours = (hour) => {
      let result = '';
      const iHour = parseInt(hour, 10);
      let timeOfDay = ' am';

      let hours = (iHour / 100);
      // check time of day
      if (hours === 0) {
        hours = 12;
      }
      if (hours > 12) {
        timeOfDay = ' pm';
        hours -= 12;
        // add zero for single digit
        if (hours < 10) {
          result = '0';
        }
      }
      result += hours.toString();
      result += ':';
      const minutes = (iHour % 100);
      // add zero for single digit
      if (minutes < 10) {
        result += '0';
      }
      result += minutes.toString();
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
          <Loader type="Oval" color="#00BFFF" height={300} width={300} timeout={3000} />
        );
      }
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
                  <div className="hours" data-testid="result-hours-table">{this.state.hours}</div>
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
