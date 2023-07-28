import { FlatList } from "react-native";
import ChatCard from "./Cards/ChatCard";
import Section from "../Utils/Section";
import Icons from "../Utils/Icons";

export default function ChatList() {
  return (
    <Section
      title={"Grupos"}
      titleSize="h2"
      eventIcon={<Icons icon="filter" />}
      noBorder
    >
      {data.map((item) => (
        <ChatCard
          key={item.id}
          image={item.image}
          name={item.name}
          message={item.message}
        />
      ))}
    </Section>
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
