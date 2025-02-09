// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    team_name: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.authenticated) {
      alert("Login successful!");
      window.location.href = '/instructions'; // Redirect to hackerboard
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="team_name"
          name="team_name"
          placeholder="Team name"
          value={formData.team_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <small id="passHelp" className="form-text text-muted">
          Make sure nobody's behind you
        </small>
      </div>
      <button type="submit" className="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter">
        <h4>Login</h4>
      </button>
      <small id="registerHelp" className="mt-3 form-text text-muted">
        Not Registered? <a href="/register">Register here</a>
      </small>
    </form>
  );
};

export default LoginForm;
