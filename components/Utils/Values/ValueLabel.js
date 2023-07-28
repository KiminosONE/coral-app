import { StyleSheet } from "react-native";
import ExpView from "../ExpView";
import ExpText from "../ExpText";
import React from "react";

export default function ValueLabel({ icon, text }) {
  return (
    <ExpView style={stylesValueLabel.cont}>
      {React.cloneElement(icon, { style: stylesValueLabel.icon, size: 19})}
      <ExpText style={stylesValueLabel.text}>{text}</ExpText>
    </ExpView>
  );
}

const stylesValueLabel = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0000008f",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 6,
    marginBottom: 7,
  },
  icon: {
    color: "white",
  },
  text: {
    marginLeft: 5,
    color: "white",
  },
});
