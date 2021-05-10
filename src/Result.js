import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
        fetch('https://hidden-mesa-04199.herokuapp.com/', {
          headers: {
                'location': this.props.location,
                'category': this.props.category
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
        // console.log(result);
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
                    <div className="col font-large" data-testid="result-name">{this.state.name}</div>
                </Row>
                <Row>
                    <Col sm={5}>
                        <Row>
                            <img alt="result" className="img-fluid" src={this.state.imageURL} style={{width: "100%"}}/>
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
                                            <a role="link" href={this.state.website}>Website</a>
                                        </td>
                                        <td></td>
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
                                <table id="result-hours-table" data-testid="result-hours-table" >
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
                            <Col>
                                <div className="font-medium">Location</div>
                                <div>{ this.state.address }</div>
                            </Col>
                            <Col>
                                <button className="font-medium">Get Directions</button>
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