import React from "react";
import styled from "styled-components";
import flor from "../assets/NEM-flor-icon.svg";
import { CAMPOS_FORMATIVOS_ARR } from "../pages/campos-formativos/constants";
import { EJES_ARTICULADORES_ARR } from "../pages/ejes-articuladores/constants";
import { SideBarList } from "./SideBarList";
import { useNavigate } from "react-router-dom";

type Props = { setPortalOpen: React.Dispatch<React.SetStateAction<boolean>> };

const SideBarStyles = styled.div`
  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #46001d70;
    width: 100%;
    height: 100vh;
    z-index: 99;
  }
  .navbar {
    position: fixed;
    overflow-y: auto;
    top: 0;
    right: 0;
    height: 100vh;
    width: 450px;
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%);
    box-shadow: 4px 4px 40px 4px #5e0025;
    z-index: 100;

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 100px;
      width: 100%;

      /* background-color: #5e0025; */
    }
    &__nem-text {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      width: 100%;
    }
    &__nem-container {
      margin-top: 1.5rem;
      padding-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: solid 2px white;
      cursor: pointer;
    }
    &__nem {
      color: white;
      font-family: Lulo-Bold;
      font-size: 1rem;
      line-height: 1.3rem;
    }
    &__list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 70%;
      margin: 2rem 0;
    }
    &__category {
      color: white;
      font-family: Lulo-Bold;
      font-size: 1rem;
      margin: 1rem 0;
    }
    img {
      width: 80px;
    }
    .cross {
      position: absolute;
      top: 0;
      right: 0;
      color: white;
      font-size: xx-large;
      z-index: 1200;
      margin: 15px;
      font-family: Lulo-Bold;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 800px) {
    .navbar {
      width: 100%;
    }
  }
`;

export const SideBar = ({ setPortalOpen }: Props) => {
  const navigate = useNavigate();
  function handleNEM() {
    navigate("/");
    setPortalOpen(false);
  }
  return (
    <SideBarStyles>
      <div
        onClick={() => {
          setPortalOpen(false);
        }}
        className="backdrop"
      ></div>
      <nav className="navbar">
        <div className="navbar__container">
          <div onClick={() => handleNEM()} className="navbar__nem-container">
            <img src={flor} alt="logo flor"></img>
            <div className="navbar__nem-text">
              <h1 className="navbar__nem">Nueva</h1>
              <h1 className="navbar__nem">Escuela</h1>
              <h1 className="navbar__nem">Mexicana</h1>
            </div>
          </div>
          <ul className="navbar__list">
            <h1 className="navbar__category">Campos formativos</h1>

            {CAMPOS_FORMATIVOS_ARR.map((campo: string, i: number) => {
              return <SideBarList setPortalOpen={setPortalOpen} tipo="campo" key={i} title={campo}></SideBarList>;
            })}

            <h1 className="navbar__category">Ejes articuladores</h1>
            {EJES_ARTICULADORES_ARR.map((campo: string, i: number) => {
              return <SideBarList setPortalOpen={setPortalOpen} tipo="eje" key={i} title={campo}></SideBarList>;
            })}
          </ul>
        </div>
        <div onClick={() => setPortalOpen(false)} className="cross">
          x
        </div>
      </nav>
    </SideBarStyles>
  );
};
