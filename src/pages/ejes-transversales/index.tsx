import React, { useEffect, useState } from "react";
import { CampoStyleWrapper } from "./styles";
import flor from "../../assets/NEM-flor-icon.svg";
import { useNavigate } from "react-router-dom";
import logoSec from "../../assets/Sec-logos/logo-sec.png";
import logoDGIDT from "../../assets/Sec-logos/logo-dgidt.png";
import logoGobson from "../../assets/Sec-logos/logo-gobson.png";
import { EJES_TRANSVERSALES } from "./constants";
import { useParams } from "react-router-dom";
import Portal from "../../components/Portal";
import { SideBar } from "../../components/SideBar";

export default function EjesTransversales() {
  const [portalOpen, setPortalOpen] = useState(false);

  function handleFlower() {
    setPortalOpen(true);
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { eje } = useParams();
  const navigate = useNavigate();

  return (
    <CampoStyleWrapper>
      <header className="header">
        <div onClick={() => navigate("/")} className="header__nem">
          <h1>Educación para</h1>
          <h1>la transformación</h1>
          <h2>Programa sectorial</h2>
          <h2>2022-2027</h2>
        </div>
        <div className="header__background"></div>
        <img onClick={() => handleFlower()} className="header__logo" src={flor} />
      </header>

      <section className="eje-transversal">
        <h2>Actividades del Estado relacionadas con </h2>
        <h1>{eje}</h1>
        {eje &&
          EJES_TRANSVERSALES[eje].map((transversal: any, index: number) => {
            return (
              <div className={`eje-transversal__container ${index % 2 == 1 ? "even" : "odd"}`}>
                <div className="eje-transversal__title-container">
                  <h1 className="eje-transversal__title">{eje && transversal[0]}</h1>
                  <p className="eje-transversal__paragraph">{eje && transversal[1]}</p>
                </div>
                <div className="eje-transversal__image-container">
                  <img src={eje && transversal[2]} className="eje-transver"></img>
                </div>
              </div>
            );
          })}
      </section>

      <footer className="footer">
        <div className="footer__division"></div>
        <div className="footer__container">
          <a href="https://www.sonora.gob.mx/">
            <img src={logoGobson}></img>
          </a>
          <a href="https://www.sec.gob.mx/">
            <img src={logoSec}></img>
          </a>
          <a href="http://innovacion.sec.gob.mx/">
            <img src={logoDGIDT}></img>
          </a>
        </div>
      </footer>
      {portalOpen && (
        <Portal>
          <SideBar setPortalOpen={setPortalOpen}></SideBar>
        </Portal>
      )}
    </CampoStyleWrapper>
  );
}
