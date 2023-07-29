import { Image, StyleSheet } from "react-native";
import ExpText from "../../ExpText";
import ExpView from "../../ExpView";

export default function Postcard({ id, image, name }) {
  return (
    <ExpView rounded key={id} style={style.cont}>
      <Image
        style={style.image}
        source={{
          uri: image,
        }}
      />
      {name!="" && (
        <ExpView
          style={style.contText}
          linearGradient={["transparent", "#000000bf"]}
        >
          <ExpText style={style.text} hidden>
            {name}
          </ExpText>
        </ExpView>
      )}
    </ExpView>
  );
}

const style = StyleSheet.create({
  cont: {
    position: "relative",
    justifyContent: "flex-end",
    width: 110,
    height: 140,
  },
  contText: {
    position: "absolute",
    paddingVertical: "6%",
    paddingHorizontal: "10%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
  },
});
