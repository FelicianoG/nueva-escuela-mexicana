import React, { useEffect, useState } from "react";
import { HomePageStyleWrapper } from "./styles";
import flor from "../../assets/NEM-flor-icon.svg";
import flor2 from "../../assets/NEM-flor-icon2.svg";
import florHero from "../../assets/flor-hero.png";
import comunidadImg from "../../assets/comunidad.png";
import { CampoFormativo } from "./components/CampoFormativo";
import { EjeArticulador } from "./components/EjeArticulador";
import logoSec from "../../assets/Sec-logos/logo-sec.png";
import logoDGIDT from "../../assets/Sec-logos/logo-dgidt.png";
import logoGobson from "../../assets/Sec-logos/logo-gobson.png";
import Portal from "../../components/Portal";
import { SideBar } from "../../components/SideBar";
import nemInfografia from "../../assets/infografias/NEM-FLOR.jpeg";
import rptInfografia from "../../assets/infografias/NEM-RPT.jpeg";
import violentometroInfografia from "../../assets/infografias/Violentometro.jpeg";

type Props = {};

export default function Home({}: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [portalOpen, setPortalOpen] = useState(false);
  function handleFlower() {
    setPortalOpen(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleNEM() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <HomePageStyleWrapper>
      {portalOpen && (
        <Portal>
          <SideBar setPortalOpen={setPortalOpen}></SideBar>
        </Portal>
      )}

      <header className="header">
        <div onClick={() => handleNEM()} className="header__nem">
          <h1>Nueva</h1>
          <h1>Escuela</h1>
          <h1>Mexicana</h1>
          <h2>En Sonora</h2>
        </div>
        <div
          className={
            scrollPosition > 200
              ? "header__background"
              : "header__background header__background--transparent"
          }
        ></div>
        <img
          onClick={() => handleFlower()}
          className="header__logo"
          src={flor}
        />
      </header>
      <section className="hero-section">
        <div className="hero-section__container">
          <div className="hero-section__hero-title">
            <div className="hero-section__nem">
              <h1>Nueva</h1>
              <h1>Escuela</h1>
              <h1>Mexicana</h1>
              <h2>En Sonora</h2>
            </div>
            <img className="hero-section__logo-span" src={flor}></img>
          </div>
          <div className="hero-section__description">
            <p>
              Educación basada en el respeto irrestricto de la dignidad de las
              personas, con un enfoque de derechos humanos y de igualdad
              sustantiva.
            </p>
          </div>
          {/* <a href="https://nuevaescuelamexicana.sep.gob.mx/" className="hero-section__btn">
            Conocer más
          </a> */}
        </div>
        <div className="hero-section__flor-container">
          <img className="hero-section__flor" src={florHero} />
        </div>
      </section>
      <section className="video-section">
        <div className="video-section__container">
          <h1 className="video-section__title">
            Implementación de la NEM en Sonora
          </h1>
          {/* <h1 className="video-section__title"></h1>
          <p className="video-section__paragraph"></p> */}
          <iframe
            className="video-section__video"
            width="560"
            height="315"
            src="https://firebasestorage.googleapis.com/v0/b/nueva-escuela-mexicana-f7208.appspot.com/o/NEM.mp4?alt=media&token=fcb0461a-f703-479d-ad6d-d4ec94c91655"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="infografias">
        <h1 className="infografias__title">Carteles para la transformación</h1>
        <div className="infografias__image-container">
          <img className="infografias__image" src={nemInfografia}></img>
          <img className="infografias__image" src={rptInfografia}></img>
          <img
            className="infografias__image"
            src={violentometroInfografia}
          ></img>
        </div>
      </section>
      <section className="community-section">
        <div className="community-section__decoration"></div>
        <div className="community-section__decoration-two"></div>
        <div className="community-section__container">
          <div className="community-section__image-container">
            <img src={comunidadImg} alt="imagen sobre comunidad"></img>
          </div>
          <div className="community-section__text">
            <h1 className="community-section__text__title">COMUNIDAD</h1>
            <p className="community-section__text__paragraph">
              La comunidad proporciona un sentido de pertenencia, conexión y
              apoyo mutuo entre sus miembros. Permite la colaboración en
              proyectos y la resolución de problemas colectivos, fomentando el
              desarrollo social y económico. La comunidad también puede ser un
              espacio de aprendizaje, crecimiento personal y cultural, y puede
              contribuir a la construcción de identidades colectivas y valores
              compartidos.
            </p>
          </div>
        </div>
      </section>
      <section className="campos-formativos">
        <div className="campos-formativos__container">
          <div className="campos-formativos__title-container">
            <img className="campos-formativos__logo" src={flor} />
            <h1 className="campos-formativos__title">CAMPOS FORMATIVOS</h1>
          </div>
          <p className="campos-formativos__description">
            Un Campo Formativo se entiende como la pluralidad de saberes y
            conocimientos que permiten acercarse a la realidad que se pretende
            estudiar. De esta manera, los contenidos de los programas de
            estudios son una disposición de conocimientos y saberes en un campo
            formativo que cobran sentido más allá de su significado particular
            en la relación que se establezca entre ellos y los ejes
            articuladores, los cuales vinculan el conocimiento con hechos
            concretos de la realidad mediante problematizaciones o temas
            generales de estudio.
          </p>
        </div>
        <div className="campos-formativos__campos">
          <CampoFormativo title="Lenguajes"></CampoFormativo>
          <CampoFormativo title="Saberes y pensamiento científico"></CampoFormativo>
          <CampoFormativo title="Ética, Naturaleza Y Sociedades"></CampoFormativo>
          <CampoFormativo title="De lo humano y lo comunitario"></CampoFormativo>
        </div>
      </section>
      <section className="ejes-articuladores">
        <div className="ejes-articuladores__container">
          <div className="ejes-articuladores__title-container">
            <img className="ejes-articuladores__logo" src={flor2} />
            <h1 className="ejes-articuladores__title">EJES ARTICULADORES</h1>
          </div>
          <p className="ejes-articuladores__description">
            Los siete ejes articuladores del Plan de Estudios 2022 para la
            Educación Preescolar, Primaria y Secundaria son: Inclusión,
            Pensamiento crítico, Interculturalidad crítica, Igualdad de género,
            Vida saludable, Apropiación de las culturas a través de la lectura y
            la escritura, y Artes y experiencias estéticas.
          </p>
        </div>
        <div className="ejes-articuladores__ejes">
          <ul className="ejes-articuladores__lista">
            <li className="ejes-articuladores__lista-element">
              <EjeArticulador title="Inclusión"></EjeArticulador>
              <EjeArticulador title="Pensamiento crítico"></EjeArticulador>
            </li>
            <li className="ejes-articuladores__lista-element">
              <EjeArticulador title="Interculturalidad Crítica"></EjeArticulador>
              <EjeArticulador title="Igualdad de género"></EjeArticulador>
            </li>
            <li className="ejes-articuladores__lista-element">
              <EjeArticulador title="Vida saludable"></EjeArticulador>
              <EjeArticulador title="Artes y experiencias estéticas"></EjeArticulador>
            </li>
            <li className="ejes-articuladores__lista-element">
              <EjeArticulador title="Apropiación de las culturas a través de la lectura y la escritura"></EjeArticulador>
            </li>
          </ul>
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
    </HomePageStyleWrapper>
  );
}
