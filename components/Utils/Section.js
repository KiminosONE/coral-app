import { Pressable, StyleSheet } from "react-native";
import ExpText from "./ExpText";
import ExpView from "./ExpView";

export default function Section({
  title,
  eventIcon,
  evento = () => {},
  style,
  titleSize = "h3",
  noBorder,
  children,
}) {
  const stylesArticle = [styles.cont, noBorder && styles.noBorder, style];

  const titleSizeList = {
    p: true,
    h1: { h1: true },
    h2: { h2: true },
    h3: { h3: true },
  };

  return (
    <ExpView container style={stylesArticle}>
      <ExpView style={styles.header}>
        <ExpText {...titleSizeList[titleSize]}>{title}</ExpText>
        <Pressable onPress={() => evento()}>{eventIcon}</Pressable>
      </ExpView>
      <ExpView style={styles.contGeneral}>{children}</ExpView>
    </ExpView>
  );
}

const styles = StyleSheet.create({
  cont: {
    paddingTop: 18,
    paddingBottom: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: "#ccc",
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contGeneral: {
    marginTop: 10,
  },
});
