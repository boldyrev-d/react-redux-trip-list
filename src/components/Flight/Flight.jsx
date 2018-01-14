import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { media } from '../../styleUtils';

function formatDate(date) {
  return moment(date).format('HH:mm (D MMM)');
}

const Wrapper = styled.div`
  width: 226px;
  height: 110px;
  margin: 10px 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;

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

export default Flight;
