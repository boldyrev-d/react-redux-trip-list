import { flights as defaultFlights } from '../data.json';

export default (flights = defaultFlights, action) => {
  const { type } = action;

  switch (type) {
    default:
      return flights;
  }
};
