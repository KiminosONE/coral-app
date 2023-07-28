import { StyleSheet } from "react-native";
import ExpView from "../ExpView";
import Icons from "../Icons";
import Section from "../Section";
import ValueLabel from "./ValueLabel";

export default function ContValues({ title = "p", noBorder }) {
  const prop = noBorder && { noBorder: true };
  return (
    <Section titleSize={title} title={"Intereses"} {...prop}>
      <ExpView style={styles.contValues}>
        {data.map((item) => (
          <ValueLabel icon={<Icons icon={item.tipo} />} text={item.name} />
        ))}
      </ExpView>
    </Section>
  );
}

const styles = StyleSheet.create({
  contValues: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const data = [
  {
    id: 1,
    tipo: "trabajo",
    name: "Futbol",
  },
  {
    id: 2,
    tipo: "corazon",
    name: "Playa",
  },
  {
    id: 3,
    tipo: "ubicacion",
    name: "Country",
  },
  {
    id: 4,
    tipo: "perfil",
    name: "De familia",
  },
  {
    id: 5,
    tipo: "geminis",
    name: "Viajes por carretera",
  },
  {
    id: 6,
    tipo: "trabajo",
    name: "Futbol",
  },
];
