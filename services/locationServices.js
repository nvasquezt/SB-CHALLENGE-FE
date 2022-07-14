const API_URL = 'http://localhost:8080';

export const getAllLocations = async () => {
  try{
    const token = sessionStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/locations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch(error){
    console.log(error);
  }
}

export const createLocation = async (location) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`${API_URL}/api/locations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(location),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
