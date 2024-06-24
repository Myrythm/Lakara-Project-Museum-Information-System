import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: ['Museum Gajah', 'Museum Geologi', 'Museum Kayu Sampit', 'Yang lain'],
  datasets: [
    {
      data: [65, 45, 34, 12],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0']
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false
};

const MostViewed = () => (
  <Row>
    <Col md={6}>
      <Card>
        <Card.Body>
          <Card.Title>Paling Banyak Dilihat</Card.Title>
          <div style={{ position: 'relative', height: '200px' }}>
            <Doughnut data={data} options={options} />
          </div>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6}>
      <Card>
        <Card.Body>
          <Card.Title>Top Content</Card.Title>
          <ul>
            <li>/ - 2.5K Views</li>
            <li>/blog/ - 376 Views</li>
            <li>/reserve/success - 468 Views</li>
            <li>/product/product-details - 298 Views</li>
            <li>/blog/digital-marketing - 179 Views</li>
          </ul>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default MostViewed;
