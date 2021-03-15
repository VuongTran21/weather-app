import { Card, Col } from 'react-bootstrap';
import { getDate } from '../utils';

export default function ForecastItem({ forecast }) {
  const imageUrl = `https://www.metaweather.com/static/img/weather/png/${forecast.weather_state_abbr}.png`;

  return (
    <Col key={forecast.id}>
      <Card>
        <Card.Img className="card-image" variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{getDate(forecast.applicable_date)}</Card.Title>
          <Card.Text>Min temp: {Math.floor(forecast.min_temp)}</Card.Text>
          <Card.Text>Max temp: {Math.floor(forecast.max_temp)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
