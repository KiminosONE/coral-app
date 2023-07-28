import { Image, StyleSheet } from "react-native";
import ExpView from "../Utils/ExpView";

export default function ImgHome() {
  return (
    <ExpView style={styles.cont}>
      <Image
        style={styles.image}
        source={{
          uri: "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
        }}
      />
    </ExpView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    // paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: 450,
    // aspectRatio: 9 / 16,
  },
});
