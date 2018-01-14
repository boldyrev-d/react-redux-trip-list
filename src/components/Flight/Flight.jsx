import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { media } from '../../styleUtils';

function formatDate(date) {
  return moment(date).format('HH:mm (D MMM)');
}

const Wrapper = styled.div`
  position: relative;
  width: 226px;
  height: 120px;
  margin: 10px 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s, color 0.3s;
  cursor: pointer;

  &:before {
    background-color: #427aa1;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    transition: transform 0.3s, background-color 0.3s;
    width: 150%;
    will-change: transform;
    z-index: -1;
  }

  &:hover {
    color: #fff;
  }

  &:hover:before {
    opacity: 1;
    transform: rotate3d(0, 0, 1, 0deg);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  ${media.mobile`
    width: 100%;
    margin: 5px 0;
  `};
`;

const Carrier = styled.div`
  padding: 5px 10px;
  background: #0e4274;
  color: #fff;
  border-radius: 10px 10px 0 0;
`;

const Body = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;

const Cities = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const propTypes = {
  flight: PropTypes.shape({
    arrival: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    direction: PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const Flight = ({
  flight: {
    arrival, carrier, departure, direction: { from, to },
  },
}) => (
  <Wrapper>
    <Carrier>{carrier}</Carrier>
    <Body>
      <Cities>
        {from} - {to}
      </Cities>
      <div>
        {formatDate(departure)} - {formatDate(arrival)}
      </div>
    </Body>
  </Wrapper>
);

Flight.propTypes = propTypes;

export default Flight;
