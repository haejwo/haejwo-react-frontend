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

export const saveBankName = (bankName) => {
  return {
    type: 'SAVE_BANKNAME',
    payload: bankName,
  };
};

export const saveAccountNumber = (accountNumber) => {
  return {
    type: 'SAVE_ACCOUNTNUMBER',
    payload: accountNumber,
  };
};

export const saveRole = (role) => {
  return {
    type: 'SAVE_ROLE',
    payload: role,
  };
};

export const saveCategory = (category) => {
  return {
    type: 'SAVE_CATEGORY',
    payload: category,
  };
};

export const saveBusinessFile = () => {
  return {
    type: 'SAVE_BusinessFile',
    payload: true,
  };
};