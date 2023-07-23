import { Image, View } from "react-native";
import ExpText from "../../Utils/ExpText";
import { StyleSheet } from "react-native";

export default function ChatCard({ id, image, name, message }) {
  return (
    <View key={id} style={style.cardChat}>
      <Image
        style={style.image}
        source={{
          uri: image,
        }}
      />
      <View style={[style.cardChatInfo, { width: "78%" }]}>
        <ExpText h3 hidden style={{ marginBottom: 3 }}>
          {name}
        </ExpText>
        <ExpText hidden>{message}</ExpText>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  cardChat: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "3%",
  },
  cardChatInfo: {
    marginLeft: "4%",
  },
});
