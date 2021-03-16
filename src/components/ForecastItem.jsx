import { Card, Col } from 'react-bootstrap';
import { getDate } from '../utils';
import PropTypes from 'prop-types';

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

ForecastItem.propTypes = {
  forecast: PropTypes.shape({
    id: PropTypes.number.isRequired,
    max_temp: PropTypes.number.isRequired,
    min_temp: PropTypes.number.isRequired,
    applicable_date: PropTypes.string.isRequired,
    weather_state_abbr: PropTypes.string.isRequired,
  }),
};
