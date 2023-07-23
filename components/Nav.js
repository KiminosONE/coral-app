import { View } from "react-native";
import globalsStyles from "../styles/globals";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function Nav() {
  return (
    <View style={[globalsStyles.container, { marginTop: "auto" }]}>
      <View style={globalsStyles.header}>
        <Link href="/chats">
          <Ionicons name="chatbubble" size={24} color="black" />
        </Link>
        <Link href="/chats">
          <AntDesign name="heart" size={24} color="black" />
        </Link>
        <Link href="/">
          <MaterialCommunityIcons
            name="zodiac-gemini"
            size={24}
            color="black"
          />
        </Link>
        <Link href="/chats">
          <Ionicons name="planet" size={24} color="black" />
        </Link>
        <Link href="/chats">
          <FontAwesome5 name="user-alt" size={24} color="black" />
        </Link>
      </View>
    </View>
  );
}
