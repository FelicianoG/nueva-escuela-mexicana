import React from "react";
import styled from "styled-components";
import { CamposFormativosIcons } from "../../../assets/campos-formativos/CamposFormativosSvg";

type Props = {
  title: string;
  img: string;
};

const EjeArticuladorStyles = styled.div`
  color: #d13d67;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  margin: 1.5rem;
  border-radius: 10px;
  min-width: 400px;
  cursor: pointer;

  .title {
    font-family: Lulo-Bold;
    margin-left: 1.5rem;
    line-height: 2rem;
  }
  img {
    max-width: 80px;
  }
`;

export const EjeArticulador = ({ title, img }: Props) => {
  return (
    <EjeArticuladorStyles>
      <img src={CamposFormativosIcons[img]}></img>
      <h1 className="title">{title}</h1>
    </EjeArticuladorStyles>
  );
};
