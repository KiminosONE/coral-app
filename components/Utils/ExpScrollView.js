import { ScrollView, StyleSheet, View } from "react-native";

export default function ExpScrollView({ children }) {
  return (
    <View style={styles.cont}>
      <ScrollView style={styles.scroll}>{children}</ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  scroll: {
    height: 100,
  },
});
