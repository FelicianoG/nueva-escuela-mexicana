import styled from "styled-components";
import arte from "../assets/rutas/arte.jpg";
import ciencia from "../assets/rutas/ciencia.jpg";
import ciudadania from "../assets/rutas/ciudadania.jpg";
import escuelas from "../assets/rutas/escuelas.png";
import genero from "../assets/rutas/genero.jpg";
import interculturalidad from "../assets/rutas/interculturalidad.jpg";
import medioAmbiente from "../assets/rutas/medio-ambiente.jpg";
import vidaSaludable from "../assets/rutas/vida-saludable.jpg";
import { useNavigate } from "react-router-dom";

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
  }
`;

export default function Rutas({}: Props) {
  const navigate = useNavigate();
  return (
    <RutasStyles id="rutas">
      <img className="escuelas" src={escuelas}></img>
      <div>
        <img className="mini-images arte" src={arte}></img>
      </div>
      <div>
        <img
          onClick={() => {
            navigate(`/ejes-transversales/Perspectiva%20de%20Género,%20Cuerpo%20y%20Sexualidades`);
          }}
          className="mini-images genero"
          src={genero}
        ></img>
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
        <img
          onClick={() => {
            navigate(`/ejes-transversales/Ciencia,%20Tecnología%20y%20Sociedad%20del%20Futuro`);
          }}
          className="mini-images ciencia"
          src={ciencia}
        ></img>
      </div>
    </RutasStyles>
  );
}
