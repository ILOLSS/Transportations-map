
import React from 'react';
import TransportationsListPage from './components/pages/TransportationsListPage';
import styled from 'styled-components';

const AppWindow = styled.div`
    display: flex;
    box-sizing: border-box;
    position: static;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
`;

function App() {
  return (
    <AppWindow>
      <TransportationsListPage />
    </AppWindow>
  );
}

export default App;
