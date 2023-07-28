import { Image, StyleSheet, Text, View } from "react-native";
import ExpText from "../../Utils/ExpText";
import ExpView from "../../Utils/ExpView";

export default function FriendCard({ id, image, name }) {
  return (
    <View key={id} style={style.container}>
      <Image
        style={style.image}
        source={{
          uri: image,
        }}
      />
      <ExpView
        style={style.contText}
        linearGradient={["transparent", "#d3d3d380"]}
      >
        <ExpText style={style.text} hidden>
          {name}
        </ExpText>
      </ExpView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "flex-end",
    width: 110,
    height: 140,
    overflow: "hidden",
    borderRadius: 13,
  },
  contText: {
    position: "absolute",
    paddingVertical: "5%",
    paddingHorizontal: "10%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});
