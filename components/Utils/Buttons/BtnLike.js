import { StyleSheet } from "react-native";
import ExpView from "../ExpView";
import Icons from "../Icons";
import theme from "../../../styles/theme";

export default function BtnLike({ onPress, style }) {
  const stylesBtn = [styles.contIcon, style];

  return (
    <ExpView style={stylesBtn}>
      <Icons icon="corazon" size={20} style={{ color: "white" }} />
    </ExpView>
  );
}

const styles = StyleSheet.create({
  contIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
