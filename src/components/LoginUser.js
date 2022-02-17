import React, { useState } from 'react';
import styles from './LoginUser.module.css';
import logo from '../img/secondaryIcon.png';

import PrimaryButton from './reusable/PrimaryButton';

function LoginUser(props) {
  const [password, setPassword] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  function onLoginFormSubmited(event) {
    event.preventDefault();

    if (props.account.password === password) {
      props.logged();
    }
    else{
      alert("Wrong password, please try again!");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={logo} className={styles.logo} alt="" srcset="" />
        <h1 className={styles.name}>{props.account.username}</h1>
      </div>

      <form className={styles.form} action="" onSubmit={onLoginFormSubmited}>
        <PrimaryButton onClick={() => setPasswordShown(!passwordShown)}>
          &#128065;
        </PrimaryButton>
        <input
          onChange={(event) => setPassword(event.target.value)}
          required
          type={passwordShown ? 'text' : 'password'}
          placeholder="Password"
        />
        <PrimaryButton type="submit">&#8594;</PrimaryButton>
      </form>
      <span>Forgot password?</span>
    </div>
  );
}

export default LoginUser;
