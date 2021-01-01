import React from "react";

import styles from "./footer.module.css";

import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.Container}>
      <h3>Criado por Ana Beatriz</h3>
      <div className={styles.ContainerWppEmail}>
        <p>
          <IoLogoWhatsapp color="white" /> (44) 998051761
        </p>
        <p>
          <SiGmail color="white" /> aninhabeatrizribeiro@gmail.com.br
        </p>
      </div>
      <div className={styles.ContainerSocialMedia}>
        <p>Redes Sociais: </p>
        <a href="https://github.com/Beaaninhar">
          <TiSocialGithub color="white" />
        </a>
        <a href="https://www.linkedin.com/in/ana-beatriz-ribeiro-da-silva-b96705191/">
          <TiSocialLinkedin color="white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
