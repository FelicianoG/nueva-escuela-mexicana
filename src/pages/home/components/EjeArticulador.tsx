import React from "react";
import styled from "styled-components";
import { CamposFormativosIcons } from "../../../assets/campos-formativos/CamposFormativosSvg";
import { useNavigate } from "react-router-dom";
import { EjesArticuladoresIcons } from "../../../assets/campos-formativos/EjesArticuladoresSvg";

type Props = {
  title: string;
};

const EjeArticuladorStyles = styled.div`
  color: #d13d67;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 1.5rem 0;
  border-radius: 10px;
  min-width: 300px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  .eje-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .title {
    font-family: Lulo-Bold;
    margin-left: 1.5rem;
    line-height: 2rem;
    text-align: left;
    orphans: 3;
  }
  img {
    max-width: 80px;
  }
  @media (max-width: 600px) {
    .title {
      font-size: 0.7rem;
      width: 80%;
      text-align: center;
      margin: 0;
    }
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const EjeArticulador = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <EjeArticuladorStyles>
      <div onClick={() => navigate(`/ejes-articuladores/${title}`)} className="eje-container">
        <img src={EjesArticuladoresIcons[title]}></img>
        <h1 className="title">{title}</h1>
      </div>
    </EjeArticuladorStyles>
  );
};
