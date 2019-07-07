import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query {
    currentUser {
      id
      name
      email
      permissions
    }
  }
`;

export const USER_SIGNUP_MUTATION = gql`
  mutation($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
    }
  }
`;

export const USER_SIGNIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      name
      permissions
    }
  }
`;

export const USER_SIGNOUT_MUTATION = gql`
  mutation {
    signout {
      message
    }
  }
`;
