const interesesGet = {
  tv_y_cine: {
    1: "Drama",
    2: "Acción",
    3: "Comedia",
    4: "Terror",
    5: "Ciencia ficción",
    6: "Anime",
    7: "Fantasía",
    8: "Suspenso",
    9: "Romance",
    10: "Documental",
    11: "Aventura",
  },
  musica: {
    1: "Pop",
    2: "Rock",
    3: "R&B",
    4: "Alternativo",
    5: "Hip Hop",
    6: "Indie",
    7: "Folk",
    8: "Country",
    9: "К-рор",
    10: "Latino",
    11: "EDM",
    12: "Clásica",
    13: "Jazz",
  },
  deportes: {
    1: "Correr",
    2: "Fútbol americano",
    3: "Fútbol",
    4: "Gym",
    5: "Críquet",
    6: "Baloncesto",
    7: "Tenis",
    8: "Hockey",
    9: "Béisbol",
    10: "Golf",
    11: "Ciclismo",
    12: "Natación",
    13: "Yoga",
    14: "Surf",
    15: "Senderismo",
    16: "Deportes de combate",
    17: "Skateboarding",
    18: "Deportes acuáticos",
    19: "Deportes de invierno",
  },
  actividades: {
    1: "Fotografía",
    2: "Hacer videos",
    3: "Viajar",
    4: "Instrumentos",
    5: "Cantar",
    6: "Bailar",
    7: "Diseño",
    8: "Arte",
    9: "Cocinar",
    10: "Leer",
    11: "Escribir",
    12: "Idiomas",
    13: "Videojuegos",
    14: "Invertir",
    15: "Voluntariado",
    16: "Perros",
    17: "Gatos",
    18: "Moda",
  },
  comida: {
    1: "Pizza",
    2: "Hamburguesa",
    3: "Café",
    4: "Té",
    5: "Chocolate",
    6: "Helado",
    7: "Cerveza",
    8: "Vino",
    9: "Vegano",
    10: "Pasta",
    11: "Sushi",
    12: "Repostería",
    13: "Taco",
    14: "Frutas",
    15: "Mariscos",
  },

  icons: {
    tv_y_cine: "popcorn",
    musica: "musica",
    deportes: "sports",
    actividades: "airplane",
    comida: "pizza",
  },
};

export const interesesSet = ({ intereses }) => {
  let intereses2 = [];
  let icono = "";

  for (const categoria in intereses) {
    icono = interesesGet["icons"][categoria];
    for (const valor of intereses[categoria]) {
      intereses2.push({ tipo: icono, name: interesesGet[categoria][valor] });
    }
  }

  return intereses2;
};

const listaDePreguntas = {
  1: "Si pudieras tener un superpoder, ¿cuál elegirías y por qué?",
  2: "¿Qué canción siempre te hace sentir bien cuando la escuchas?",
  3: "Si fueras un personaje de cuento de hadas, ¿cuál sería y qué harías en tu historia?",
  4: "Si tuvieras la oportunidad de viajar en el tiempo, ¿a qué época te gustaría ir y qué harías allí?",
  5: "Si fueras un animal, ¿cuál serías y cómo pasarías tus días?",
  6: "Si pudieras inventar cualquier cosa, ¿qué invento crearías y para qué serviría?",
  7: "¿Cuál es tu recuerdo más preciado de la infancia?",
  8: "¿Siempre has tenido un sueño que quisieras cumplir? ¿Cuál es?",
  9: "Si tuvieras la posibilidad de vivir en cualquier lugar del mundo, ¿dónde te gustaría establecerte y por qué?",
  10: "¿Qué es lo más emocionante que has hecho en tu vida hasta ahora?",
  11: "¿Cuál es tu película o serie preferida?",
  12: "¿Cuál es tu comida favorita?",
};

export const respuestasSet = ({ respuestas }) => {
  let respuestas2 = [];
  Object.keys(respuestas).map((id) => {
    respuestas2.push({
      id: id,
      pregunta: listaDePreguntas[id],
      respuesta: respuestas[id],
    });
  });

  return respuestas2;
};
