import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RMWCProvider } from '@rmwc/provider';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config';

import App from './App';
import store from './store';
import './index.css';

ReactDOM.render(
  <RMWCProvider>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </RMWCProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
