import styled from "styled-components";
import arte from "../assets/rutas/arte.png";
import ciencia from "../assets/rutas/ciencia.png";
import ciudadania from "../assets/rutas/ciudadania.png";
import escuelas from "../assets/rutas/escuelas.png";
import genero from "../assets/rutas/genero.png";
import interculturalidad from "../assets/rutas/interculturalidad.png";
import medioAmbiente from "../assets/rutas/medio-ambiente.png";
import vidaSaludable from "../assets/rutas/vida-saludable.png";

type Props = {};

const RutasStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  background-color: white;
  margin-bottom: 120px;
  @media (min-width: 800px) {
    display: none;
  }

  div {
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 80%;
  }
  .mini-images {
    width: 100%;
    overflow: hidden;
  }
`;

export default function Rutas({}: Props) {
  return (
    <RutasStyles id="rutas">
      <img className="escuelas" src={escuelas}></img>
      <div>
        <img className="mini-images arte" src={arte}></img>
      </div>
      <div>
        <img className="mini-images genero" src={genero}></img>
      </div>
      <div>
        <img className="mini-images vidaSaludable" src={vidaSaludable}></img>
      </div>
      <div>
        <img className="mini-images medioAmbiente" src={medioAmbiente}></img>
      </div>
      <div>
        <img className="mini-images interculturalidad" src={interculturalidad}></img>
      </div>
      <div>
        <img className="mini-images ciudadania" src={ciudadania}></img>
      </div>
      <div>
        <img className="mini-images ciencia" src={ciencia}></img>
      </div>
    </RutasStyles>
  );
}
