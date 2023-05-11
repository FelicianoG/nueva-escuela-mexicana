import imagenEducatronica from "./assets/ciencia/imagenEducatronica.png";
import imagenCompetenciaRobotica from "./assets/ciencia/imagenCompetenciaRobotica.png";
import imagenCuantrix from "./assets/ciencia/imagenCuantrix.png";
import imagenFirstLegoLeague from "./assets/ciencia/imagenFirstLegoLeague.png";
import imagenHackaton from "./assets/ciencia/imagenHackaton.png";
import imagenTecnolochicas from "./assets/ciencia/imagenTecnolochicas.png";
import imagenSoyImportante from "./assets/genero/imagenSoyImportante.png";
import imagenProyectoVida from "./assets/genero/imagenProyectoVida.png";
import imagenConvocatorias from "./assets/genero/imagenConvocatorias.png";
import imagenAcoso from "./assets/genero/imagenAcoso.png";
import oasisEscolar from "./assets/medio-ambiente/oasisEscolares.png";
import corresponsabilidad from "./assets/medio-ambiente/corresponsabilidad.png";
import interculturalidad from "./assets/interculturalidad/interculturalidad.png";
import trucha from "./assets/ciudadania/trucha.png";
import escuelas from "./assets/ciudadania/escuelas.png";
import consejos from "./assets/ciudadania/consejos.png";
import mantenteReal from "./assets/salud/mantenteReal.png";
import ambientes from "./assets/salud/ambientes.png";
import nutricion from "./assets/salud/nutricion.png";
import capsulas from "./assets/salud/capsulas.png";
import prevencion from "./assets/salud/prevencion.png";

export const EJES_ARTICULADORES: any = {
  Inclusión:
    "Este eje señala que es fundamental ir más allá de la idea de que la inclusión se reduce a incorporar a los grupos de la sociedad a la escuela, lo cual es muy importante, pero no es suficiente. Pensar la inclusión desde una perspectiva decolonial implica que los niños, niñas y adolescentes se formen en espacios educativos en los que sean conscientes de que, si falta una o uno por motivos de clase, sexo, género, etnia, lengua, cultura, capacidad, condición migratoria o religión, entonces no están incluidos todos ni todas. Con lo anterior se trata de que la escuela construya una perspectiva comunitaria en donde las acciones individuales y colectivas en zonas urbanas y rurales con el acompañamiento de las familias; las reuniones de Consejo Técnico Escolar; el trabajo colegiado de las maestras y los maestros; el uso de los espacios escolares empezando por el aula, talleres y laboratorios, así como las relaciones pedagógicas estén enfocadas en la inclusión.",
  "Pensamiento crítico":
    "El eje articulador de pensamiento crítico, en donde lo crítico se entiende como la recuperación del otro desde la diversidad, es fundamental para la formación de una ciudadanía con valores democráticos y justicia social. Una primera tarea del pensamiento crítico es propiciar en las y los estudiantes de la educación básica un desarrollo gradual de capacidades para entender y analizar la complejidad de su mundo inmediato, de las personas y sus experiencias como acciones que actúan de manera conjunta e influyen entre sí.",
  "Interculturalidad Crítica":
    "Este eje articulador parte de que las culturas son matrices dinámicas y complejas de producción de imaginación, creencia, comprensión, interpretación y acción que las personas y los grupos construyen e interiorizan para dar sentido y razón a su vida, a su comunidad y a los contextos geográficos y sociales en que habitan. Las culturas generan tipos específicos de subjetividad, formas originales de ser humano, que a su vez producen, crean y recrean esas mismas culturas. La interculturalidad se refiere a sujetos, comunidades e identidades lingüísticas, culturales, sociales y territoriales en su diversidad, que interactúan, dialogan, se interpelan y producen entre sí diferentes realidades en un marco de relaciones asimétricas. Pensar la educación preescolar, primaria y secundaria desde la interculturalidad supone para todas y todos que es posible enseñar y aprender conocimientos y saberes desde diversos fundamentos conceptuales que permiten a las y los estudiantes pensarse a sí mismas y a sí mismos, en coexistencia con los otros y el medio ambiente.",
  "Igualdad de género":
    "La incorporación de un eje sobre igualdad de género en la educación preescolar, primaria y secundaria supone una formación en la que niñas, niños y adolescentes cuestionen prácticas institucionalizadas desde donde se asigna a cada persona una identidad sexual, racial y un género que termina estableciendo desigualmente su condición laboral, social y educativa en la comunidad o fuera de ésta. Se necesita abrir espacios de reflexión en las escuelas para que niñas, niños y adolescentes puedan comprender que la igualdad de género es una condición histórica, no un rasgo cultural de la sociedad, por lo que la violencia en contra de las mujeres se ejerce a partir de un conjunto de desigualdades sociales, económicas, étnicas, lingüísticas, territoriales que se basan en una inexistente desigualdad biológica.",
  "Vida saludable":
    "Este eje procura introducir en la vida escolar la comprensión de que salud humana y medio ambiente son organismos vivos interdependientes; el cuidado de uno tiene efectos positivos en otras personas y viceversa. Existe un círculo vital entre las actividades humanas: producción energética, extracción de minerales, actividad industrial y agropecuaria; el medio ambiente: suelo, aire, clima, agua, flora, fauna, etcétera, y la salud de las personas. El principio fundamental de una vida saludable vinculada al medio ambiente radica en que todas y todos somos seres humanos que convivimos en el planeta Tierra con otros seres vivientes: animales, plantas y seres inanimados con los que tenemos una responsabilidad ineludible e intransferible, con los que conformamos una comunidad planetaria.",
  "Apropiación de las culturas a través de la lectura y la escritura":
    "La lectura y la escritura son prácticas que contribuyen a hacer de la escuela una comunidad de lectoras y lectores que se acercan a los textos para comprender algo de su mundo cotidiano, para conocer otros modos de vida, para descubrir otras formas de utilizar el lenguaje y darles nuevos sentidos o defender su propio pensamiento a través de la producción de textos. La escolarización de las prácticas sociales de lectura y escritura requiere construir puentes curriculares cuyos contenidos guarden relación entre lo que se enseña y aprende en la escuela con la forma en que se viven fuera de ella, en la comunidad. La propuesta didáctica parte de la experiencia de las maestras y los maestros y vincula a la escuela con la sociedad a través de proyectos de servicio hacia la comunidad.",
  "Artes y experiencias estéticas":
    "Este eje busca valorar la exploración sensible del mundo al reconocer y recuperar el valor formativo de las experiencias artísticas y estéticas que se producen en las y los estudiantes en su relación con las manifestaciones culturales, las producciones del arte y la naturaleza, así como en el reconocimiento de las artes como expresión, cultura, comunicación y cognición, abriendo puentes con otras formas de conocimiento inalienables de la experiencia humana. Las artes como sistema cultural ofrecen a las y los estudiantes la posibilidad de crear relaciones con el mundo que atienden a los aspectos reflexivos y afectivos; encontrar otras formas de comunicación; imaginar y preguntarse sobre lo que puede ser; abrir nuevos mundos de pensamiento y sensibilidad con la finalidad de contribuir al reconocimiento de nuestro “paisaje interior” y a una mejor relación con la comunidad desde lo sensible, lo plural y el ejercicio del pensamiento crítico. Habrá que decir también que las artes hacen parte del derecho de niñas, niños y adolescentes a gozar de las experiencias estéticas para establecer espacios de diálogo en torno a temas y problemas de interés común que son parte de las ciencias, tanto sociales como naturales, así como de las humanidades.",
};
export const EJES_VIDEOS: any = {
  Inclusión: "https://youtube.com/embed/zkx2y6hG_kA",
  "Pensamiento crítico": "https://youtube.com/embed/IbtLzJ72Gfs",
  "Interculturalidad Crítica": "https://youtube.com/embed/dYvsHaDu_ps",
  "Igualdad de género": "https://youtube.com/embed/-qAMeSGfrDA",
  "Vida saludable": "https://youtube.com/embed/sqQySjk2e-I",
  "Apropiación de las culturas a través de la lectura y la escritura": "https://youtube.com/embed/sFR7THv9MEE",
  "Artes y experiencias estéticas": "https://youtube.com/embed/DwOErMC91JM",
};

export const EJES_TRANSVERSALES: any = {
  "Ciencia, Tecnología y Sociedad del Futuro": [
    [
      "Asignatura Educatrónica",
      "Contribuir para que las y los jóvenes estudiantes desarrollen las habilidades en Ciencia, Tecnología, Ingeniería, Arte y Matemáticas (STEAM) que se requieren para afrontar los retos de la sociedad actual, a través de la enseñanza de robótica básica en escuelas públicas de educación secundaria en el estado de Sonora.",
      imagenEducatronica,
    ],
    ["Cuantrix", "Desarrollar las habilidades del pensamiento computacional y programación, en niñas, niños y adolescentes.", imagenCuantrix],
    [
      "Tecnolochicas",
      "Tecnolochicas es inspirar a niñas, jóvenes y a sus familias a considerar estudiar carreras relacionadas con ciencia y tecnología, para atender el tema de brecha digital por razón de género.",
      imagenTecnolochicas,
    ],
    [
      "First Lego League",
      "Programa educativo que desarrolla el interés y competencia de niñas, niños y jóvenes de 4 a 12 años, en temas de Ciencia, Tecnología, Ingeniería, Arte y Matemáticas (STEAM), a través de un aprendizaje práctico, divertido y entusiasmante. ",
      imagenFirstLegoLeague,
    ],
    [
      "Hackatón",
      "Evento estatal para fomentar la creatividad y la innovación en los estudiantes de Educación Superior y vincularlos a las necesidades actuales del proceso educativo, así como fomentar el intercambio de experiencias, el trabajo en equipo y el desarrollo de prototipos.",
      imagenHackaton,
    ],
    [
      "2º Competencia Estatal de Robótica",
      "Busca que las y los jóvenes estudiantes desarrollen las habilidades en Ciencia, Tecnología, Ingeniería, Arte y Matemáticas (STEAM) que se requieren para afrontar los retos de la sociedad actual, a través de la enseñanza de robótica básica en escuelas públicas de educación secundaria en el estado de Sonora.",
      imagenCompetenciaRobotica,
    ],
  ],
  "Perspectiva de Género, Cuerpo y Sexualidades": [
    [
      "#SOYIMPORTANTE",
      "Brindar herramientas socioemocionales a estudiantes de educación básica con la finalidad de prevenir violencias que atraviesan por razón de género (abuso sexual infantil). ",
      imagenSoyImportante,
    ],
    [
      "MI PROYECTO DE VIDA ES…",
      "Promover el respeto, la protección y el ejercicio de los derechos sexuales y derechos reproductivos a partir de una educación integral en la sexualidad con la finalidad de prevenir el embarazo en la adolescencia. ",
      imagenProyectoVida,
    ],
    [
      "Capacitación y formación en DDHH y Perspectiva de Género",
      "Acciones de vinculación en coordinación con organismos estatales: Comisión Estatal de Derechos Humanos, Secretaría de Seguridad Pública, Instituciones de Educación Superior (IPN).",
      imagenConvocatorias,
    ],
    [
      "Capacitación y formación en Derechos Humanos y Perspectiva de Género",
      "Promover la igualdad y la equidad en un marco de DH y con perspectiva de género en el sector educativo para fomentar una cultura de respeto hacia los derechos de NNA así como los derechos de las NAM.",
      imagenAcoso,
    ],
  ],
  "Vida saludable, impulso al deporte y prevención de adicciones": [
    [
      "PROGRAMA INTEGRAL DE PREVENCIÓN Y FORMACIÓN EDUCATIVA",
      "Programa enfocado en fortalecer a la comunidad educativa en materia de prevención de la violencia, atendiendo los factores de riesgo que la generan, impulsando una cultura de la paz. Contribuir a fortalecer la prevención social de la violencia para incidir en las causas y factores que la generan, enfocado a la reconstrucción del tejido social. ",
      prevencion,
    ],
    [
      "Mantente Real",
      "Utilizar las estrategias Rechazar, Explicar, Alejarse o No Ir, Levantarse o Irse (REAL) para enseñar a los estudiantes cómo decir NO a los ofrecimientos de sustancias como alcohol, tabaco y otras drogas de una forma práctica y fácil. ",
      mantenteReal,
    ],
    [
      "Ambientes deportivos",
      "Optimizar las horas de descarga curricular en comunidad escolar a través de los ambientes deportivos. Reubicar las horas de descarga curricular en escuelas donde se requiera a través de la implementación de ambientes deportivos. Dar seguimiento y vinculación institucional. Promoción y difusión de vida saludable a través de la actividad física y deporte. Fomentar la participación de los padres de familia encomunidad escolar. Establecer vínculos permanentes a través de convenios garanticen la relación con escuelas de nivel superior áreas a fines a Educación Física, Ciencias de la ActiviFísica, Deporte y Entrenamiento Deportivo a través de prácticas o servicio social de los estudiantes, fortalecer las acciones de su desarrollo profesional.Gestión de recurso para horas de descarga en ambiendeportivos. ",
      ambientes,
    ],
    [
      "Nutrición en la comunidad escolar",
      "Fortalecer hábitos nutricionales en la comunidad escolar del Estado de Sonora. Fomentar la vida saludable mediante talleresconcientización nutricional en la comunidad escolar.Contribuir en la prevención y atención de casosdesnutrición y obesidad, con la finalidad de mejorar parámetros de composición corporal de los estudiantes. Convenios con universidades que ofrezcan prestadoresservicio social o prácticas profesionales de Licenciaten nutrición. ",
      capsulas,
    ],
    [
      "Cápsulas deportivas",
      "Difundir la cultura física y deporte de la comunidad escolar al contexto social a través de espacios televisivos.Fortalecer la imagen del profesor de educación Física. Dar seguimiento al Plan Anual de Trabajo (PAT) del Profede Educación Física del Estado de Sonora. Valorización del Magisterio.",
      nutricion,
    ],
  ],
  "Medio ambiente, sustentabilidad y territorio": [
    [
      "CORRRESPONSABILIDAD SOCIAL EN EL ESTADO",
      "Programa enfocado en promover Programas y Acciones en materia de Conciencia Ambiental a través de la Corresponsabilidad Social, con el sector público, privado, universitario y de la sociedad civil para el cuidado del medio ambiente. Impulsar una formación ciudadana de conciencia ambiental.  ",
      corresponsabilidad,
    ],
    [
      "Oasis escolares",
      "Identificar diversas experiencias de los y las estudiantes acerca de los significados que le dan al ecosistema en el que viven, con el fin de desarrollar propuestas para la mejora del medio ambiente escolar, familiar y regional. ",
      oasisEscolar,
    ],
  ],
  Interculturalidad: [["Intercambio Académico", "Transformando la Educación Indígena. Planes y programas 2022", interculturalidad]],
  "Ciudadanía para una participación democrática": [
    [
      "CONSEJOS DE PARTICIPACIÓN ESCOLAR Y COMITÉS PARTICIPATIVOS DE SALUD ESCOLAR",
      "Programa enfocado en promover la participación social y ciudadana en los centros educativos del estado de Sonora. Promover la conformación y seguimiento a las acciones de los Consejos de Participación Escolar y Comités Participativos de Salud Escolar; impulsando el sentido de pertenencia y la participación social y ciudadana. ",
      consejos,
    ],
    [
      "Trucha con mi escuela",
      "Promover y coordinar acciones con la Secretaría de Seguridad para vigilar, cuidar y proteger los inmuebles escolares en los períodos de descanso escolar. ",
      trucha,
    ],
    [
      "Escuelas para la transformación",
      "Fortalecer la capacidad de las escuelas secundarias de Sonora para realizar diagnósticos con relación a la convivencia, la prevención de las violencias y del abandono escolar y la ciudadanía digital. ",
      escuelas,
    ],
  ],
  "Expresión artística, creatividad y habilidades socioemocionales": [
    [
      "Mantente Real",
      "Utilizar las estrategias Rechazar, Explicar, Alejarse o No Ir, Levantarse o Irse (REAL) para enseñar a los estudiantes cómo decir NO a los ofrecimientos de sustancias como alcohol, tabaco y otras drogas de una forma práctica y fácil. ",
      mantenteReal,
    ],
  ],
};
export const EJES_TRANSVERSALES_ARR: any = [];
