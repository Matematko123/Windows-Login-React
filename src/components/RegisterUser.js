import React, { useState } from 'react';

import styles from './RegisterUser.module.css';
import PrimaryButton from './reusable/PrimaryButton';

function RegisterUser(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords are not equal!');
    } else {
      props.addUser({
        email: email,
        username: username,
        password: password,
      });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.name}>Register</h1>
      </div>

      <form className={styles.form} action="" onSubmit={onFormSubmit}>
        <input
          onChange={(event) => setEmail(event.target.value)}
          required
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(event) => setUsername(event.target.value)}
          required
          type="username"
          placeholder="Username"
          minLength="5"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          required
          type="password"
          placeholder="Password"
          minLength="8"
        />
        <input
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
          id={styles.confirmPassword}
          type="password"
          placeholder="Confirm Password"
          minLength="8"
        />

        <PrimaryButton className={styles.btn} type="submit">
          Register
        </PrimaryButton>
      </form>
    </div>
  );
}

export default RegisterUser;
