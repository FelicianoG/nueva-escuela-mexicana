import { useEffect, useState } from "react";
import { HomePageStyleWrapper } from "./styles";
import { CampoFormativo } from "./components/CampoFormativo";
import { EjeArticulador } from "./components/EjeArticulador";
import Portal from "../../components/Portal";
import { SideBar } from "../../components/SideBar";
import Rutas from "../../components/Rutas";
import RutasMobil from "../../components/RutasMobil";
import Conferencista from "./components/Conferencista";
import Table from "../../components/Table";
import { capacitaciones, proyeccion } from "./utils";
import { homeAssets } from "./homeAssets";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Walters from "../../assets/docentes/Walters.jpg";
import Dania from "../../assets/docentes/Dania.jpg";
import Kristy from "../../assets/docentes/Kristy.jpg";
import Olga from "../../assets/docentes/Olga.jpg";
import Paul from "../../assets/docentes/Paul.jpg";

const {
  flor,
  florencia,
  flor2,
  florHero,
  conferencia1,
  conferencia2,
  conferencia3,
  conferencia4,
  conferencia5,
  comunidadImg,
  logoSec,
  logoDGIDT,
  logoGobson,
  nemInfografia,
  rptInfografia,
  violentometroInfografia,
  creson,
  SEC,
  SEES,
} = homeAssets;

export default function Home() {
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
          <h1>Educación para</h1>
          <h1>la transformación</h1>
          <h2>Programa sectorial</h2>
          <h2>2022-2027</h2>
        </div>
        <div className={scrollPosition > 200 ? "header__background" : "header__background header__background--transparent"}></div>
        <img onClick={() => handleFlower()} className="header__logo" src={flor} />
      </header>
      <section className="hero-section">
        <div className="hero-section__container">
          <div className="hero-section__hero-title">
            <div className="hero-section__nem">
              <h1>Educación para</h1>
              <h1>la transformación</h1>
              <h2>Programa sectorial</h2>
              <h2>2022-2027</h2>
            </div>
          </div>
          <div className="hero-section__description">
            <p>
              Pensar, sentir y vivir la escuela como territorio común de cooperación e integración regional para la formación integral, humana y
              colectiva, que oriente la emancipación y el bienestar de las comunidades, la región, la nación y del entorno planetario.
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

      {/* <section className="rutas-section">
        <Rutas></Rutas>
        <RutasMobil></RutasMobil>
      </section> */}

      <section className="docentes">
        <h1 className="docentes__title">Conoce a los docentes Sonorenses de la NEM</h1>
        <div className="docentes__image-container">
          <div className="docentes__image-container-row">
            <DocentesHolder></DocentesHolder>
          </div>
        </div>
      </section>

      {/* <section className="infografias">
        <h1 className="infografias__title">Carteles para la transformación</h1>
        <div className="infografias__image-container">
          <img className="infografias__image" src={nemInfografia}></img>
          <img className="infografias__image" src={rptInfografia}></img>
          <img className="infografias__image" src={violentometroInfografia}></img>
        </div>
      </section> */}
      <section className="documentos">
        <h1 className="documentos__title">DOCUMENTOS NORMATIVOS</h1>
        <h2 className="documentos__subtitle">“EDUCACIÓN PARA LA TRANSFORMACIÓN 2022-2027”</h2>
        <div className="documentos__container">
          <a download="Programa Sectorial" href={SEC} className="documentos__item">
            <h3>Programa Sectorial</h3>
          </a>
          <a download="Programa Institucional" href={SEES} className="documentos__item">
            <h3>Programa Institucional</h3>
          </a>
        </div>
      </section>
      <section className="video-section">
        <div className="video-section__container">
          <h1 className="video-section__title">Implementación de la NEM en Sonora</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JLZi6vmvgcQ"
            title="Nueva Escuela Mexicana"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* <h1 className="video-section__title"></h1>
          <p className="video-section__paragraph"></p> */}
          {/* <iframe
            className="video-section__video"
            width="560"
            height="315"
            src="https://firebasestorage.googleapis.com/v0/b/nueva-escuela-mexicana-f7208.appspot.com/o/NEM.mp4?alt=media&token=fcb0461a-f703-479d-ad6d-d4ec94c91655"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
        </div>
      </section>

      <section className="conferencias-section">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img style={{ width: "3rem", marginRight: "1rem" }} src={florencia}></img>
          <h1 style={{ fontSize: "30px", lineHeight: "2rem", textAlign: "center" }} className="conferencias-section__title">
            Nueva escuela mexicana en sonora
          </h1>
        </div>
        <div className="conferencias-section__title">
          <h1>Programa de Conferencias Magistrales</h1>
        </div>
        <div className="conferencias-section__container">
          <Conferencista
            titulo="El modelo de la nueva escuela mexicana"
            imagen={conferencia1}
            nombre="Dra. Rosa María Torres Hernández"
            cargo="Universidad pedagógica nacional"
          ></Conferencista>
          <Conferencista
            titulo="El complejo proyecto de la nueva escuela mexicana"
            imagen={conferencia2}
            nombre="Dr. Ángel Díaz-Barriga"
            cargo="Universidad Autónoma de México"
            position={["-10px", "-30px"]}
            imageSize="300px"
          ></Conferencista>
          <Conferencista
            titulo="“Bases metodológicas de la Nueva Escuela Mexicana” Secundaria"
            imagen={conferencia3}
            nombre="Dra. Helga Patricia Frola Ruiz "
            cargo="Centro de Investigación Educativa y Capacitación Institucional"
            position={["6px", "0px"]}
            imageSize="190px"
          ></Conferencista>
        </div>
      </section>

      <section className="conferencias-section">
        <div className="conferencias-section__title">
          <h1>Eventos: Educación Media Superior</h1>
        </div>
        <div className="conferencias-section__container">
          <Conferencista
            titulo="Conferencia magistral:
            “Interculturalidad Crítica en la Nueva Escuela Mexicana”"
            imagen={conferencia5}
            nombre="Dra. Sonia Comboni"
            cargo="Universidad Autónoma Metropolitana"
            position={["-340px", "-70px"]}
            imageSize="800px"
          ></Conferencista>
          <Conferencista
            titulo="Taller:
            “Cultura Digital y Educación Media Superior”"
            imagen={conferencia4}
            nombre="Dr. Alberto Ramírez Martinell"
            cargo="Universidad Veracruzana"
            position={["-60px", "-10px"]}
            imageSize="280px"
          ></Conferencista>
        </div>
      </section>
      <section className="capacitaciones-section">
        <h1>Capacitaciones ofrecidas en educación básica en el marco de la NEM</h1>
        <Table rows={capacitaciones} headerColor="#d13d67" />
      </section>
      <section className="capacitaciones-section">
        <img className="creson" src={creson} alt="logo creson"></img>
        <h1>PROYECCIÓN DE CAPACITACIÓN AL PERSONAL EDUCATIVO 2023-2024</h1>
        <h2>“Fortalecimiento Pedagógico en el marco de la Nueva Escuela Mexicana”</h2>
        <div>
          <Table rows={proyeccion} headerColor="#d13d67" />
        </div>
      </section>
      {/* <section className="community-section">
        <div className="community-section__decoration"></div>
        <div className="community-section__decoration-two"></div>
        <div className="community-section__container">
          <div className="community-section__image-container">
            <img src={comunidadImg} alt="imagen sobre comunidad"></img>
          </div>
          <div className="community-section__text">
            <h1 className="community-section__text__title">COMUNIDAD</h1>
            <p className="community-section__text__paragraph">
              La comunidad proporciona un sentido de pertenencia, conexión y apoyo mutuo entre sus miembros. Permite la colaboración en proyectos y la
              resolución de problemas colectivos, fomentando el desarrollo social y económico. La comunidad también puede ser un espacio de
              aprendizaje, crecimiento personal y cultural, y puede contribuir a la construcción de identidades colectivas y valores compartidos.
            </p>
          </div>
        </div>
      </section> */}
      <section className="campos-formativos">
        <div className="campos-formativos__container">
          <div className="campos-formativos__title-container">
            <img className="campos-formativos__logo" src={flor} />
            <h1 className="campos-formativos__title">CAMPOS FORMATIVOS</h1>
          </div>
          <p className="campos-formativos__description">
            Un Campo Formativo se entiende como la pluralidad de saberes y conocimientos que permiten acercarse a la realidad que se pretende
            estudiar. De esta manera, los contenidos de los programas de estudio son una disposición de conocimientos y saberes en un campo formativo
            que cobran sentido más allá de su significado particular en la relación que se establezca entre ellos y los ejes articuladores, los cuales
            vinculan el conocimiento con hechos concretos de la realidad mediante problematizaciones o temas generales de estudio.
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
            Los siete ejes articuladores del Plan de Estudios 2022 para la educación preescolar, primaria y secundaria son:
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

const DocentesHolder = () => {
  const [order, setOrder] = useState(9002);
  const navigate = useNavigate();
  const options = ["one", "two", "three", "four", "five"];
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      // add your conditional logic here
      isLeftSwipe && setOrder((prev) => prev - 1);
      isRightSwipe && setOrder((prev) => prev + 1);
    }
  };
  return (
    <Docentes>
      <div
        onClick={() => {
          setOrder((prev) => prev - 1);
        }}
        className="backward"
      ></div>

      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={`card ${options[order % 5]}`}>
        <img src={Walters}></img>
        <div
          onClick={() => {
            navigate("/docentes-sonorenses/German Walters Meraz");
          }}
          className="play-btn"
        ></div>
      </div>
      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={`card ${options[(order + 1) % 5]}`}>
        <img src={Dania}></img>
        <div
          onClick={() => {
            console.log("first");
          }}
          className="play-btn"
        ></div>
      </div>
      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={`card ${options[(order + 2) % 5]}`}>
        <img src={Kristy}></img>
        <div
          onClick={() => {
            console.log("first");
          }}
          className="play-btn"
        ></div>
      </div>
      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={`card ${options[(order + 3) % 5]}`}>
        <img src={Olga}></img>
        <div
          onClick={() => {
            console.log("first");
          }}
          className="play-btn"
        ></div>
      </div>
      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={`card ${options[(order + 4) % 5]}`}>
        <img src={Paul}></img>
        <div
          onClick={() => {
            console.log("first");
          }}
          className="play-btn"
        ></div>
      </div>
      <div
        onClick={() => {
          setOrder((prev) => prev + 1);
        }}
        className="forward"
      ></div>
    </Docentes>
  );
};
const Docentes = styled.div`
  position: relative;
  min-height: 280px;
  min-width: 500px;
  @media (max-width: 800px) {
    transform: scale(0.6);
    min-width: 200px;
  }
  img {
    width: 100%;
  }
  .backward {
    position: absolute;
    z-index: 9;
    left: -20%;
    height: 100%;
    width: 20%;
  }
  .forward {
    position: absolute;
    z-index: 9;
    right: -20%;
    height: 100%;
    width: 20%;
  }
  .play-btn {
    position: absolute;
    bottom: 15px;
    right: 25px;
    width: 40px;
    opacity: 0;
    height: 40px;
    border-radius: 100%;
    background-color: red;
    z-index: 7;
  }
  .card {
    box-shadow: 0px 10px 10px 10px #00000020;
    font-size: 100px;
    position: absolute;
    width: 100%;

    background-color: #ffffff;
    transition: all 1s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .one {
    transform: translateX(-110px) scale(0.9);
    z-index: 1;
    transition: all 0.8s;
  }
  .two {
    transform: translateX(-60px) scale(0.96);
    z-index: 2;
    transition: all 0.8s;
  }
  .three {
    z-index: 3;
    transition: all 0.8s;
  }
  .four {
    transform: translateX(60px) scale(0.96);
    z-index: 2;
    transition: all 0.8s;
  }
  .five {
    transform: translateX(110px) scale(0.9);
    z-index: 1;
    transition: all 0.8s;
  }

  /* .animation-oneToTwo {
    animation: oneToTwo 1s ease-in-out;
  }

  @keyframes oneToTwo {
    0% {
      right: 0;
    }
    50% {
      right: 100%;
    }
    100% {
      right: 0;
    }
  } */
`;
