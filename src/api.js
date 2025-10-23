const API_BASE = "https://lms-login.onrender.com/api/auth";

export const registerUser = async (userData) => {
  try {
    console.log('🔍 DEBUG REGISTER: Sending registration data:', userData);

    const response = await fetch(`${API_BASE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    console.log('🔍 DEBUG REGISTER: Response status:', response.status);

    if (!response.ok) {
      const errText = await response.text();
      console.error('🔍 DEBUG REGISTER: Error response:', errText);
      throw new Error(`Error ${response.status}: ${errText}`);
    }

    const responseData = await response.json();
    console.log('🔍 DEBUG REGISTER: Success response:', responseData);

    return responseData;
  } catch (error) {
    console.error('🔍 DEBUG REGISTER: API call failed:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    console.log('🔍 DEBUG LOGIN: Attempting login for email:', email);

    const response = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log('🔍 DEBUG LOGIN: Response status:', response.status);

    if (!response.ok) {
      const errText = await response.text();
      console.error('🔍 DEBUG LOGIN: Error response:', errText);
      throw new Error(`Error ${response.status}: ${errText}`);
    }

    const data = await response.json();
    console.log('🔍 DEBUG LOGIN: Full response data:', data);
    console.log('🔍 DEBUG LOGIN: Token received:', data.token ? 'Yes' : 'No');

    // Decode and log the token content
    if (data.token) {
      try {
        const payload = JSON.parse(atob(data.token.split('.')[1]));
        console.log('🔍 DEBUG LOGIN: Token payload:', payload);
        console.log('🔍 DEBUG LOGIN: Role in token:', payload.role);
      } catch (tokenError) {
        console.error('🔍 DEBUG LOGIN: Token decoding error:', tokenError);
      }
    }

    return data.token;
  } catch (error) {
    console.error('🔍 DEBUG LOGIN: API call failed:', error);
    throw error;
  }
};