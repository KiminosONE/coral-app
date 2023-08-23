import { Pressable, StyleSheet } from "react-native";
import ExpView from "../ExpView";
import ExpText from "../ExpText";
import theme from "../../../styles/theme";
import Biography from "../../Modals/Settings/Biography";

export default function NewQuestionsList({ data, setChildrenMainModal }) {
  return (
    <ExpView>
      {data.map((item) => (
        <Pressable
          style={styles.contValues}
          onPress={() => {
            setChildrenMainModal(<Biography title={item.pregunta} />);
          }}
        >
          <ExpText h3 hidden>
            {item.pregunta}
          </ExpText>
        </Pressable>
      ))}
    </ExpView>
  );
}

const styles = StyleSheet.create({
  contValues: {
    paddingVertical: 28,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 13,
    borderColor: theme.colors.primary,
    alignItems: "center",
    marginBottom: 10,
  },
});
