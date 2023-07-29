import { StyleSheet } from "react-native";
import Header from "../../components/Header";
import Head from "../../components/Profile/Head";
import ExpScrollView from "../../components/Utils/ExpScrollView";
import DataConfig from "../../components/Profile/DataConfig";
import ExpText from "../../components/Utils/ExpText";
import PostcardList from "../../components/Utils/Lists/PostcardList";
import ValuesList from "../../components/Utils/Lists/ValuesList";
import Biography from "../../components/Modals/Settings/Biography";

export default function Page() {
  return (
    <>
      <Header></Header>
      <ExpScrollView>
        <Head />
        <DataConfig title={"Mis Fotos"}>
          <PostcardList data={data} />
        </DataConfig>
        <DataConfig title={"Biografia"} compModal={<Biography />}>
          <ExpText>Agrega tu biografia</ExpText>
        </DataConfig>
        <DataConfig title="Intereses">
          <ValuesList data={dataItems} />
        </DataConfig>
      </ExpScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contValues: {
    flexDirection: "row",
    flexWrap: "wrap",
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

const data = [
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
