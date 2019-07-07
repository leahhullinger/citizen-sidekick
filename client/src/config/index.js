import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const cache = new InMemoryCache();

export const client = (headers = {}) =>
  new ApolloClient({
    uri: 'http://localhost:4444',
    cache,
    connectToDevTools: true,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      });
    }
  });

const apolloClient = client();

export const query$ = options => {
  return apolloClient
    .query(options)
    .catch(err => console.log('mutations error: ', err));
};

export const mutate$ = options => {
  return apolloClient
    .mutate(options)
    .catch(err => console.log('mutations error: ', err));
};

export default apolloClient;
