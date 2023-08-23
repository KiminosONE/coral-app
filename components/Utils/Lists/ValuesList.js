import { StyleSheet } from "react-native";
import ExpView from "../ExpView";
import Icons from "../Icons";
import ValueLabel from "./Cards/ValueLabel";

export default function ValuesList({ data }) {

  return (
    <ExpView style={styles.contValues}>
      {data.map((item) => (
        <ValueLabel icon={<Icons icon={item.tipo} />} text={item.name} />
      ))}
    </ExpView>
  );
}

const styles = StyleSheet.create({
  contValues: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
