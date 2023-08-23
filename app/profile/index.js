import { Pressable, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Head from "../../components/Profile/Head";
import ExpScrollView from "../../components/Utils/ExpScrollView";
import DataConfig from "../../components/Profile/DataConfig";
import ExpText from "../../components/Utils/ExpText";
import PostcardList from "../../components/Utils/Lists/PostcardList";
import ValuesList from "../../components/Utils/Lists/ValuesList";
import Biography from "../../components/Modals/Settings/Biography";
import dataUsers from "../../public/dataUsers";
import {
  interesesSet,
  respuestasSet,
} from "../../components/Utils/DataSet/DataSet";
import QuestionsList from "../../components/Utils/Lists/QuestionsList";
import Section from "../../components/Utils/Section";
import MainModal from "../../components/Modals/MainModal";
import { useState } from "react";
import { ModalProvider } from "../../components/Utils/ModalProvider";

export default function Page() {
  const {
    mainModalVisibility,
    setMainModalVisibility,
    childrenMainModal,
    setChildrenMainModal,
    eventMainModal,
    setEventMainModal,
  } = ModalProvider();

  const data = dataUsers[0];
  const intereses = interesesSet({ intereses: data.intereses });
  const respuestas = respuestasSet({ respuestas: data.respuestas });

  return (
    <>
      <Header></Header>
      <ExpScrollView>
        <Head data={data} />
        <DataConfig title={"Mis Fotos"}>
          <PostcardList data={dat2} />
        </DataConfig>

        <DataConfig
          title={"Biografia"}
          compModal={<Biography title={"Biografia"} data={data.biografia} />}
          setMainModalVisibility={setMainModalVisibility}
          setChildrenMainModal={setChildrenMainModal}
        >
          <ExpText>
            {data.biografia != "" && data.biografia
              ? data.biografia
              : "Cuentanos una historia interesante sobre ti"}
          </ExpText>
        </DataConfig>

        <DataConfig
          title="Intereses"
          setMainModalVisibility={setMainModalVisibility}
          setChildrenMainModal={setChildrenMainModal}
        >
          {intereses.length > 0 ? (
            <ValuesList data={intereses} />
          ) : (
            <ExpText>Dale un poco de personalidad a tu perfil</ExpText>
          )}
        </DataConfig>

        <Section title={"Preguntas personales"}>
          <QuestionsList
            data={respuestas}
            setChildrenMainModal={setChildrenMainModal}
            setMainModalVisibility={setMainModalVisibility}
          />
        </Section>
      </ExpScrollView>

      <MainModal
        modalVisible={mainModalVisibility}
        setModalVisible={setMainModalVisibility}
        children={childrenMainModal}
        event={eventMainModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  contValues: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const dat2 = [
  {
    id: 1,
    // name: "Juan Pablo",
    image: "https://picsum.photos/400/500",
  },
  {
    id: 2,
    // name: "Felipe",
    image: "https://picsum.photos/400/500",
  },
  {
    id: 3,
    // name: "Juan Camilo",
    image: "https://picsum.photos/400/500",
  },
  {
    id: 4,
    // name: "Juan Pablo jose gomez",
    image: "https://picsum.photos/400/500",
  },
];
