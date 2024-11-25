import { useEffect, useState } from "react";
import { HomePageStyleWrapper } from "./styles";
import { CampoFormativo } from "./components/CampoFormativo";
import { EjeArticulador } from "./components/EjeArticulador";
import Portal from "../../components/Portal";
import { SideBar } from "../../components/SideBar";
import Rutas from "../../components/Rutas";
import RutasMobil from "../../components/RutasMobil";
import Conferencista from "./components/Conferencista";
// import Table from "../../components/Table";
// import { capacitaciones, proyeccion } from "./utils";
import { homeAssets } from "./homeAssets";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Walters from "../../assets/docentes/walters.jpg";
import Dania from "../../assets/docentes/dania.jpg";
import Kristy from "../../assets/docentes/krispy.jpg";
import Olga from "../../assets/docentes/olga.jpg";
import Paul from "../../assets/docentes/paul.jpg";
import Carmen from "../../assets/docentes/carmen.jpg";
import Fernanda from "../../assets/docentes/fernanda.jpg";
import Viviana from "../../assets/docentes/viviana.jpg";
import Conafe from "../../assets/Sec-logos/CONAFE.png";
import sep from "../../assets/Sec-logos/LOGO_SEP_VERTICAL.png";
import secWhite from "../../assets/Sec-logos/logo-sec-white.png";
import { DOCENTES_NOMBRES } from "../docentes-sonorenses/constants";
import Violentometro from "./components/Violentometro";

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

      <section className="rutas-section">
        <Rutas></Rutas>
        <RutasMobil></RutasMobil>
      </section>

      <section className="docentes">
        <h1 className="docentes__title">Conoce a los docentes Sonorenses de la NEM</h1>
        <div className="docentes__image-container">
          <div className="docentes__image-container-row">
            <DocentesHolder optionsNumber={8}></DocentesHolder>
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

      {/* <section className="video-section">
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
        </div>
      </section> */}

      <section className="camara-section">
        <div className="content">
          <div className="text-container">
            <h2>Charla con</h2>
            <div className="decoration"></div>
            <h1>
              Gabriel
              <br />
              Cámara Cervera
            </h1>
            <div className="decoration"></div>
            <h2>Director General del Consejo Nacional de Fomento Educativo</h2>
          </div>
          <div className="image-container">
            <div className="image"></div>
          </div>
        </div>
        <div className="logos">
          <img className="conafe" src={Conafe}></img>
          <img className="sep" src={sep}></img>
          <img className="sec" src={secWhite}></img>
        </div>
      </section>

      <section className="violentometro-section">
        <div className="content">
          <h1 className='violentometro-section__title'>Violentómetro Digital</h1>
          <Violentometro></Violentometro>
        </div>
      </section>

      <section className="conferencias-section">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img className="flor-icon" src={florencia}></img>
          <h1 className="conferencias-section__title">Nueva escuela mexicana en sonora</h1>
        </div>
        <div className="conferencias-section__title">
          <h1>Programa de Conferencias Magistrales</h1>
        </div>
        <div className="conferencias-section__container">
          <Conferencista
            titulo="“Bases metodológicas de la Nueva Escuela Mexicana” Secundaria"
            imagen={conferencia3}
            nombre="Helga Patricia Frola Ruiz "
            cargo="Centro de Investigación Educativa y Capacitación Institucional"
            position={[6, 0]}
            imageSize="190px"
          ></Conferencista>
          <Conferencista
            titulo="Conferencia magistral:
            “Interculturalidad Crítica en la Nueva Escuela Mexicana”"
            imagen={conferencia5}
            nombre="Sonia Comboni"
            cargo="Universidad Autónoma Metropolitana"
            position={[-340, -70]}
            imageSize="800px"
          ></Conferencista>
          <Conferencista
            titulo="Taller:
            “Cultura Digital y Educación Media Superior”"
            imagen={conferencia4}
            nombre="Alberto Ramírez Martinell"
            cargo="Universidad Veracruzana"
            position={[-60, -10]}
            imageSize="280px"
          ></Conferencista>
        </div>
      </section>

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

interface Props {
  optionsNumber: number;
}

const DocentesHolder = ({ optionsNumber }: Props) => {
  const [order, setOrder] = useState(9002);
  const navigate = useNavigate();
  const options = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
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
  const filterNumber = 4;
  return (
    <Docentes>
      <div
        onClick={() => {
          setOrder((prev) => prev - 1);
        }}
        className="backward"
      ></div>

      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`card ${order % optionsNumber > filterNumber ? "back" : options[order % optionsNumber]}`}
      >
        <img src={Walters}></img>
        <div
          onClick={() => {
            navigate(`/docentes-sonorenses/${DOCENTES_NOMBRES.Walters}`);
          }}
          className={`${order % optionsNumber > filterNumber ? "backb" : "play-btn"}`}
        ></div>
      </div>

      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`card ${(order + 1) % optionsNumber > filterNumber ? "card back" : options[(order + 1) % optionsNumber]}`}
      >
        <img src={Dania}></img>
        <div
          onClick={() => {
            navigate(`/docentes-sonorenses/${DOCENTES_NOMBRES.Dania}`);
          }}
          className={`${(order + 1) % optionsNumber > filterNumber ? "backb" : "play-btn"}`}
        ></div>
      </div>

      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`card ${(order + 2) % optionsNumber > filterNumber ? "card back" : options[(order + 2) % optionsNumber]}`}
      >
        <img src={Kristy}></img>
        <div
          onClick={() => {
            navigate(`/docentes-sonorenses/${DOCENTES_NOMBRES.Kristy}`);
          }}
          className={`${(order + 2) % optionsNumber > filterNumber ? "backb" : "play-btn"}`}
        ></div>
      </div>

      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`card ${(order + 3) % optionsNumber > filterNumber ? "card back" : options[(order + 3) % optionsNumber]}`}
      >
        <img src={Olga}></img>
        <div
          onClick={() => {
            navigate(`/docentes-sonorenses/${DOCENTES_NOMBRES.Olga}`);
          }}
          className={`${(order + 3) % optionsNumber > filterNumber ? "backb" : "play-btn"}`}
        ></div>
      </div>

      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`card ${(order + 4) % optionsNumber > filterNumber ? "card back" : options[(order + 4) % optionsNumber]}`}
      >
        <img src={Paul}></img>
        <div
          onClick={() => {
            navigate(`/docentes-sonorenses/${DOCENTES_NOMBRES.Paul}`);
          }}
          className={`${(order + 4) % optionsNumber > filterNumber ? "backb" : "play-btn"}`}
        ></div>
      </div>
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`card ${(order + 5) % optionsNumber > filterNumber ? "card back" : options[(order + 5) % optionsNumber]}`}
      >
        <img src={Viviana}></img>
        <div
          onClick={() => {
            navigate(`/docentes-sonorenses/${DOCENTES_NOMBRES.Viviana}`);
          }}
          className={`${(order + 5) % optionsNumber > filterNumber ? "backb" : "play-btn"}`}
        ></div>
      </div>
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`card ${(order + 6) % optionsNumber > filterNumber ? "card back" : options[(order + 6) % optionsNumber]}`}
      >
        <img src={Fernanda}></img>
        <div
          onClick={() => {
            navigate(`/docentes-sonorenses/${DOCENTES_NOMBRES.Fernanda}`);
          }}
          className={`${(order + 6) % optionsNumber > filterNumber ? "back" : "play-btn"}`}
        ></div>
      </div>
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`card ${(order + 7) % optionsNumber > filterNumber ? "card back" : "card " + options[(order + 7) % optionsNumber]}`}
      >
        <img src={Carmen}></img>
        <div
          onClick={() => {
            navigate(`/docentes-sonorenses/${DOCENTES_NOMBRES.Carmen}`);
          }}
          className={`${(order + 7) % optionsNumber > filterNumber ? "back" : "play-btn"}`}
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
    height: 40px;
    border-radius: 100%;
    background-color: rgb(209, 61, 103);
    z-index: 7;
    ::after {
      color: white;
      font-size: 1.6rem;
      left: 11px;
      top: 10px;
      position: absolute;
      content: "►";
    }
  }
  .card {
    box-shadow: 0px 10px 10px 10px #00000020;
    font-size: 100px;
    position: absolute;
    width: 100%;
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
  .back {
    display: none;
  }
  .backb {
    transform: scale(5);
  }
`;
