import { Image, StyleSheet, Text, View } from "react-native";
import ExpText from "../../Utils/ExpText";

export default function FriendCard({ id, image, name }) {
  return (
    <View key={id} style={style.container}>
      <Image
        style={style.image}
        source={{
          uri: image,
        }}
      />
      <View style={style.contText}>
        <ExpText style={style.text} hidden>
          {name}
        </ExpText>
      </View>
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
    backgroundColor: "#d3d3d380",
    margin: 0,
    shadowColor: "#d3d3d380",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 3,
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
