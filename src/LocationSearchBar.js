/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

class LocationSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  sendData = (data) => {
    const { parentCallbackSearchBar } = this.props;
    // console.log(data.label);
    parentCallbackSearchBar(data.label);
  }

  render() {
    return (
      <Row data-testid="autofill-search">
        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnf5cu-0DsgGB-pRF25wFURi2Cn1vNboc&libraries=places"
        />
        <span>Location </span>
        <GooglePlacesAutocomplete
          apiKey="AIzaSyAnf5cu-0DsgGB-pRF25wFURi2Cn1vNboc"
          type="(cities)"
          selectProps={{
            onChange: (data) => {
              this.sendData(data);
            },
          }}
        />
      </Row>
    );
  }
}

export default LocationSearchBar;
