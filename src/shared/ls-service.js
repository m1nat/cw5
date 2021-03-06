export const getToken = () => localStorage.getItem('token');

export const setToken = token => localStorage.setItem('token', token);

export const removeToken = () => localStorage.removeItem('token');

export const getUserEmail = () => localStorage.getItem('userEmail');

export const setUserEmail = email => localStorage.setItem('userEmail', email);

export const removeUserEmail = () => localStorage.removeItem('userEmail');
