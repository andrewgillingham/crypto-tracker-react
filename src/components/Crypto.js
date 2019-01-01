import React from 'react';
import styled from 'styled-components';

const StyledCrypto = styled.div`
  background-color: #f7f7f7;
  padding: 1rem;
  text-align: center;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
`;

const Crypto = props => {
  const {
    name,
    symbol,
    price_usd: price,
    percent_change_1h: hourChange,
    percent_change_24h: dayChange,
    percent_change_7d: weekChange
  } = props.data;

  return (
    <StyledCrypto>
      <h4>
        {name} ({symbol})
      </h4>
      <p>
        $
        {parseFloat(price)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      </p>
      <p>
        {hourChange}% Hour
        <br />
        {dayChange}% Day
        <br />
        {weekChange}% Week <br />
      </p>
    </StyledCrypto>
  );
};

export default Crypto;
