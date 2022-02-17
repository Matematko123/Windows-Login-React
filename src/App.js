import React, { useState, useEffect } from 'react';
import icons from './img/icons.png';
import windowsIcon from './img/windowsIcon.png';
import styles from './App.module.css';

import User from './components/User';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
import WelcomeWindows from './components/WelcomeWindows';

import PrimaryButton from './components/reusable/PrimaryButton';

const INITIAL_ACCOUNTS = [
  {
    email: 'ivan@gmail.com',
    username: 'Ivan',
    password: 'ivan',
  },
];

function App() {
  const [loginScreen, setLoginScreen] = useState(false);
  const [registerScreen, setRegisterScreen] = useState(false);
  const [accounts, setAccounts] = useState(INITIAL_ACCOUNTS);
  const [activeAccount, setActiveAccount] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  function onBackButtonClicked() {
    setLoginScreen(false);
    setRegisterScreen(false);
  }

  function onNotListedButtonClicked() {
    setLoginScreen(false);
    setRegisterScreen(true);
  }

  function onLogOutButtonClicked() {
    setLoggedIn(false);
  }

  function onRegisteredUser(user) {
    setAccounts((prevState) => {
      return [...prevState, user];
    });

    setLoginScreen(false);
    setRegisterScreen(false);
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.back}>
          {(loginScreen || registerScreen) && !loggedIn && (
            <>
              <PrimaryButton onClick={onBackButtonClicked}>
                &larr;
              </PrimaryButton>
              <span>Back to users.</span>
            </>
          )}
          {loggedIn && (
            <PrimaryButton title={'Logout'} onClick={onLogOutButtonClicked}>
              &larr;
            </PrimaryButton>
          )}
        </div>

        <img src={icons} alt="" />
      </header>

      <main>
        {!loggedIn && (
          <>
            {loginScreen && (
              <LoginUser
                logged={() => setLoggedIn(true)}
                account={activeAccount}
              ></LoginUser>
            )}
            {!loginScreen && !registerScreen && (
              <>
                {accounts.map((account) => (
                  <User
                    key={account.username}
                    onClick={() => {
                      setLoginScreen(true);
                      setActiveAccount(account);
                    }}
                    name={account.username}
                  ></User>
                ))}

                <span
                  className={styles.notListed}
                  onClick={onNotListedButtonClicked}
                >
                  Not listed?
                </span>
              </>
            )}
          </>
        )}

        {registerScreen && (
          <RegisterUser addUser={onRegisteredUser}></RegisterUser>
        )}

        {loggedIn && <WelcomeWindows account={activeAccount} />}
      </main>

      <img id={styles.windowsIcon} src={windowsIcon} alt="" srcset="" />
    </div>
  );
}

export default App;
