import { Pressable, StyleSheet } from "react-native";
import ExpView from "../../Utils/ExpView";
import Swipe from "../../Utils/Swipe";
import Icons from "../../Utils/Icons";
import theme from "../../../styles/theme";

export default function Selector() {
  return (
    <ExpView container style={styles.cont}>
      <Swipe
        left
        style={styles.swipe}
        icon={<Icons icon="cierre" size={30} style={styles.iconSelector}/>}
      />
      <ExpView style={styles.contLike}>
        <Swipe
          style={styles.swipe}
          icon={<Icons icon="check" size={30} style={styles.iconSelector}/>}
        />
        <Pressable style={styles.btmSuperLike}>
          <Icons icon="estrella" size={30} style={styles.iconSelector}/>
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
  iconSelector: {
    color: "white",
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
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
