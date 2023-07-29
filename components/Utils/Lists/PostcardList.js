import { FlatList, View } from "react-native";
import Postcard from "./Cards/Postcard";

export default function PostcardList({ data }) {
  return (
    <FlatList
      horizontal
      data={data}
      ItemSeparatorComponent={() => <View style={{ width: 13 }} />}
      renderItem={({ item }) => (
        <Postcard id={item.id} image={item.image} name={item.name} />
      )}
    />
  );
}
