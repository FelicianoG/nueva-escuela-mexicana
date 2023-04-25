import styled from "styled-components";
import arte from "../assets/rutas/arte.png";
import ciencia from "../assets/rutas/ciencia.png";
import ciudadania from "../assets/rutas/ciudadania.png";
import escuelas from "../assets/rutas/escuelas.png";
import genero from "../assets/rutas/genero.png";
import interculturalidad from "../assets/rutas/interculturalidad.png";
import medioAmbiente from "../assets/rutas/medio-ambiente.png";
import vidaSaludable from "../assets/rutas/vida-saludable.png";
import { useNavigate } from "react-router-dom";

type Props = {};

const RutasStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  background-color: white;
  margin-bottom: 120px;
  @media (max-width: 800px) {
    display: none;
  }

  img {
    width: 30%;
  }
  .mini-images {
    position: absolute;
    width: 20%;
    backface-visibility: hidden;
    transform: translateZ(0);
  }
  .arte {
    transform: translate(70%, 65%);
    clip-path: inset(45px 30px 45px 25px);
    &:hover {
      transform: translate(70%, 65%) scale(2);
      z-index: 200;
    }
  }
  .genero {
    transform: translate(95%, 5%);
    clip-path: inset(45px 38px 45px 35px);
    &:hover {
      transform: translate(95%, 5%) scale(2);
      z-index: 200;
    }
  }
  .vidaSaludable {
    transform: translate(75%, -60%);
    clip-path: inset(40px 15px 55px 10px);
    &:hover {
      transform: translate(75%, -60%) scale(2);
      z-index: 200;
    }
  }
  .interculturalidad {
    transform: translate(5%, 90%);
    clip-path: inset(48px 20px 49px 10px);
    &:hover {
      transform: translate(5%, 90%) scale(2);
      z-index: 200;
    }
  }
  .ciudadania {
    transform: translate(-60%, 50%);
    clip-path: inset(48px 30px 49px 20px);
    &:hover {
      transform: translate(-60%, 50%) scale(2);
      z-index: 200;
    }
  }
  .medioAmbiente {
    transform: translate(-85%, -15%);
    clip-path: inset(42px 36px 41px 33px);
    &:hover {
      transform: translate(-85%, -15%) scale(2);
      z-index: 200;
    }
  }
  .ciencia {
    transform: translate(-60%, -75%);
    clip-path: inset(42px 36px 41px 33px);

    &:hover {
      transform: translate(-60%, -75%) scale(2);
      z-index: 200;
    }
  }
`;

export default function Rutas({}: Props) {
  const navigate = useNavigate();
  return (
    <RutasStyles id="rutas">
      <img className="escuelas" src={escuelas}></img>
      <img className="mini-images arte" src={arte}></img>
      <img
        onClick={() => {
          navigate(`/ejes-transversales/Perspectiva%20de%20Género,%20Cuerpo%20y%20Sexualidades`);
        }}
        className="mini-images genero"
        src={genero}
      ></img>
      <img
        className="mini-images vidaSaludable"
        onClick={() => {
          navigate(`/ejes-transversales/Vida%20saludable,%20impulso%20al%20deporte%20y%20prevención%20de%20adicciones`);
        }}
        src={vidaSaludable}
      ></img>
      <img
        className="mini-images medioAmbiente"
        onClick={() => {
          navigate(`/ejes-transversales/Medio%20ambiente,%20sustentabilidad%20y%20territorio`);
        }}
        src={medioAmbiente}
      ></img>
      <img
        className="mini-images interculturalidad"
        onClick={() => {
          navigate(`/ejes-transversales/Interculturalidad`);
        }}
        src={interculturalidad}
      ></img>
      <img
        className="mini-images ciudadania"
        onClick={() => {
          navigate(`/ejes-transversales/Ciudadanía%20para%20una%20participación%20democrática`);
        }}
        src={ciudadania}
      ></img>
      <img
        onClick={() => {
          navigate(`/ejes-transversales/Ciencia,%20Tecnología%20y%20Sociedad%20del%20Futuro`);
        }}
        className="mini-images ciencia"
        src={ciencia}
      ></img>
    </RutasStyles>
  );
}
