import { useEffect, useState } from "react";
import { CampoStyleWrapper } from "./styles";
import flor from "../../assets/NEM-flor-icon.svg";
import { useNavigate } from "react-router-dom";
import logoSec from "../../assets/Sec-logos/logo-sec.png";
import logoDGIDT from "../../assets/Sec-logos/logo-dgidt.png";
import logoGobson from "../../assets/Sec-logos/logo-gobson.png";
import { VIDEO_DOCENTE } from "./constants";
import { useParams } from "react-router-dom";
import Portal from "../../components/Portal";
import { SideBar } from "../../components/SideBar";

export default function DocentesSonorenses() {
  const [portalOpen, setPortalOpen] = useState(false);

  function handleFlower() {
    setPortalOpen(true);
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { docente } = useParams();
  const navigate = useNavigate();

  console.log(useParams().docente);
  console.log(VIDEO_DOCENTE);

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

      <section className="campo-formativo">
        <div className="campo-formativo__container">
          <h1 className="campo-formativo__title">{docente && docente}</h1>
          <p className="campo-formativo__paragraph">{docente && VIDEO_DOCENTE[docente].descripcion}</p>
          {docente && (
            <div className="iframe-loader">
              <iframe
                className="campo-formativo__video"
                src={VIDEO_DOCENTE[docente].video}
                title="YouTube video player"
                allow="accelerometer; autoplay;"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
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
