import { ScrollView, StyleSheet, View } from "react-native";
import globalsStyles from "../../styles/globals";

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
  rounded: {
    borderRadius: 10,
    overflow: "hidden",
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
    rounded && styles.rounded,
    container && globalsStyles.container,
    style,
  ];
  return (
    <View style={stylesScroll}>
      <ScrollView
        style={styles.contScroll}
        contentContainerStyle={styles.scroll}
        {...props}
      >
        {children}
      </ScrollView>
    </View>
  );
}
