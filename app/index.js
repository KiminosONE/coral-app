import "expo-router/entry";
import Header from "../components/Header";
import Filter from "../components/Home/Filter";
import ExpScrollView from "../components/Utils/ExpScrollView";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Selector from "../components/Home/Utils/Selector";
import Banner from "../components/Home/Banner";
import ImgHome from "../components/Home/ImgHome";
import Question from "../components/Home/Question";
import theme from "../styles/theme";
import Section from "../components/Utils/Section";
import ValuesList from "../components/Utils/Lists/ValuesList";
export default function Page() {
  const [containerHeight, setContainerHeight] = useState(0);

  const onContainerLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  return (
    <>
      <Header>
        <Filter />
      </Header>
      <ExpScrollView
        style={styles.fondo}
        rounded
        container
        onLayout={onContainerLayout}
      >
        <Banner height={containerHeight} />
        <Question
          question={"¿Qué es lo que más te gusta hacer?"}
          text={
            "Me gusta viajar a lugarres nuevos y comer comida exotica. conocer parqquers lindos y cafeterias"
          }
          tuLike
        />
        <Section title="Intereses" titleSize="p" noBorder>
          <ValuesList data={dataItems} />
        </Section>
        <ImgHome />
        <Question
          question={"Ubicacion de Camil@"}
          text={"Medellin, Colombia"}
          noBorder
        />
        <Selector />
      </ExpScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
});

const dataItems = [
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
