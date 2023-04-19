import React from "react";
import styled from "styled-components";
import { CamposFormativosIcons } from "../../../assets/campos-formativos/CamposFormativosSvg";

type Props = {
  title: string;
  img: string;
};

const CampoFormativoStyles = styled.div`
  background-color: white;
  color: #d13d67;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 1.5rem;
  border-radius: 10px;
  flex-basis: 200px;
  cursor: pointer;

  .title {
    font-family: Lulo-Bold;
    margin-bottom: 1.5rem;
  }
  img {
    max-width: 80px;
  }
`;

export const CampoFormativo = ({ title, img }: Props) => {
  return (
    <CampoFormativoStyles>
      <h1 className="title">{title}</h1>
      <img src={CamposFormativosIcons[img]}></img>
    </CampoFormativoStyles>
  );
};
