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
      margin: 0 0 4px 3rem;
      cursor: pointer;

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
  .eje-transversal {
    position: relative;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
    width: 100%;
    min-height: 80vh;
    margin-top: 4rem;
    overflow-x: hidden;
    text-align: center;
    > h1 {
      color: white;
      font-size: larger;
      font-size: clamp(1rem, 2vw, 1.5rem);
      font-family: "Lulo-bold";
      max-width: clamp(10rem, 80vw, 30rem);
      line-height: 2rem;
    }
    > h2 {
      color: white;
      font-size: larger;
      font-size: clamp(0.5rem, 1vw, 0.7rem);
      font-family: "Lulo";
      margin-top: 4rem;
      margin-bottom: 1rem;
      max-width: clamp(10rem, 80vw, 30rem);
      line-height: 1rem;
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 80%;
      max-width: 800px;
      z-index: 5;
      margin-top: 4rem;
      background-color: white;
      color: #d13d67;
      padding: 20px;
      border-radius: 2rem;
      box-shadow: 6px 6px 2px #00000040;
      padding: 80px 80px;
      &:last-child {
        margin-bottom: 80px;
      }
      @media (max-width: 800px) {
        flex-direction: column-reverse;
        padding: 4rem 0;
      }
      & > div {
        width: 50%;
      }
      img {
        width: 100%;
        background-color: white;
        @media (max-width: 800px) {
        }
      }
    }
    &__image-container {
      height: 100%;
    }
    .odd {
      flex-direction: row-reverse;
      @media (max-width: 800px) {
        flex-direction: column-reverse;
      }
    }
    &__title {
      font-size: clamp(1rem, 1vw, 2rem);
      line-height: clamp(2rem, 1vw, 2rem);
      font-family: "Lulo-Bold";
      margin-bottom: 40px;
    }
    &__nem h1 {
      margin-bottom: 4px;
    }
    &__logo-span {
      width: 30px;
      z-index: 4;
    }
    &__paragraph {
      font-family: "Helvetica";
      text-align: justify;
      font-size: clamp(1rem, 1vw, 2rem);
      max-width: 90%;
      line-height: 2rem;
      letter-spacing: 0.1rem;
      text-align: center;
      margin: auto;
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
    @media screen and (max-width: 800px) {
      .campo-formativo {
        &__title {
          font-size: large;
          text-align: center;
          width: 80%;
        }
        &__paragraph {
          font-family: "Helvetica";
          font-size: large;
          color: white;
          max-width: 70%;
          margin-bottom: 80px;

          line-height: 2rem;
          letter-spacing: 0.1rem;
        }
        &__video {
          width: 80%;
        }
      }
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
    @media screen and (max-width: 800px) {
      .footer {
        &__container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
