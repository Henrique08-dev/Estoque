import Header from './Header';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


const Galeria = ({ onLogout }) => {
  return (
    <div>
      <Header onLogout={onLogout} />
      <div className="container mt-5">
        <h1>Galeria de Competições</h1>
        <Carousel className="mb-4">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Primeira competição"
            />
            <Carousel.Caption>
              <h3>Competição de Atletismo</h3>
              <p>Evento realizado em 2023.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Segunda competição"
            />
            <Carousel.Caption>
              <h3>Competição de Natação</h3>
              <p>Evento realizado em 2022.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Terceira competição"
            />
            <Carousel.Caption>
              <h3>Competição de Ciclismo</h3>
              <p>Evento realizado em 2021.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
              <Card.Body>
                <Card.Title>Atletismo</Card.Title>
                <Card.Text>Competição anual de atletismo com participantes de todo o país.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
              <Card.Body>
                <Card.Title>Natação</Card.Title>
                <Card.Text>Desafios de natação em águas abertas e piscina olímpica.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
              <Card.Body>
                <Card.Title>Ciclismo</Card.Title>
                <Card.Text>Competições de ciclismo de estrada e mountain bike.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

Galeria.propTypes = {
    onLogout: PropTypes.func.isRequired,
};

export default Galeria;
