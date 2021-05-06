import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Account extends Component {
    render() {
        return (
            <Container fluid id="accoun t-container">
                <Row>
                    <Col>
                    <h5>Account</h5>
                    </Col>
                </Row >
            </Container >
        );
    }
}

export default Account;