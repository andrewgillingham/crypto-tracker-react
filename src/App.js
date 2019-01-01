import React from 'react';
import Header from './components/Header';
import CryptoContainer from './components/CryptoContainer';
import styled from 'styled-components';

const StyledApp = styled.div``;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <main>
        <CryptoContainer />
      </main>
    </StyledApp>
  );
};

export default App;
