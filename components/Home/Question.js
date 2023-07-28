import ExpText from "../Utils/ExpText";
import Section from "../Utils/Section";

export default function Question({ question, text, noBorder }) {
  const prop = noBorder && { noBorder: true };

  return (
    <Section titleSize="p" title={question} {...prop}>
      <ExpText h3>{text}</ExpText>
    </Section>
  );
}