import { Pressable, StyleSheet } from "react-native";
import ExpView from "../../Utils/ExpView";
import Swipe from "../../Utils/Swipe";
import Icons from "../../Utils/Icons";

export default function Selector() {
  return (
    <ExpView container style={styles.cont}>
      <Swipe
        left
        style={styles.swipe}
        icon={<Icons icon="cierre" size={34} style={{color : "red"}}/>}
      />
      <ExpView style={styles.contLike}>
        <Swipe
          style={styles.swipe}
          icon={<Icons icon="check" size={34} style={{color : "red"}}/>}
        />
        <Pressable style={styles.btmSuperLike}>
          <Icons icon="estrella" size={34} style={{color : "red"}}/>
        </Pressable>
      </ExpView>
    </ExpView>
  );
}

const styles = StyleSheet.create({
  cont: {
    paddingVertical: 10,
  },
  swipe: {
    width: "60%",
  },
  contLike: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btmSuperLike: {
    width: "38%",
    // height: 45,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
