import { StyleSheet } from "react-native";

const globalsStyles = StyleSheet.create({
  container: {
    width: "92%",
    marginHorizontal: "auto",
    alignSelf: "center",
  },
  containerHome: {
    width: "89%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: "4%",
    alignItems: "center",
    overflow: "hidden",
  },
  rounded: {
    borderRadius: 13,
    overflow: "hidden",
  },
});

export default globalsStyles;
