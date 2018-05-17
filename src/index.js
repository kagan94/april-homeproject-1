import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'components/AppRouter';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store';
import styled from 'styled-components'
import './index.css';

const store = createStore();

const StyledAppWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <StyledAppWrapper>
        <AppRouter />
      </StyledAppWrapper>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
