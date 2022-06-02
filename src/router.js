import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import App from './pages/App';

const Main = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

function Router(props) {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<App {...props} />} />
      </Routes>
    </Main>
  );
}

export default Router;
