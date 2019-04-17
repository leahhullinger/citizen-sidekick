import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../state/graphql/fetch-current-user.js';

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

export const query$ = queryInput =>
  apolloClient
    .query({
      query: gql`
        ${queryInput}
      `
    })
    .catch(err => console.log(err));

export default apolloClient;
