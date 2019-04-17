import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = `{
  currentUser {
    id
    name
    email
    permissions
  }
}`;
