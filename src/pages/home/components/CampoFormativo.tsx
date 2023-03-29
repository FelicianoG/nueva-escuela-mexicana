import React from "react";
import styled from "styled-components";
import { CamposFormativosIcons } from "../../../assets/campos-formativos/CamposFormativosSvg";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
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
  min-height: 200px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  .campo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-family: Lulo-Bold;
    margin-bottom: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
  }
  img {
    max-width: 80px;
  }
`;

export const CampoFormativo = ({ title }: Props) => {
  const navigate = useNavigate();
  return (
    <CampoFormativoStyles>
      <div onClick={() => navigate(`/campos-formativos/${title}`)} className="campo-container">
        <h1 className="title">{title}</h1>
        <img src={CamposFormativosIcons[title]}></img>
      </div>
    </CampoFormativoStyles>
  );
};
