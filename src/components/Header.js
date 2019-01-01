import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #282c34;
  text-align: center;
  padding: 2rem;
  color: #fff;
`;
const Header = props => {
  return (
    <StyledHeader>
      <h2>Crypto Tracker in React</h2>
    </StyledHeader>
  );
};
export default Header;
