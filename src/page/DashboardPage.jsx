import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Visitor from '../components/Visitor';
import MostViewed from '../components/MostViewed';

const DashboardPage = () => (
  <Container fluid>
    <Row>
      <Col md={12}>
        <Visitor/>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <MostViewed/>
      </Col>
    </Row>
  </Container>
);

export default DashboardPage;
