import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import Search from './components/Search';
import ForecastItem from './components/ForecastItem';

function App() {
  const [forecasts, setForecasts] = useState([]);
  const itemDays = [];

  const onForecastChange = (value) => {
    setForecasts(value);
  };

  const noForecast = <Col>No data</Col>;

  if (forecasts) {
    forecasts.splice(5);
    forecasts.map((forecast) => {
      return itemDays.push(
        <ForecastItem forecast={forecast} key={forecast.id} />
      );
    });
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Search onForecastChange={onForecastChange} />
        </Col>
      </Row>
      <Row>{itemDays.length > 0 ? itemDays : noForecast}</Row>
    </Container>
  );
}

export default App;
