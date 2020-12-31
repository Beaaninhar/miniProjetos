import React from "react";

import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerPhotoDescription}>
        <div className={styles.ImageOne}>
          <img src="/static/images/actual-picture.jpeg" alt="Fotot Atual" />
        </div>
        <div className={styles.DescriptionOne}>
          <h1>Ana Beatriz Ribeiro da Silva</h1>
          <p>
            Busco uma oportunidade de aprendizado para ampliar ainda mais meus
            conhecimentos, desenvolvimento profissional e de vida, sempre em
            harmonia com a qualidade do meu trabalho e a preparação dos meus
            dias para obter o sucesso esperado no momento da minha contratação,
            visando sempre o meu crescimento juntamente ao da empresa
          </p>
        </div>
        <div className={styles.ImageTwo}>
          <img
            src="/static/images/youngApprentice.jpeg"
            alt="Foto Jovem Aprendiz"
          />
        </div>
        <div className={styles.DescriptionTwo}>
          <h2>Jovem Aprendiz na Elotech</h2>
          <p>
            Aqui foi onde passei quase dois anos! Trabalhei em vários setores,
            tais com: financeiro, administrativo, judiciário, ajudante de
            documentação para um líder técnico e por fim trabalhei com
            JasperReport em JSON.
          </p>
        </div>
        <div className={styles.ImageThree}>
          <img
            src="/static/images/internshipEloetch.jpeg"
            alt="Foto Estagiária"
          />
        </div>
        <div className={styles.DescriptionThree}>
          <h2>Estagiária na Elotech</h2>
          <p>
            Passei poucos meses como estagiária em programção, porém adquiri
            experiências as seguintes experiências: JasperReport, HTML, CSS, XML
            e JAVA.
          </p>
        </div>
        <div className={styles.ImageFour}>
          <img
            src="/static/images/internshipdevninjas.jpeg"
            alt="Foto Estagiária"
          />
        </div>
        <div className={styles.DescriptionFour}>
          <h2>Estagiária na Devninjas</h2>
          <p>
            Aqui foi onde conheci a linguegem React, TypeScript, JavaScript e
            onde me deram a oportunidade de aprnder mais sobre o front-end e
            estudar linguagens de back-end como NodeJs. Atualmente trabalho
            focada do front-end usando React e TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
