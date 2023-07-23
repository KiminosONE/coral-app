import { FlatList, View } from "react-native";
import ExpText from "../Utils/ExpText";
import globalsStyles from "../../styles/globals";
import FriendCard from "./Cards/FriendCard";

export default function FriendsList() {
  return (
    <View style={globalsStyles.container}>
      <View style={globalsStyles.header}>
        <ExpText h2>Conexiones</ExpText>
      </View>
      <FlatList
        horizontal
        data={data}
        ItemSeparatorComponent={() => <View style={{ width: 13 }} />}
        renderItem={({ item }) => (
          <FriendCard id={item.id} image={item.image} name={item.name} />
        )}
      />
    </View>
  );
}

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
