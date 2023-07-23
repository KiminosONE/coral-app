import { FlatList, View } from "react-native";
import globalsStyles from "../../styles/globals";
import { Ionicons } from "@expo/vector-icons";
import ExpText from "../Utils/ExpText";
import ChatCard from "./Cards/ChatCard";

export default function ChatList() {
  return (
    <View style={globalsStyles.container}>
      <View style={globalsStyles.header}>
        <ExpText h2>Chats</ExpText>
        <Ionicons name="filter" size={24} color="black" />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ChatCard
            id={item.id}
            image={item.image}
            name={item.name}
            message={item.message}
          />
        )}
      />
    </View>
  );
}

const data = [
  {
    id: 1,
    name: "Juan Pablo",
    message: "Hola mundo, hola mindo, ",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 2,
    name: "Felipe",
    message: "Hola mundo, hola mindo",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 3,
    name: "Juan Camilo",
    message: "Hola mundo, hola mindo",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 4,
    name: "Juan Pablo jose gomez gutierrez hernandez perez",
    message: "Hola mundo, hola mindo",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 5,
    name: "Juan Pablo jose gomez gutierrez hernandez perez",
    message: "Hola mundo, hola mindo",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 6,
    name: "Juan Pablo jose gomez gutierrez hernandez perez",
    message: "Hola mundo, hola mindo",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 7,
    name: "Juan Pablo jose gomez gutierrez hernandez perez",
    message: "Hola mundo, hola mindo",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
  {
    id: 8,
    name: "Juan Pablo 8 jose gomez gutierrez hernandez perez",
    message: "Hola mundo, hola mindo",
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
  },
];
