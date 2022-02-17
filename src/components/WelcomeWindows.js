import styles from './WelcomeWindows.module.css';

function WelcomeWindows(props) {
  return (
    <>
      <h1 className={styles.title}>Welcome to Windows</h1>
      <h2 className={styles.name}>{props.account.username}</h2>
    </>
  );
}

export default WelcomeWindows;
