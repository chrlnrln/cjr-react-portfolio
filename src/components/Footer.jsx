import styles from "./Footer.module.css";

function Footer() {

    const currentYear = new Date().getFullYear();

    const handleBackToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return (
        <footer className={styles.footer}>

        <strong>CJ CREATIONS</strong>

        <span>
            © {currentYear} Charlene Joy Realin
        </span>

        <button onClick={handleBackToTop}>
            Back to Top ↑
        </button>

        </footer>
    );
}

export default Footer;