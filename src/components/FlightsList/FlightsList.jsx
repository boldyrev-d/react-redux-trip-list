import React from 'react';
import PropTypes from 'prop-types';
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
    margin: 0;
  `};
`;

const propTypes = {
  // from connect
  flights: PropTypes.arrayOf(
    PropTypes.shape({
      arrival: PropTypes.string.isRequired,
      carrier: PropTypes.string.isRequired,
      departure: PropTypes.string.isRequired,
      direction: PropTypes.shape({
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

const FlightsList = ({ flights }) => {
  const flightsList = flights.map(flight => (
    <div key={flight.id}>
      <Flight flight={flight} />
    </div>
  ));

  return (
    <Wrapper>
      <FlipMove typeName={null}>
        {flightsList}
      </FlipMove>
    </Wrapper>
  );
};

FlightsList.propTypes = propTypes;

export default connect((state) => {
  const {
    flights,
    filters: { selected },
  } = state;

  // eslint-disable-next-line
  const filteredFlights = flights.filter(
    flight => (selected.length ? selected.includes(flight.carrier) : true),
  );

  return {
    flights: filteredFlights,
  };
})(FlightsList);
