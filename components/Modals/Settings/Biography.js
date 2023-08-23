import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import ExpText from "../../Utils/ExpText";

export default function Biography({ title = "titulo", data = "" }) {
  const [value, onChangeText] = useState(data);
  return (
    <>
      <ExpText h3 style={styles.title}>
        {title}
      </ExpText>
      <TextInput
        //   editable
        multiline
        numberOfLines={7}
        //   maxLength={40}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Cuentanos algo interesante sobre ti"
        style={styles.contValues}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 18,
    textAlign: "center",
  },
  contValues: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 13,
    textAlignVertical: "top",
    paddingHorizontal: "5%",
    paddingVertical: 10,
  },
});
