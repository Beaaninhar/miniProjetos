import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header class={styles.MenuContainer}>
      <div class={styles.Menu}>
        <div class={styles.MenuLogo}>
          <a href="/">Ana Beatriz</a>
        </div>
        <nav class={styles.MenuNav}>
          <ul>
          <li>
              <a href="/">Home</a>
            </li>
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
