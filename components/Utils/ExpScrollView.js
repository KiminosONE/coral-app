import { ScrollView, StyleSheet, View } from "react-native";
import globalsStyles from "../../styles/globals";
import ExpView from "./ExpView";

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  contScroll: {
    height: 100,
  },
  scroll: {
    flexGrow: 1,
  },
});

export default function ExpScrollView({
  container,
  rounded,
  style,
  children,
  ...props
}) {
  const stylesScroll = [
    styles.cont,
    container && globalsStyles.container,
    style,
  ];

  const propRounded = rounded && {rounded: true}

  return (
    <ExpView {...propRounded} style={stylesScroll}>
      <ScrollView
        style={styles.contScroll}
        contentContainerStyle={styles.scroll}
        {...props}
      >
        {children}
      </ScrollView>
    </ExpView>
  );
}
