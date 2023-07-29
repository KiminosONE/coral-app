import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import Section from "../../Utils/Section";

export default function Biography({ data = "" }) {
  const [value, onChangeText] = useState(data);
  return (
    <TextInput
    //   editable
      multiline
      numberOfLines={7}
      //   maxLength={40}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      placeholder="Agrega tu biografia"
      style={styles.contValues}
    />
  );
}

const styles = StyleSheet.create({
    contValues: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 13,
        textAlignVertical: "top",
        paddingHorizontal: "5%",
        paddingVertical: 10,
    },

});