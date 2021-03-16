import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';


const Layout = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navigation />
                </Col>
            </Row>
            <main>
                {props.children}
            </main>
        </Container>
    );
}

export default Layout;