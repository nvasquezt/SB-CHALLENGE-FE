const API_URL = 'https://sb-challenge-be.herokuapp.com';

export const createUser = async (payload) => {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
  }
};

export const getUserByEmail= async (email) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/users/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
  }
};
