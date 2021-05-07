import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PandaExpress from './PandaExpress.png';
import Map from './Map.png'
import './App.css';
 
class Result extends Component {
    state = {
        name: null,
        description: null,
        phone: null,
        website: null,
        address: null,
        tags: null,
        price: null,
        hours: null
    };

    componentDidMount() {
        fetch('http://hidden-mesa-04199.herokuapp.com/', {
          headers: {
                'location': this.props.location
                // 'category': this.props.category
            }
        })
        .then((response) => response.text())
        .then((json) => {
            // console.log(json);
            this.parseResult(json);
        });
    }

    parseResult = (json) => {
        const result = JSON.parse(json)
        console.log(result);
        // decompose categories
        let rCategories = result.categories;
        let sCategories = "";
        if (rCategories.length > 0) {
            sCategories = rCategories[0].title;
        }
        for (let i = 1; i < rCategories.length; i++) {
            sCategories += ", " + rCategories[i].title;
        }
        this.setState({
            name: result.name,
            imageURL: result.image_url,
            phone: result.display_phone,
            website: result.url,
            address: result.location.display_address.join(' '),
            tags: sCategories,
            price: result.price,
            hours: "HOURS"
        });
    }


    render() {
        
        return (
            <Container fluid className="page-container">
                <Row>
                    <div className="col font-large">{this.state.name}</div>
                </Row>
                <Row>
                    <Col sm={5}>
                        <img alt="panda express" className="img-fluid" src={this.state.imageURL} />
                    </Col>
                    <Col sm={6}>
                        <div className="font-medium">About</div>
                        <div>Bringing people together to share joy has been our family’s inspiration
                        since the opening of the first Panda Express in 1983 in Glendale,
                        California. As we continue to open restaurants from coast to coast
                        and around the world, the bold flavors of Chinese cuisine inspire our
                        cooking, while our extended family of guests and associates remain
                        at the heart of what we do. Welcome to our family’s Chinese kitchen.</div>
                        <Row>
                            <Col sm={7}>
                                <img alt="map" src={Map} className="img-responsive fit-image col-12" />
                            </Col>
                            <Col sm={5}>
                                <div className="font-medium">Hours</div>
                                <div>Monday      10:30AM-9:30PM</div>
                                <div>Tuesday     10:30AM-9:30PM</div>
                                <div>Wednesday   10:30AM-9:30PM</div>
                                <div>Thursday    10:30AM-9:30PM</div>
                                <div>Friday      10:30AM-9:30PM</div>
                                <div>Saturday    10:30AM-9:30PM</div>
                                <div>Sunday      10:30AM-9:30PM</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="font-medium">Location</div>
                                <div>12513 Lake City Way</div>
                                <div>Seattle, WA 98123</div>
                            </Col>
                            <Col>
                                <button className="font-medium">Get Directions</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <table>
                            <tbody>
                                <tr>Phone: {this.state.phone}</tr>
                                <tr><a href={this.state.website}>Website</a></tr>
                                <tr>Address: {this.state.address}</tr>
                                <tr>Tags: {this.state.tags}</tr>
                                <tr>Price: {this.state.price}</tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row>
                    <Button className="str-button" href="/roulette">Spin Again!</Button>
                </Row>
            </Container>
        );
    }
}
 
export default Result;