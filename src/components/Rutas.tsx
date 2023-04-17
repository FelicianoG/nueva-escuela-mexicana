import styled from "styled-components";
import arte from "../assets/rutas/arte.svg";
import ciencia from "../assets/rutas/ciencia.svg";
import ciudadania from "../assets/rutas/ciudadania.svg";
import escuelas from "../assets/rutas/escuelas.svg";
import genero from "../assets/rutas/genero.svg";
import interculturalidad from "../assets/rutas/interculturalidad.svg";
import medioAmbiente from "../assets/rutas/medio-ambiente.svg";
import vidaSaludable from "../assets/rutas/vida-saludable.svg";

type Props = {};

const RutasStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: cyan;
`;

export default function Rutas({}: Props) {
  return <RutasStyles id="rutas">Rutas</RutasStyles>;
}
