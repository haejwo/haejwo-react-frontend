export const loginUser = (accessToken) => ({
    type: 'LOGIN_USER',
    payload: {
      accessToken
    }
  });