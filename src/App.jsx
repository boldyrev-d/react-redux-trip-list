import React, { Component } from 'react';
import styled from 'styled-components';
import SelectFilter from './components/SelectFilter';
import FlightsList from './components/FlightsList';

const Container = styled.div`
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <SelectFilter />
        <FlightsList />
      </Container>
    );
  }
}

export default App;
