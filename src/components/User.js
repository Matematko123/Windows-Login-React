import profileIcon from '../img/secondaryIcon.png';

import styles from './User.module.css';

function User(props) {
  return (
    <div onClick={props.onClick} className={styles.user}>
      {/* CHARACTER IMG */}
      <img src={profileIcon} alt="" srcset="" />
      <div>
        <h2>{props.name}</h2>
        <span>user encrypted &#128274;</span>
      </div>
    </div>
  );
}

export default User;
