/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

class LocationSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  sendData = (data) => {
    const { parentCallback } = this.props;
    console.log(data.label);
    parentCallback(data.label);
  }

  render() {
    return (
      <Container fluid className="page-container" id="page-container">
        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnf5cu-0DsgGB-pRF25wFURi2Cn1vNboc&libraries=places"
        />
        <Row>
          <Col sm={12}>
            {/* <GooglePlacesAutocomplete
            apiKey="AIzaSyAnf5cu-0DsgGB-pRF25wFURi2Cn1vNboc"
            onChange={sendData}
            value={query} /> */}
            <GooglePlacesAutocomplete
              apiKey="AIzaSyAnf5cu-0DsgGB-pRF25wFURi2Cn1vNboc"
              selectProps={{
                onChange: (data) => {
                  this.sendData(data);
                },
              }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LocationSearchBar;
