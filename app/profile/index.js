import { FlatList, StyleSheet, View } from "react-native";
import Search from "../../components/Chats/Search";
import Header from "../../components/Header";
import Head from "../../components/Profile/Head";
import Section from "../../components/Utils/Section";
import FriendCard from "../../components/Chats/Cards/FriendCard";
import ExpText from "../../components/Utils/ExpText";
import ExpScrollView from "../../components/Utils/ExpScrollView";
import ValueLabel from "../../components/Utils/Values/ValueLabel";
import { MaterialIcons } from "@expo/vector-icons";
import ExpView from "../../components/Utils/ExpView";
import ContValues from "../../components/Utils/Values/ContValues";

export default function Page() {
  return (
    <>
      <Header></Header>
      <ExpScrollView>
        <Head />
        <Section title={"Mis Fotos"}>
          <FlatList
            horizontal
            data={data}
            ItemSeparatorComponent={() => <View style={{ width: 13 }} />}
            renderItem={({ item }) => (
              <FriendCard id={item.id} image={item.image} name={item.name} />
            )}
          />
        </Section>
        <Section title={"Tipo de personalidad"}>
          <ExpText>Agrega tu tipo de personalidad</ExpText>
        </Section>
        <Section title={"Biografia"}>
          <ExpText>Agrega tu biografia</ExpText>
        </Section>
        <ContValues title="h3" />
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

const data = [
  {
    id: 1,
    name: "Juan Pablo",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 2,
    name: "Felipe",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 3,
    name: "Juan Camilo",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 4,
    name: "Juan Pablo jose gomez",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
];
