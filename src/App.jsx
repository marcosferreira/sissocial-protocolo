import { Routes } from './Routes';
import { Wrapper } from './styles/Layout';
import GlobalStyles from './styles/GlobalStyles';
import { Header } from './components/Header';
import React from 'react';

export const App = () => (
  <React.Fragment>
  <GlobalStyles />
  <Header />
  <Wrapper>
    <Routes />
  </Wrapper>
  </React.Fragment>
);

export default App;
