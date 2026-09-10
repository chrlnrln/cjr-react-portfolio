import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        "Home",
        "About",
        "Projects",
        "Services",
        "Contact",
    ];

    const handleNavigation = (section) => {
        const element = document.getElementById(
            section.toLowerCase()
        );

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }

        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>

            <button
                className={styles.logo}
                onClick={() => handleNavigation("Home")}
            >
                CJ<span>.</span>
            </button>

            <button
                className={styles.menuButton}
                onClick={() => setMenuOpen((current) => !current)}
            >
                {menuOpen ? "×" : "☰"}
            </button>

            <nav
                className={`${styles.nav} ${
                    menuOpen ? styles.open : ""
                }`}
            >
                {navItems.map((item) => (
                    <button
                        key={item}
                        onClick={() => handleNavigation(item)}
                    >
                        {item}
                    </button>
                ))}
            </nav>

        </header>
    );
}

export default Header;