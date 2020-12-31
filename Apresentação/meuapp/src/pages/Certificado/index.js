import React from "react";
import Slide from "./Components/index";

const Sobre = () => {
  const slides = [
    {
      id: "slide1",
      img: "/static/certificados/flexBox.jpg",
      txt:
        "Nesse curso foi onde aprendi a ter um responsivo sem ter que usar tanto @media, depois que conheci me apaixonei!",
    },
    {
      id: "slide2",
      img: "/static/certificados/grid.jpg",
      txt: "Nesse curso foi onde aprendi mais sobre responsividade, ficou muit mais fácil o front-end.",
    },
    {
      id: "slide3",
      img: "/static/certificados/HTMLeCSS.jpg",
      txt: "Aprendi bastante coisa nova, esse curso foi para dar uma atualizada no meu HTML e CSS.",
    },
    {
      id: "slide4",
      img: "/static/certificados/introduçãoSQL.jpg",
      txt: "Gostei bastante desse curso, já deu para ter uma noção de SQL.",
    },
    {
      id: "slide5",
      img: "/static/certificados/consultaSQL.jpg",
      txt: "Nesse eu aprendi a fazer colsultas em BD, curti muito!",
    },
    {
      id: "slide6",
      img: "/static/certificados/http.jpg",
      txt: "Nesse eu aprendi muita coisa, principalmente POST, DELETE, GET E INPUT.",
    },
  ];
  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default Sobre;
