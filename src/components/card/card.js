import styles from "./card.module.scss";

const Card = ({ children, title, details, minWidth }) => {
    return (
        <div className={styles["card"]} style={{ minWidth: minWidth ? minWidth : '' }}>
            {title && <div className={styles["card_title"]}>{`${title}`}</div>}
            {details && <div className={styles["card_details"]}>{`Details: ${details}`}</div>}
            {children}
        </div >
    )
};

export default Card;