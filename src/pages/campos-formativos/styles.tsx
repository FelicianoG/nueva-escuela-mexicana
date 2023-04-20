import styled from "styled-components";

export const CampoStyleWrapper = styled.div`
  position: relative;
  height: 100vh;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    opacity: 100%;
    transition: all;
    z-index: 6;

    &__background {
      position: fixed;
      top: 0;
      left: 0;
      background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
      height: 4rem;
      width: 100%;
      transition: opacity 1s;
      opacity: 100%;
      box-shadow: 2px 2px 2px #00000040;
      z-index: 3;
    }
    &__background--transparent {
      opacity: 0;
    }
    &__logo {
      width: 30px;
      margin: 30px;
      z-index: 4;
    }
    &__nem {
      z-index: 4;
      cursor: pointer;
      margin: 0 0 4px 3rem;

      h1 {
        margin: 3px;
        font-size: 0.6rem;
        font-family: "Lulo-Bold";
        z-index: 8;
      }
      h2 {
        margin: 3px;
        font-size: 0.6rem;
        font-family: "Lulo";
        z-index: 8;
        color: #ffb375;
      }
    }
  }
  .campo-formativo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
    width: 100%;
    min-height: 80vh;
    margin-top: 4rem;
    overflow-x: hidden;

    &__title {
      color: white;
      font-size: 2em;
      font-family: "Lulo-Bold";
      margin-bottom: 40px;
      line-height: 3rem;
      text-align: center;
    }
    &__nem h1 {
      margin-bottom: 4px;
    }

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 800px;
      z-index: 5;
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
    &__logo-span {
      width: 30px;
      z-index: 4;
    }
    &__paragraph {
      width: 80%;
      font-family: "Helvetica";
      font-size: large;
      color: white;
      max-width: 60rem;
      margin-bottom: 80px;
      text-align: justify;

      line-height: 2rem;
      letter-spacing: 0.1rem;
    }
    &__video {
      border: solid white 16px;
      margin-bottom: 3rem;
    }
    &__btn {
      background-color: #d13d67;
      border: none;
      padding: 1rem 2rem;
      font-family: "Lulo-Bold";
      color: white;
      border-radius: 8px;
      transition: all 0.25s ease-in-out;
      cursor: pointer;
    }
    &__btn:hover {
      background-color: #de557c;
    }
    &__flor-container {
      display: flex;
      position: absolute;
      width: 100%;
      height: inherit;
      align-items: flex-end;
      justify-content: flex-end;
      z-index: 1;
    }
    &__flor {
      width: 400px;
      height: 400px;
      align-self: flex-end;
      justify-self: flex-end;
    }
  }
  .community-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 800px;

    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      min-height: 400px;
      margin: 4rem 0 4rem;
      overflow-x: hidden;
      max-width: 1000px;
    }

    &__image-container {
      display: flex;
      justify-content: flex-end;
      width: 40%;
      margin-right: 60px;
      img {
        box-sizing: border-box;
        width: 80%;

        min-width: 200px;
        max-width: 260px;
      }
    }
    &__text {
      width: 60%;
      color: #d13d67;

      &__title {
        font-family: "Lulo-Bold";
        margin-bottom: 1.5rem;
      }
      &__paragraph {
        font-family: "Helvetica";
        max-width: 30rem;
        margin-bottom: 30px;
        text-align: justify;
        letter-spacing: 0.1rem;
      }
    }
  }
  .campos-formativos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
    color: white;
    min-height: 800px;

    &__container {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    &__title {
      font-family: "Lulo-Bold";
      font-size: x-large;
    }
    &__description {
      font-family: "Helvetica";
      font-size: medium;
      line-height: 1.5rem;
      max-width: 40rem;
      margin-bottom: 30px;
      text-align: justify;
      letter-spacing: 0.1rem;
    }
    &__logo {
      width: 30px;
      margin-right: 0.75rem;
      z-index: 4;
    }
    &__title-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    &__campos {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-basis: 200px;
      flex-grow: initial;
      align-items: center;
      width: 80%;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 800px) {
      .campos-formativos {
        &__description {
          color: #73d13d;
        }
      }
    }
  }
  .ejes-articuladores {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: white;
    color: #d13d67;
    min-height: 1100px;

    &__container {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-family: "Lulo-Bold";
    }
    &__description {
      font-family: "Helvetica";
      max-width: 30rem;
      margin-bottom: 30px;
      text-align: justify;
      letter-spacing: 0.1rem;
    }
    &__logo {
      width: 30px;
      margin-right: 0.75rem;
      z-index: 4;
    }
    &__title-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    &__ejes {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
    }
    li {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .footer {
    top: 0;
    left: 0;
    color: white;
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 6;

    &__division {
      background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
      height: 12px;
      width: 100%;
      opacity: 100%;
      z-index: 3;
    }
    &__container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      min-width: 80px;
      max-width: 120px;
      margin: 30px;
      z-index: 4;
    }
  }
  @media screen and (max-width: 800px) {
    .campo-formativo__video {
      width: 80%;
    }
    .footer {
      &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
