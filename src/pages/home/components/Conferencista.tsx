import React from "react";
import styled from "styled-components";

type Props = {
  titulo: string;
  imagen: string;
  nombre: string;
  cargo: string;
  position?: string[];
  imageSize?: string;
};
const ConferencistaStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin: 30px;
  @media (max-width: 800px) {
    padding-bottom: 30px;
    border-bottom: solid white 2px;
    margin: 0;
    &:last-child {
      border-bottom: none;
    }
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 20px;
    max-width: 20em;
    margin-bottom: 10px;
    font-family: "Lulo";
    color: white;
    font-size: medium;
    min-height: 80px;
  }
  h2 {
    text-align: center;
    line-height: 20px;
    max-width: 20em;
    margin-bottom: 10px;
    font-family: "Lulo-Bold";
    font-size: medium;
    color: white;
  }
  h3 {
    text-align: center;
    line-height: 20px;
    max-width: 20em;
    margin-bottom: 10px;
    font-family: "Lulo";
    font-size: small;
    color: white;
  }
  .imagen {
    width: 200px;
    height: 200px;
    margin: 20px;
    background-position: 0px 0px;
    border-radius: 100%;
    max-width: 200px;
    background-size: cover;
  }
`;

export default function Conferencista({
  titulo,
  imagen,
  nombre,
  cargo,
  position = ["0px", "0px"],
  imageSize,
}: Props) {
  return (
    <ConferencistaStyles id="conferencista-styles">
      <h1>{titulo}</h1>
      <div
        className="imagen"
        style={{
          backgroundImage: `url(${imagen})`,
          backgroundPositionX: position[0],
          backgroundPositionY: position[1],
          backgroundSize: imageSize ? imageSize : "cover",
        }}
      ></div>
      {/* <img src={imagen} alt="conferencia" /> */}
      <h2>{nombre}</h2>
      <h3>{cargo}</h3>
    </ConferencistaStyles>
  );
}
