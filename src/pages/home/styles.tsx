import styled from "styled-components";

export const HomePageStyleWrapper = styled.div`
  position: relative;
  a {
    text-decoration: none;
  }
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
      background: linear-gradient(
        157deg,
        rgba(158, 0, 93, 1) 0%,
        rgba(173, 28, 88, 1) 48%,
        rgba(211, 100, 74, 1) 92%,
        rgba(251, 176, 59, 1) 100%
      );
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
    }
    &__nem h1 {
      margin: 3px;
      font-size: 0.6rem;
      font-family: "Lulo-Bold";
      z-index: 8;
    }
    &__nem h2 {
      margin: 3px;
      font-size: 0.6rem;
      font-family: "Lulo";
      z-index: 8;
      color: #ffb375;
    }
  }
  .hero-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      157deg,
      rgba(158, 0, 93, 1) 0%,
      rgba(173, 28, 88, 1) 48%,
      rgba(211, 100, 74, 1) 92%,
      rgba(251, 176, 59, 1) 100%
    );
    width: 100%;
    height: 500px;

    overflow-x: hidden;

    &__nem {
      color: white;
      font-size: 2em;
      font-family: "Lulo-Bold";
    }
    &__nem h1 {
      margin-bottom: 4px;
    }
    &__nem h2 {
      font-family: "Lulo";
      margin-bottom: 4px;
      color: #ffb375;
    }
    &__hero-title {
      display: flex;
      align-items: end;
      margin-bottom: 30px;
    }
    &__container {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 100%;
      margin-right: 18rem;
      max-width: 800px;
      z-index: 5;
      @media (max-width: 1300px) and (min-width: 800px) {
        margin-left: 50px;
      }
    }
    &__logo-span {
      width: 30px;
      transform: translateY(-6px);
      z-index: 4;
    }
    &__description {
      font-family: "Helvetica";
      color: white;
      max-width: 30rem;
      margin-bottom: 30px;
      text-align: justify;
      letter-spacing: 0.1rem;
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
  .infografias {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 700px;
    gap: 40px;
    padding: 30px;
    background: linear-gradient(
      157deg,
      rgba(158, 0, 93, 1) 0%,
      rgba(173, 28, 88, 1) 48%,
      rgba(211, 100, 74, 1) 92%,
      rgba(251, 176, 59, 1) 100%
    );
    border-top: white 5px solid;

    &__title {
      font-family: "Lulo-Bold";
      color: white;
      @media (max-width: 800px) {
        margin-top: 40px;
      }
    }

    &__image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 40px;
      @media (max-width: 800px) {
        flex-direction: column;
      }
    }
    &__image {
      max-height: 20vw;
      @media (max-width: 800px) {
        max-width: 80%;
        max-height: unset;
        &:last-child {
          margin-bottom: 40px;
        }
      }
    }
  }
  .video-section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 40px 0;

    &__container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__video {
      width: 85%;
      width: 70vw;
      height: 40vw;
      max-height: 567px;
      max-width: 1000px;
    }
    &__title {
      font-family: "Lulo-Bold";
      color: #d13d67;
      margin-bottom: 30px;
      @media (max-width: 800px) {
        margin-top: 40px;
      }
    }
    &__paragraph {
      font-family: "Helvetica";
      font-size: medium;
      line-height: 1.5rem;
      max-width: 40rem;
      margin-bottom: 30px;
      text-align: justify;
      letter-spacing: 0.1rem;
    }
  }
  .community-section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 800px;

    &__decoration {
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      height: 200px;
      margin: 80px 4vw;
      border-top: solid 6px #d13d67;
      border-right: solid 6px #d13d67;
    }
    &__decoration-two {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 200px;
      height: 200px;
      margin: 80px 4vw;
      border-left: solid 6px #d13d67;
      border-bottom: solid 6px #d13d67;
    }
    &__container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 70%;
      min-height: 400px;
      margin: 4rem 0 4rem;
      overflow-x: hidden;
    }

    &__image-container {
      display: flex;
      justify-content: center;
      margin-right: 60px;
      margin-bottom: 30px;
      flex-basis: 400px;
      flex-grow: 2;

      img {
        box-sizing: border-box;
        max-width: 500px;
        min-width: 350px;
        width: 100%;
        margin-top: 80px;
        @media (max-width: 600px) {
          min-width: unset;
          margin-top: 60px;
        }
      }
    }
    &__text {
      flex-grow: 1;
      width: 60%;
      color: #d13d67;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;

      &__title {
        display: flex;
        font-family: "Lulo-Bold";
        font-size: x-large;
        margin-bottom: 1.5rem;
      }
      &__paragraph {
        font-family: "Helvetica";
        font-size: medium;
        line-height: 1.5rem;
        max-width: 40rem;
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
    background: linear-gradient(
      157deg,
      rgba(158, 0, 93, 1) 0%,
      rgba(173, 28, 88, 1) 48%,
      rgba(211, 100, 74, 1) 92%,
      rgba(251, 176, 59, 1) 100%
    );
    color: white;
    min-height: 800px;
    padding-bottom: 100px;

    &__container {
      display: flex;
      flex-direction: column;
      margin-top: 100px;
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

    &__lista {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 80%;
    }

    &__container {
      margin-top: 100px;
      display: flex;
      flex-direction: column;
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
    &__ejes {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      margin-bottom: 50px;
    }
    li {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    .ejes-articuladores__ejes {
      width: 100%;
    }
    .ejes-articuladores__logo,
    .campos-formativos__logo {
      display: none;
    }

    .campos-formativos__title,
    .ejes-articuladores__title {
      width: 80%;
    }

    ul {
      flex-direction: column;
    }
    .eje-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .ejes-articuladores__lista-element {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .hero-section h1 {
      font-size: x-large;
      line-height: 1.75rem;
      text-align: left;
      margin: 0;
    }
    .hero-section__logo-span {
      width: 30px;
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
      background: linear-gradient(
        157deg,
        rgba(158, 0, 93, 1) 0%,
        rgba(173, 28, 88, 1) 48%,
        rgba(211, 100, 74, 1) 92%,
        rgba(251, 176, 59, 1) 100%
      );
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
    .footer__container {
      flex-direction: column;
      margin-bottom: 20px;
      a {
        margin: 0;
        img {
          margin: 20px 0;
        }
      }
    }
    .hero-section {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background: linear-gradient(
        157deg,
        rgba(158, 0, 93, 1) 0%,
        rgba(173, 28, 88, 1) 48%,
        rgba(211, 100, 74, 1) 92%,
        rgba(251, 176, 59, 1) 100%
      );
      width: 100%;
      height: 700px;
      overflow-x: hidden;

      &___nem {
        width: 100%;
      }
      &__title {
        justify-self: flex-start;
        align-self: flex-start;
        width: 100%;
      }
      &__container {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        width: 80%;
        z-index: 5;
        margin: 0;
        margin-top: 7rem;
      }
    }
    .ejes-articuladores {
      &__description {
        padding: 0 40px;
      }
    }
    .campos-formativos {
      &__description {
        padding: 0 40px;
      }
    }
    .community-section__image-container img {
      min-width: none;
      max-width: none;
    }
  }
`;
