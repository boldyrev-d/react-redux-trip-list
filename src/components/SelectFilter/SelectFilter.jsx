import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { uniqBy } from 'lodash';
import { changeSelection } from '../../AC/filters';
import { media } from '../../styleUtils';

const Wrapper = styled.div`
  margin: 20px 0;

  ${media.mobile`
    margin: 15px 0 10px;
  `};
`;

const SelectFilter = (props) => {
  const { flights, selected } = props;

  const carriers = flights.map(flight => ({
    label: flight.carrier,
    value: flight.carrier,
  }));

  const handleChange = selectedCarriers =>
    props.changeSelection(selectedCarriers.map(carrier => carrier.value));

  return (
    <Wrapper>
      <Select
        options={carriers}
        value={selected}
        placeholder="Type carrier name..."
        multi
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default connect(
  state => ({
    selected: state.filters.selected,
    flights: uniqBy(state.flights, 'carrier'),
  }),
  { changeSelection },
)(SelectFilter);
