import React, { useState } from 'react';
import './register.css';

function Register() {
  const [user, setUser] = useState({
    nickname: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Registered:', user);
    // Burada kullanıcı kayıt işleminizi backend ile entegre edebilirsiniz
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nickname">Nickname:</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={user.nickname}
          onChange={handleChange}
          required
        />

        

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;