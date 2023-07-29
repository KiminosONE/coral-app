import Section from "../Utils/Section";
import PostcardList from "../Utils/Lists/PostcardList";

export default function FriendsList() {
  return (
    <Section title={"Conexiones"} titleSize="h2">
      <PostcardList data={data} />
    </Section>
  );
}

const data = [
  {
    id: 1,
    name: "Juan Pablo",
    image: "https://picsum.photos/400/500",
  },
  {
    id: 2,
    name: "Felipe",
    image: "https://picsum.photos/400/500",
  },
  {
    id: 3,
    name: "Juan Camilo",
    image: "https://picsum.photos/400/500",
  },
  {
    id: 4,
    name: "Juan Pablo jose gomez",
    image: "https://picsum.photos/400/500",
  },
];
