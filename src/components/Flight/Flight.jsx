import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

function formatDate(date) {
  return moment(date).format('HH:mm (D MMM)');
}

const Wrapper = styled.div`
  width: 230px;
  height: 100px;
  padding: 10px;
  border: 1px solid #e2e2e2;
`;

const Flight = ({
  flight: {
    arrival, carrier, departure, direction: { from, to },
  },
}) => (
  <Wrapper>
    <div>
      {from} - {to}
    </div>
    <div>
      {formatDate(departure)} - {formatDate(arrival)}
    </div>
    <div>{carrier}</div>
  </Wrapper>
);

export default Flight;
