import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

export class Signup extends Component {
  state = {
    email: '',
    name: '',
    password: ''
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { error, loading }) => {
          return (
            <form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signup();
                this.setState({ email: '', name: '', password: '' });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="email">
                  email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="name">
                  name
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">signup</button>
              </fieldset>
            </form>
          );
        }}
      </Mutation>
    );
  }
}
