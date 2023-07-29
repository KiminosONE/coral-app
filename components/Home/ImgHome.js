import { Image, StyleSheet } from "react-native";
import ExpView from "../Utils/ExpView";
import Icons from "../Utils/Icons";
import theme from "../../styles/theme";
import BtnLike from "../Utils/Buttons/BtnLike";

export default function ImgHome() {
  return (
    <ExpView style={styles.cont}>
      <Image
        style={styles.image}
        source={{
          uri: "https://picsum.photos/400/500",
        }}
      />

      <ExpView container style={styles.contLike}>
        <BtnLike />
      </ExpView>
    </ExpView>
  );
}

const styles = StyleSheet.create({
  cont: {
    position: "relative",
    // paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: 450,
    // aspectRatio: 9 / 16,
  },
  contLike: {
    position: "absolute",
    bottom: 0,
    paddingVertical: "5%",
  }
});
