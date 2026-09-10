import styles from "./ServiceCard.module.css";

function ServiceCard({ number, title, description, icon }) {
    return (
        <article className={styles.card}>

        <span className={styles.number}>
            {number}
        </span>

        <div className={styles.content}>
            <h3>{title}</h3>

            <p>{description}</p>
        </div>

        <span className={styles.icon}>
            {icon}
        </span>

        </article>
    );
}

export default ServiceCard;