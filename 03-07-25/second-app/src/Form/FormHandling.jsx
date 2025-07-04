import React, { useState } from 'react';

export default function FormHandling() {
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnsubmit = async (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org)$/;

    if (!regex.test(FormData.email)) {
      alert('Invalid email format');
      return;
    }

    try {
      const response = await fetch('https://www.quickpickdeal.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });

      const result = await response.json();

      if (result.Success) {
        alert('Login successful!');
        console.log('AccessToken:', result.Data.AccessToken);
        console.log('User Info:', result.Data);
        // Optionally store token in localStorage:
        // localStorage.setItem('token', result.Data.AccessToken);
      } else {
        alert(`Login failed: ${result.Error}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('An error occurred while logging in.');
    }
  };

  return (
    <div>
      <h1>Enter Email and Password</h1>

      <form onSubmit={handleOnsubmit}>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          onChange={handleOnChange}
          value={FormData.email}
        />
        <br />
        <br />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          value={FormData.password}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
