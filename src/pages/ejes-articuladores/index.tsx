import React, { useEffect, useState } from "react";
import { CampoStyleWrapper } from "./styles";
import flor from "../../assets/NEM-flor-icon.svg";
import florHero from "../../assets/flor-hero.png";
import { useNavigate } from "react-router-dom";
import comunidadImg from "../../assets/comunidad.png";
import { CampoFormativo } from "./components/CampoFormativo";
import { EjeArticulador } from "./components/EjeArticulador";
import logoSec from "../../assets/Sec-logos/logo-sec.png";
import logoDGIDT from "../../assets/Sec-logos/logo-dgidt.png";
import logoGobson from "../../assets/Sec-logos/logo-gobson.png";
import { EJES_ARTICULADORES, EJES_VIDEOS } from "./constants";
import { CampoFormativoType } from "../../types/types";
import { useParams } from "react-router-dom";
import Portal from "../../components/Portal";
import { SideBar } from "../../components/SideBar";

export default function EjesArticuladores() {
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
          <h1>Nueva</h1>
          <h1>Escuela</h1>
          <h1>Mexicana</h1>
          <h2>En Sonora</h2>
        </div>
        <div className="header__background"></div>
        <img onClick={() => handleFlower()} className="header__logo" src={flor} />
      </header>

      <section className="campo-formativo">
        <div className="campo-formativo__container">
          <h1 className="campo-formativo__title">{eje && eje}</h1>
          <p className="campo-formativo__paragraph">{eje && EJES_ARTICULADORES[eje]}</p>
          {eje && (
            <iframe
              className="campo-formativo__video"
              width="560"
              height="315"
              src={EJES_VIDEOS[eje]}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
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
