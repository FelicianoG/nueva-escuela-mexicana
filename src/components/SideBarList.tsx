import React from "react";
import styled from "styled-components";
import flor from "../assets/NEM-flor-icon.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  tipo: "campo" | "eje";
  setPortalOpen: any;
};

const SideBarListStyles = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff00;
  margin: 0.25rem;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
  width: 12rem;
  min-height: 1rem;
  padding: 3px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: #ff4b4b2d;
    transform: scale(1.1);
  }
  img {
    width: 30px;
    height: 30px;
    max-width: 30px;
    margin-right: 12px;
  }
  p {
    color: white;
    font-family: Lulo;
    font-size: 0.6rem;
    line-height: 1.25rem;
  }
`;

export const SideBarList = ({ title, tipo, setPortalOpen }: Props) => {
  const navigate = useNavigate();
  const url = tipo === "campo" ? `/campos-formativos/${title}` : `/ejes-articuladores/${title}`;
  return (
    <SideBarListStyles>
      <div
        onClick={() => {
          navigate(url);
          setPortalOpen(false);
        }}
      >
        <img src={flor}></img>
        <p>{title}</p>
      </div>
    </SideBarListStyles>
  );
};
