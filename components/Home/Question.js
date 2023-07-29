import { StyleSheet } from "react-native";
import ExpText from "../Utils/ExpText";
import Section from "../Utils/Section";
import BtnLike from "../Utils/Buttons/BtnLike";

export default function Question({ question, text, noBorder, tuLike }) {
  const prop = noBorder && { noBorder: true };

  return (
    <Section titleSize="p" title={question} {...prop}>
      <ExpText bold style={styles.text}>{text}</ExpText>
      {tuLike && <BtnLike style={styles.BtnLike} />}
    </Section>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
  BtnLike: {
    marginTop: 10,
  },
});