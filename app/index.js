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
import ContValues from "../components/Utils/Values/ContValues";
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
            "me gusta viajar a lugarres nuevos y comer comida exotica. conocer parqquers lindos y cafeterias"
          }
        />
        <ContValues noBorder/>
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
    backgroundColor: "#ecf0f1",
  },
});
