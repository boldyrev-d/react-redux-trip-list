import React from 'react';
import PropTypes from 'prop-types';
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

const propTypes = {
  // from connect
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
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
  changeSelection: PropTypes.func.isRequired,
};

const SelectFilter = (props) => {
  const { flights, selected } = props;

  const carriers = flights.map(flight => ({
    label: flight.carrier,
    value: flight.carrier,
  }));

  // eslint-disable-next-line max-len
  const handleChange = selectedCarriers => props.changeSelection(selectedCarriers.map(carrier => carrier.value));

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

SelectFilter.propTypes = propTypes;

export default connect(
  state => ({
    selected: state.filters.selected,
    flights: uniqBy(state.flights, 'carrier'),
  }),
  { changeSelection },
)(SelectFilter);
