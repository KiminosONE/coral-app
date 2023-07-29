import { StyleSheet, View } from "react-native";
import globalsStyles from "../../styles/globals";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    zIndex: -1,
  },
});

export default function ExpView({
  linearGradient,
  container,
  rounded,
  contHome,
  header,
  style,
  children,
  ...props
}) {
  const stylesView = [
    styles.cont,
    container && globalsStyles.container,
    rounded && globalsStyles.rounded,
    contHome && globalsStyles.containerHome,
    header && globalsStyles.header,
    style,
  ];

  const bgLinearGradient = linearGradient && (
    <LinearGradient colors={linearGradient} style={styles.background} />
  );

  return (
    <View style={stylesView} {...props}>
      {children}
      {bgLinearGradient}
    </View>
  );
}
