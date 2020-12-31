import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header class={styles.menuContainer}>
      <div class={styles.menu}>
        <div class={styles.menuLogo}>
          <a href="/">Ana Beatriz</a>
        </div>
        <nav class={styles.menuNav}>
          <ul>
            <li>
              <a href="/certificado">Certificado</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
