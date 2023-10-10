import styled from "styled-components";
import Camara from "../../assets/conferencias/camara/dr-camara.png";

export const HomePageStyleWrapper = styled.div`
  position: relative;
  overflow-x: hidden;

  iframe {
    width: 50vw;
    height: calc(50vw * 0.56);
    @media (max-width: 800px) {
      width: 100%;
      height: calc(100vw * 0.56);
    }
  }

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
      background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
      height: 4.2rem;
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
      margin: 12px 0 4px 3rem;
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
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
    width: 100%;
    height: 500px;

    &__nem {
      color: white;
      font-size: 2em;
      font-family: "Lulo-Bold";
    }
    &__nem h1 {
      margin-bottom: 4px;
      font-size: 2rem;
    }
    &__nem h2 {
      font-family: "Lulo";
      font-size: large;
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
      text-align: left;
      line-height: 1.4;
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
      width: 600px;
      height: 600px;
      align-self: flex-end;
      justify-self: flex-end;
    }
  }
  .camara-section {
    position: relative;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
    width: 100%;
    padding: 6rem 0;

    .content {
      border-radius: 2rem;
      background-color: #fff;
      box-shadow: 1rem 1rem 0.2rem 0.2rem #00000040;
      padding: 3rem;
      box-sizing: border-box;
      max-width: 760px;
      display: flex;
      align-items: center;
      width: 70%;
      .text-container {
        flex: 1;
        padding-right: 1rem;
        max-width: 30rem;
        font-size: 1.2rem;
        font-family: "Lulo-Bold";
        color: rgba(158, 0, 93, 1);
        line-height: 1.8rem;
        .decoration {
          min-height: 3px;
          width: 100%;
          background-color: rgba(211, 100, 74, 1);
          margin: 1rem 0;
        }
        > h2 {
          margin: 0 0 0.8rem;
          font-family: "Lulo";
        }
        > h1 {
          font-size: x-large;
          color: rgba(211, 100, 74, 1);
          margin-bottom: 1.2rem;
          line-height: 2.2rem;
        }
      }
      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;

        .image {
          background-image: ${"url(" + Camara + ")"};
          background-position-x: 45%;
          background-size: cover;
          min-width: 260px;
          min-height: 260px;
          border-radius: 100%;
          border: rgba(211, 100, 74, 1) solid 0.8rem;
          background-color: rgba(158, 0, 93, 1);
        }
      }
    }
    .logos {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 70%;
      max-width: 720px;
      margin-top: 5rem;

      .conafe {
        width: clamp(100px, 20vw, 230px);
      }
      .sep {
        width: clamp(100px, 20vw, 230px);
      }
      .sec {
        width: clamp(100px, 16vw, 160px);
      }
    }
    @media (max-width: 800px) {
      .content {
        transform: scale(0.9);
        margin-top: 2rem;
        padding: 3rem 3rem 1rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        width: 90%;
        text-align: center;

        .text-container {
          transform: translateY(-60px);
          flex: 1;
          padding-right: 1rem;
          max-width: 30rem;
          font-size: 0.8rem;
          font-family: "Lulo-Bold";
          color: rgba(158, 0, 93, 1);
          line-height: 1.2rem;

          .decoration {
            display: none;
          }
          > h2 {
            margin: 0 0 0.8rem;
            font-family: "Lulo";
          }

          > h1 {
            font-size: large;
            background-color: rgba(211, 100, 74, 1);
            box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #33333330;
            border-radius: 1rem;
            padding: 1rem;
            color: white;
            margin-bottom: 1.2rem;
            line-height: 1.8rem;
          }
        }
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 0;
          .image {
            transform: translateY(-90px);
            background-image: ${"url(" + Camara + ")"};
            background-position-x: 45%;
            background-size: cover;
            min-width: 200px;
            min-height: 200px;
            border-radius: 100%;
            border: rgba(211, 100, 74, 1) solid 0.8rem;
            background-color: rgba(158, 0, 93, 1);
          }
        }
      }
      .logos {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        min-height: 100px;
        width: 70%;
        max-width: 720px;
        margin: 2rem 0;
        .conafe {
          width: 200px;
        }
        .sep {
          margin: 2rem 0;
          width: 200px;
        }
        .sec {
          margin: 2rem 0;
          width: 200px;
        }
      }
    }
  }
  .conferencias-section {
    display: flex;
    font-size: small;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 700px;
    gap: 40px;
    padding: 30px;
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
    border-top: white 5px solid;
    padding-top: clamp(2rem, 20vw, 10rem);
    padding-bottom: clamp(2rem, 20vw, 10rem);

    &__title {
      font-size: small;
      font-family: "Lulo-Bold";
      text-align: center;
      color: white;
      line-height: 25px;
      :first-of-type {
        font-size: x-large;
        line-height: 2rem;
        text-align: center;
      }
    }
    .flor-icon {
      width: 3rem;
      margin-right: 1rem;
      @media (max-width: 800px) {
        display: none;
      }
    }
    &__container {
      display: flex;
      @media (max-width: 800px) {
        flex-direction: column;
      }
    }
  }

  .rutas-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    width: 100%;

    min-height: 60vw;

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
  .docentes {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 500px;
    gap: 40px;
    /* padding: 30px; */
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
    border-top: white 5px solid;

    &__title {
      font-family: "Lulo-Bold";
      font-size: 1.4rem;
      max-width: 600px;
      color: white;
      text-align: center;
      padding: 30px;
      @media (max-width: 400px) {
        font-size: 0.9rem;
        line-height: 1.2rem;
      }
    }

    &__image-container-row {
      width: 100%;
      max-height: 200px;
      margin-bottom: 100px;
    }
    &__image-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 500px;
      gap: 40px;
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
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
    border-top: white 5px solid;

    &__title {
      font-family: "Lulo-Bold";
      color: white;
      margin-bottom: 4rem;
      text-align: center;
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
  .documentos {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 700px;
    gap: 40px;
    padding: 30px;
    &__title {
      font-family: "Lulo-Bold";
      font-size: x-large;
      color: #d13d67;
      margin-bottom: 30px;
      text-align: center;
      margin: none;
      @media (max-width: 800px) {
        margin-top: 40px;
      }
    }
    &__subtitle {
      font-family: "Lulo";
      color: #d13d67;
      margin-bottom: 30px;
      text-align: center;
      @media (max-width: 800px) {
        margin-top: 40px;
      }
    }
    &__container {
      display: flex;
      gap: 2rem;
      @media (max-width: 800px) {
        flex-direction: column;
      }
    }
    &__item {
      background-color: #d13d67;
      color: white;
      padding: 3rem;
      border-radius: 1rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.05);
        background-color: #d13d3d;
      }
      h3 {
        font-family: "Lulo";
        text-align: center;
        user-select: none;
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
      text-align: center;
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
    background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
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
      text-align: center;
    }
    &__description {
      font-family: "Helvetica";
      font-size: medium;
      line-height: 1.5rem;
      max-width: 40rem;
      margin-bottom: 30px;
      text-align: center;
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
      text-overflow: hidden;
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
  .capacitaciones-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: white;
    color: #d13d67;
    color: #555;
    padding: 80px 0;

    .creson {
      width: clamp(14rem, 30%, 300px);
      margin-bottom: clamp(0.2rem, calc(0.2rem + 2vw), 3rem);
    }
    & > div {
      display: flex;
      justify-content: center;
      width: 100%;
      overflow-x: auto;
      @media (max-width: 680px) {
        justify-content: flex-start;
      }
    }
    h1 {
      font-family: "Lulo-Bold";
      color: #d13d67;
      margin-bottom: 30px;
      line-height: 1.4rem;
      text-align: center;
      max-width: 80%;
      @media (max-width: 800px) {
        margin-top: 40px;
      }
    }
    h2 {
      font-family: "Lulo";
      color: #d13d67;
      font-size: 0.8rem;
      margin-bottom: 30px;
      line-height: 1.4rem;
      text-align: center;
      max-width: 80%;
      margin-top: 0;
      @media (max-width: 800px) {
        margin-top: 0;
      }
    }

    table {
      border-collapse: collapse;
      width: 80%;
      font-family: "Lulo";
      font-size: clamp(0.6rem, 1vw, 0.8rem);
      line-height: 1.2rem;
    }
    th,
    td {
      text-align: left;
      padding: 12px;
    }

    th {
      background-color: #f2f2f2;
      color: #333;
      font-weight: bold;
    }

    tbody tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tbody tr:hover {
      background-color: #ddd;
    }
    th {
      font-family: "Lulo-bold";
      background-color: #de557c;
      color: white;
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
      font-size: large;
      line-height: 1.5rem;
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
      background: linear-gradient(157deg, rgba(158, 0, 93, 1) 0%, rgba(173, 28, 88, 1) 48%, rgba(211, 100, 74, 1) 92%, rgba(251, 176, 59, 1) 100%);
      width: 100%;
      height: 700px;
      overflow-x: hidden;
      @media (max-width: 500px) {
        height: 660px;
        &__flor {
          width: 100%;
          height: unset;
          align-self: flex-end;
          justify-self: flex-end;
        }
      }
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
