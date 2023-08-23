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
import dataUsers from "../public/dataUsers";
import {
  interesesSet,
  respuestasSet,
} from "../components/Utils/DataSet/DataSet";
export default function Page() {
  const [containerHeight, setContainerHeight] = useState(0);

  const onContainerLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  const data = dataUsers[0];
  let intereses2 = [];
  let respuestas2 = [];

  intereses2 = interesesSet({ intereses: data.intereses });
  respuestas2 = respuestasSet({ respuestas: data.respuestas });

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
        <Banner data={data} height={containerHeight} />
        <Question
          question={"Un poco sobre mi..."}
          text={data.biografia}
          tuLike
        />
        <Section title="Intereses" titleSize="p" noBorder>
          <ValuesList data={intereses2} />
        </Section>
        <ImgHome />
        {respuestas2[0] && (
          <Question
            question={respuestas2[0].pregunta}
            text={respuestas2[0].respuesta}
            noBorder
          />
        )}
        <ImgHome />
        {respuestas2[1] && (
          <Question
            question={respuestas2[1].pregunta}
            text={respuestas2[1].respuesta}
            noBorder
          />
        )}
        <ImgHome />
        {respuestas2[2] && (
          <Question
            question={respuestas2[2].pregunta}
            text={respuestas2[2].respuesta}
            noBorder
          />
        )}
        <ImgHome />

        <Question
          question={"Ubicacion de " + data.nombre}
          text={data.ubicacion}
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
