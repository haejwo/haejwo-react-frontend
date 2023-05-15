// export const loginUser = (accessToken) => ({
//     type: 'LOGIN_USER',
//     payload: {
//       accessToken
//     }
//   });

export function loginUser(user) {
  return {
    type: 'SET_USER',
    payload: user,
  };
}

export const saveUsername = (username) => {
  return {
    type: 'SAVE_USERNAME',
    payload: username,
  };
};