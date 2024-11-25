import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface TemperatureProps {
    height: number,
    dataValue: string
}

// Styled Components
const Wrapper = styled.div`
  display: flex;
  border-radius: 2rem;
  font-family: 'Jaldi', sans-serif;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  /* background-color: grey; */
  /* width: clamp(1rem,100%, 40rem) */
  @media (max-width: 800px) {
    flex-direction: column;
}
`;

const Thermometer = styled.div`
  width: 35px;
  background: #39393e;
  height: 460px;
  position: relative;
  border: 9px solid #353539;
  border-radius: 30px;
  z-index: 1;
  margin: 4rem;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    height: 200px;
    width: 20px;
    margin-top: 2rem;
  }
`;

const Bulb = styled.div`
  width: 70px; /* Example value */
  height: 70px; /* Example value */
  background-color: ${'#0090bd'};
  position: absolute;
  bottom: -25px; /* Half of the bulb height to position it */
  left: 50%;
  transform: translateX(-50%);
  border: 9px solid #353539; /* Matches the border size */
  border-radius: 50%;
  z-index: -1; /* Ensures it sits behind the thermometer */

  @media (max-width: 800px) {
    height: 40px;
    width: 40px;
  }
`;

const Temperature = styled.div<TemperatureProps>`
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 20px;
  transition: height 1s ease-in-out;
  height: ${(props) => props.height}; /* Adjust visible height */
  background: linear-gradient(

    #ff2a40 0%,     
    #ff2a40 12.5%,  
    #ff5742 12.5%, 
    #ff5742 25%, 
    #f27036 25%, 
    #f27036 37.5%, 
    #ffa70d 37.5%, 
    #ffa70d 50%, 
    #ffcf09 50%, 
    #ffcf09 62.5%, 
    #bbc45b 62.5%, 
    #bbc45b 75%, 
    #45b59d 75%, 
    #45b59d 85%, 
    #0090bd 85%, 
    #0090bd 100%
  );
  background-size: 100% 460px; /* Fixed size matching the thermometer height */
  background-position: bottom; /* Anchor the gradient at the bottom */
  background-repeat: no-repeat;
  overflow: hidden; /* Ensure only the visible portion of the gradient is shown */
  &:before {
    content: '${(props) => props.dataValue}';
    position: absolute;
    top: -30px;
    left: 100%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1em;
  }

  /* Media Query for Smaller Screens */
  @media (max-width: 800px) {

    background: linear-gradient(
      #ff2a40 0%,     
      #ff2a40 12.5%,  
      #ff5742 12.5%, 
      #ff5742 25%, 
      #f27036 25%, 
      #f27036 37.5%, 
      #ffa70d 37.5%, 
      #ffa70d 50%, 
      #ffcf09 50%, 
      #ffcf09 62.5%, 
      #bbc45b 62.5%, 
      #bbc45b 75%, 
      #45b59d 75%, 
      #45b59d 85%, 
      #0090bd 85%, 
      #0090bd 100%
    );
    background-size: 100% 200px; /* Ensure gradient size stays fixed */
    background-position: bottom; /* Anchor gradient at the bottom */
    width: 100%; /* Make the width responsive */
    background-repeat: no-repeat;
    overflow: hidden; /* Clip overflowing content */

    &:before {
      content: '${(props) => props.dataValue}';
      position: absolute;
      top: -30px;
      left: 100%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 1em;
    }
  }
`;


const Description = styled.div`
      border: solid black 2px;
      border-color: ${(props) => props.color};
      margin:2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 30%;
      padding: 3rem;
      height: 100%;

      h1 {
        font-family: "Lulo";
        font-size: large;
        font-weight: 600;
        line-height: 2rem;
        color: ${(props) => props.color};
        margin: none;
        margin-bottom: 1rem;
      }
 
      p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
        line-height: 2rem;
        color: #666
      }  

      @media (max-width: 800px) {
        padding: 1.4rem;
        width: 80%;
        max-width: unset;
        margin-left: 0;
        margin-right: 0;

        h1 {
            font-size: medium;
        }

        p {
            font-size: 1rem;
            line-height: 1.6rem;
        }
    }
`


// Main Component
const ThermometerApp = () => {
    const units = { Celcius: '°C', Fahrenheit: '°F' };
    const [config, setConfig] = useState({
        minTemp: 0,
        maxTemp: 50,
        unit: 'Celcius',
    });
    const termoDescriptions = {
        trata: {
            title: "Trata virtual de personas",
            description:
                "Conlleva la intermediación de las tecnologías para el ejercicio de poder sobre una víctima con el objeto de cometer abuso o explotación sexual de su imagen y/o de su cuerpo contra su voluntad. Uso de juegos en línea para atraer víctimas. Enganche y manipulación emocional. Seleccionan a víctimas más vulnerables: mujeres, niños, niñas."
        },
        difusion: {
            title: "Difusión de contenido íntimo sin consentimiento",
            description:
                "Consiste en la difusión en línea no consensuada de imágenes íntimas obtenidas con o sin el consentimiento de la persona, con el propósito de avergonzar, estigmatizar o perjudicar a la víctima. Existencia de material audiovisual (real o editado) de carácter íntimo y/o sexual. Creación, almacenamiento, manipulación, producción, difusión, publicación, distribución, facilitación, cesión o entrega a terceros de este material."
        },
        sextorsion: {
            title: "Sextorsión",
            description:
                "Implica el envío o publicación de comunicaciones o contenidos digitales que le anticipan a una persona la intención de cometer en su contra un daño físico o violencia sexual, o en contra de sus familiares, amistades o bienes. Ataques sexuales organizados o planificados mediante el uso de tecnologías, redes o sitios de citas. Presión sobre una persona para forzarla a actuar de cierto modo, obtener dinero, y/o amenazas de difundir información privada para chantaje sexual."
        },
        difamacion: {
            title: "Difamación virtual",
            description:
                "Implica la creación, manipulación y publicación de información personal falsa, manipulada o fuera de contexto con la intención de descalificar o dañar la reputación de una persona. Creación de perfiles falsos en redes sociales o sitios en línea para afectar la reputación de la víctima. Publicación de publicidad falsa en sitios de citas o pornográficos. Uso y manipulación no consentida de información personal (fotos y videos)."
        },
        suplantacion: {
            title: "Suplantación virtual",
            description:
                "Consiste en la utilización de la imagen, información o datos de una persona o la creación de una identidad falsa sin su consentimiento, utilizando tecnología para amenazar, intimidar o dañar su reputación. Creación de perfiles falsos en redes sociales. Uso de cuentas de correo electrónico con información o imágenes de otra persona para cometer fraudes, como robo de dinero o compras en línea."
        },
        hostigamiento: {
            title: "Hostigamiento virtual",
            description:
                "Implica la comisión reiterada de actos abusivos y perturbadores a través de tecnología, con el objetivo de hostigar, intimidar, acechar, molestar, atacar, humillar, amenazar, asustar, ofender o abusar verbalmente de una víctima. Actos reiterados de hostigamiento, ataques, humillaciones, amenazas y ofensas mediante correos electrónicos, llamadas, mensajes de texto, chats en línea o plataformas de redes sociales."
        },
        acecho: {
            title: "Acecho virtual",
            description:
                "Consiste en el rastreo constante de las actividades en línea y fuera de línea de una víctima, así como de su ubicación, desplazamientos e información, utilizando tecnología. Utilización de software espía en dispositivos electrónicos (sin consentimiento de la víctima), permitiendo el control remoto de cámaras o micrófonos en teléfonos móviles."
        },
        insultos: {
            title: "Insultos electrónicos",
            description:
                "Implica el uso de tecnología para abusar, humillar, molestar, atacar, amenazar, degradar, intimidar, ofender o insultar a una persona, creando un ambiente ofensivo y hostil en los espacios digitales. Expresiones o comentarios discriminatorios. Envío de materiales sexualmente explícitos no solicitados (cyberflashing), como videos explícitos o fotografías ofensivas."
        }
    };
    const termoValues = {
        insultos: 0,
        acecho: 12.5,
        hostigamiento: 18.75,
        suplantacion: 25,
        difamacion: 31,
        sextorsion: 37.5,
        difusion: 43.5,
        trata: 50
    }

    const termoColors = {
        trata: '#ff2a40',
        difusion: '#ff5742',
        sextorsion: '#f27036',
        difamacion: '#ffa70d',
        suplantacion: '#ffcf09',
        hostigamiento: '#bbc45b',
        acecho: '#45b59d',
        insultos: '#0090bd',
    }

    const [temperature, setTemperature] = useState(0);
    const [temperatureHeight, setTemperatureHeight] = useState('0%');
    const [topic, setTopic] = useState(termoDescriptions.insultos)
    const [topicColor, setTopicColor] = useState(termoColors.insultos)
    const [selected, setSelected] = useState(0)

    const calculateHeight = () => {
        const height =
            ((temperature - config.minTemp) / (config.maxTemp - config.minTemp)) *
            100;
        setTemperatureHeight(`${height}%`);
    };

    const handleClick = (topic: string) => {
        setTemperature(termoValues[topic])
        setTopic(termoDescriptions[topic])
        setTopicColor(termoColors[topic])
        switch (topic) {
            case 'trata': setSelected(1);
                break;
            case 'difusion': setSelected(2)
                break;
            case 'sextorsion': setSelected(3)
                break;
            case 'difamacion': setSelected(4)
                break;
            case 'suplantacion': setSelected(5)
                break;
            case 'hostigamiento': setSelected(6)
                break;
            case 'acecho': setSelected(7)
                break;
            case 'insultos': setSelected(8)
                break;
        }
    }

    useEffect(() => {
        calculateHeight();
    }, [temperature, config]);


    return (
        <Wrapper>
            <Thermometer>
                <Temperature
                    height={temperatureHeight}
                    dataValue={`${temperature}${units[config.unit]}`}
                />
                <Bulb />
            </Thermometer>

            <div className="options">
                <div onClick={() => handleClick('trata')}>
                    <p style={selected === 1 ? { fontWeight: 'bold' } : {}}>
                        Trata virtual de personas
                    </p>
                </div>
                <div onClick={() => handleClick('difusion')}>

                    <p style={selected === 2 ? { fontWeight: 'bold' } : {}}>Difusión de contenido íntimo sin consentimiento</p>
                </div>
                <div onClick={() => handleClick('sextorsion')}>
                    <p style={selected === 3 ? { fontWeight: 'bold' } : {}}>Sextorsión</p></div>
                <div onClick={() => handleClick('difamacion')}>

                    <p style={selected === 4 ? { fontWeight: 'bold' } : {}}>Difamación virtual</p>
                </div>
                <div onClick={() => handleClick('suplantacion')}>

                    <p style={selected === 5 ? { fontWeight: 'bold' } : {}}>Suplantación virtual</p>
                </div>
                <div onClick={() => handleClick('hostigamiento')}>

                    <p style={selected === 6 ? { fontWeight: 'bold' } : {}}>Hostigamiento virtual</p>
                </div>
                <div onClick={() => handleClick('acecho')}>
                    <p style={selected === 7 ? { fontWeight: 'bold' } : {}}>Acecho virtual</p></div>
                <div onClick={() => handleClick('insultos')}>

                    <p style={selected === 8 ? { fontWeight: 'bold' } : {}}>Insultos electrónicos</p>
                </div>
            </div>
            <Description className="description" color={topicColor}>
                <h1>{topic.title}</h1>
                <p>{topic.description}</p>
            </Description>
        </Wrapper>
    );
};

export default ThermometerApp;
