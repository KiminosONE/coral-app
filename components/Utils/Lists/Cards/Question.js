import { Pressable, StyleSheet } from "react-native";
import ExpText from "../../ExpText";
import ExpView from "../../ExpView";
import Icons from "../../Icons";
import theme from "../../../../styles/theme";

export default function Question({ key, question, text, tuLike, accion }) {
  return (
    <Pressable key={key} style={styles.cont} onPress={() => accion()}>
      <ExpView style={styles.contInfo}>
        <ExpText bold strong>
          {question}
        </ExpText>
        {text && <ExpText>{text}</ExpText>}
      </ExpView>
      <Icons icon={text ? "arrowRight" : "plus"} size={17} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    borderRadius: 13,
    borderColor: theme.colors.tertiary,
  },
  contInfo: {
    width: "90%",
  },
});
