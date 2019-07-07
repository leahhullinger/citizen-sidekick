import apolloClient from '../../config/index';
import { query$, mutate$ } from '../../config/index';
import {
  CURRENT_USER_QUERY,
  USER_SIGNOUT_MUTATION,
  USER_SIGNIN_MUTATION
} from '../graphql/index';
import {
  CURRENT_USER_SET,
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_SIGNUP
} from '../constants';

export const getCurrentUser = () => {
  console.log('current');
  return async dispatch => {
    try {
      const res = await query$({
        query: CURRENT_USER_QUERY
      });
      console.log({ res });
      dispatch({ type: CURRENT_USER_SET, user: res.data.currentUser });
    } catch (err) {
      console.log({ err });
    }
    return 'done';
  };
};

export const signoutUser = () => {
  return dispatch => {
    mutate$({
      mutation: USER_SIGNOUT_MUTATION
    });
    dispatch({ type: 'USER_LOGOUT' });
    apolloClient.resetStore();
  };
};

export const signinUser = (email, password) => {
  console.log(password, email);
  return dispatch => {
    mutate$({
      mutation: USER_SIGNIN_MUTATION,
      variables: {
        email,
        password
      },
      refetchQueries: [
        {
          query: CURRENT_USER_QUERY
        }
      ]
    })
      .then(res => {
        console.log({ res });
        document.location.href = '/';
      })
      .catch(err => console.log({ err }));
  };
  // return async dispatch => {
  //   try {
  //     const res = await mutate$({
  //       mutation: USER_SIGNIN_MUTATION,
  //       variables: {
  //         email,
  //         password
  //       }
  //     });
  //     dispatch({ type: USER_SIGNIN, user: res.user });
  //   } catch (err) {
  //     console.log({ err });
  //   }
  //   return 'done';
  // };
};
