import styles from './Button.module.css';

const Button = ({type = 'button', onClick = () => {}, children}) => {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;