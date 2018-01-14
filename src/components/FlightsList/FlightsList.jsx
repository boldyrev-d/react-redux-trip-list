import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';
import Flight from '../Flight';
import { media } from '../../styleUtils';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: -5px;

  ${media.mobile`
    flex-direction: column;
  `};
`;

const FlightsList = ({ flights }) => {
  const flightsList = flights.map(flight => (
    <div key={flight.id}>
      <Flight flight={flight} />
    </div>
  ));

  return (
    <Wrapper>
      <FlipMove typeName={null}>{flightsList}</FlipMove>
    </Wrapper>
  );
};

export default connect((state) => {
  const { flights, filters: { selected } } = state;

  // eslint-disable-next-line
  const filteredFlights = flights.filter(
    flight => (selected.length ? selected.includes(flight.carrier) : true));

  return {
    flights: filteredFlights,
  };
})(FlightsList);
