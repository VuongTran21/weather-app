import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

function App() {
  const [value, setValue] = useState('');
  const [forecasts, setForecast] = useState([]);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log('submit', value);
    if (value) {
      // call api location
      // let url = `location/search?query=${value}`;

      // const location = await axios.get(url);
      // console.log('location', location);
      const getData = () => {
        return axios.get('location/44418/');
      };

      const data = await getData();
      setForecast(data.data.consolidated_weather);
      console.log('data', data);
    }
  };

  const itemDays = [];

  forecasts.map((forecast) => {
    const imageUrl = `https://www.metaweather.com/static/img/weather/png/${forecast.weather_state_abbr}.png`;
    const day = new Date(forecast.applicable_date);
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    console.log('day', days[day.getDay()]);

    return itemDays.push(
      <Col key={forecast.id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{days[day.getDay()]}</Card.Title>
            <Card.Text>Min temp: {forecast.min_temp}</Card.Text>
            <Card.Text>Max temp: {forecast.max_temp}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  console.log('forecast', forecasts);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="cityName">
              <Form.Label>City Name</Form.Label>
              <Form.Control
                onChange={onChange}
                value={value}
                type="text"
                placeholder="City Name"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>{itemDays && itemDays}</Row>
    </Container>
  );
}

export default App;
