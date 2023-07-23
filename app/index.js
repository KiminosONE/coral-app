import "expo-router/entry";
import { View, Text } from "react-native";
import Header from "../components/Header";
import Filter from "../components/Home/Filter";

export default function Page() {
  return (
    <>
      <Header>
        <Filter />
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
}
