import React from "react";
import "./Main.css";
import image1 from "../../Design/main1.jpg";
import image2 from "../../Design/main2.jpg";
import image3 from "../../Design/main3.jpg";

export const Main = () => {
  return (
    <div style={{paddingBottom:"45px"}}>
      <div className="bloque">
        <img className="imagen1" src={image1} alt="main1" />
        <h2 className="textoBloque">
          Un ambiente especial , para un{" "}
          <span style={{ color: "brown" }}>cafe especial...</span>
        </h2>
      </div>
      <div style={{paddingTop:"85px" ,paddingBottom:"45px"}} className="bloque">
        <h2 className="textoBloque">
          El lugar donde las{" "}
          <span style={{ color: "brown" }}>variedades y sabores</span> abundan
        </h2>
        <img className="imagen2" src={image2} alt="main2" />
      </div>
      <div className="bloque">
        <img className="imagen3" src={image3} alt="main2" />
        <h2 className="textoBloque">
          <span style={{ color: "brown" }}>Productos</span> especificamente
          seleccionados por nuestros expertos , permitiendo disfrutar una
          expericiencia unica...
        </h2>
      </div>
    </div>
  );
};

export default Main;
