const API_URL = 'https://sb-challenge-be.herokuapp.com';

export const login = async (loginInfo) => {
  try {
    const response = await fetch(`${API_URL}/auth/local/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
  }
};
