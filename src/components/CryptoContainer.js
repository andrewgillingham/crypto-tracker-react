import React, { Component } from 'react';
import styled from 'styled-components';
import Crypto from './Crypto';

const StyledCryptoContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  justify-content: center;
`;

class CryptoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  fetchData = async () => {
    const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=25');
    const data = await response.json();
    this.setState({ data: data });
  };

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => {
      this.fetchData();
    }, 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const cryptos = this.state.data.map(currency => {
      return <Crypto key={currency.id} data={currency} />;
    });
    return <StyledCryptoContainer>{cryptos}</StyledCryptoContainer>;
  }
}

export default CryptoContainer;
