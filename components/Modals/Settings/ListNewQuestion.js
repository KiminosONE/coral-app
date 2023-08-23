import { StyleSheet } from "react-native";
import ExpText from "../../Utils/ExpText";
import NewQuestionsList from "../../Utils/Lists/NewQuestionsList";
import Icons from "../../Utils/Icons";
import ExpView from "../../Utils/ExpView";
import theme from "../../../styles/theme";

export default function ListNewQuestion({ blocked, setChildrenMainModal }) {
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

  const data2 = Object.keys(listaDePreguntas);
  const data3 = [];

  data2.forEach((id) => {
    if (blocked.length == 0) {
      data3.push({
        id: id,
        pregunta: listaDePreguntas[id],
      });
    } else if (id != blocked[0].id && id != blocked[blocked.length - 1].id) {
      data3.push({
        id: id,
        pregunta: listaDePreguntas[id],
      });
    }
  });

  return (
    <>
      <ExpView style={styles.iconQuestion}>
        <Icons icon="question" size={40} style={styles.icon} />
      </ExpView>
      <ExpText h2 style={styles.title}>
        Solo una pregunta mas...
      </ExpText>
      <ExpText style={styles.description}>
        Con las preguntas puedes conocer mas a las personas y mejorar los temas
        de conversacion.
      </ExpText>
      <NewQuestionsList
        data={data3}
        setChildrenMainModal={setChildrenMainModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  iconQuestion: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  icon: {
    color: "white",
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    marginBottom: 40,
    textAlign: "center",
    width: "96%",
    alignSelf: "center",
  },
  contValues: {
    paddingVertical: 28,
    borderWidth: 1,
    borderRadius: 13,
    alignItems: "center",
  },
});
