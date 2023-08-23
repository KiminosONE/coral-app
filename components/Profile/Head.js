import { Image, StyleSheet } from "react-native";
import ExpText from "../Utils/ExpText";
import ExpView from "../Utils/ExpView";

export default function Head({ data }) {
  return (
    <ExpView container style={styles.cont}>
      <ExpView style={styles.contImage}>
        <Image
          style={styles.image}
          source={{
            uri: "https://picsum.photos/400/500",
          }}
        />
      </ExpView>
      <ExpView style={styles.contInfo}>
        <ExpText h1 hidden>
          {data.nombre}
        </ExpText>
        <ExpView>
          <ExpText>{data.ubicacion}</ExpText>
        </ExpView>
      </ExpView>
    </ExpView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  contImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contInfo: {
    marginLeft: 20,
  },
});
