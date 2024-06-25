import styles from "./Button.module.css";

export const Button = ({text, onClick, type = "button"}) => (
    <button onClick={onClick} className={styles.btn} type={type}>{text}</button>
)