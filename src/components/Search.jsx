/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useForecast } from '../hooks/useForecast';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

export default function Search({ onForecastChange }) {
  const [inputText, setInputText] = useState('');
  const [{ loading, forecasts }, getForecasts] = useForecast();
  useEffect(() => {
    if (inputText) {
      getForecasts(inputText);
    }
  }, []);

  useEffect(() => {
    onForecastChange(forecasts);
  }, [forecasts]);

  const handleSearchChangeDebounce = useCallback(
    debounce((nextValue) => getForecasts(nextValue), 1000),
    []
  );

  const onChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    handleSearchChangeDebounce(text);
  };

  return (
    <Form.Group controlId="cityName">
      <div className="search-wrapper">
        <Form.Control
          data-testid="input-search"
          onChange={onChange}
          value={inputText}
          type="text"
          placeholder="Enter your city name"
        />

        {loading && (
          <Spinner
            data-testid="loading"
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
      </div>
    </Form.Group>
  );
}

Search.propTypes = {
  onForecastChange: PropTypes.func.isRequired,
};
