import styles from "../Button/Button.module.css";
interface IProps {
    onClick?: () => void;
}

export const Button = ({ onClick }: IProps) => {
    return (
        <div className={styles.wrap} onClick={onClick}>
            <button className={styles.btn}>Добавить в корзину🛒</button>
        </div>
    );
};