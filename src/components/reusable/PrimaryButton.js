import styles from './PrimaryButton.module.css';

function PrimaryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.btn} ${props.className}`}
      title={props.title}
    >
      {props.children}
    </button>
  );
}

export default PrimaryButton;
