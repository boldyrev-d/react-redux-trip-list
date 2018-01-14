import React from 'react';
import { connect } from 'react-redux';
import Flight from '../Flight';

const FlightsList = ({ flights }) => {
  const flightsList = flights.map(flight => <Flight key={flight.id} flight={flight} />);

  return <div>{flightsList}</div>;
};

export default connect((state) => {
  const { flights, filters: { selected } } = state;

  const filteredFlights = flights.filter(flight => (selected.length ? selected.includes(flight.carrier) : true));

  return {
    flights: filteredFlights,
  };
})(FlightsList);
