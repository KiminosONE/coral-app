import { StyleSheet, Text } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSizes.small,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary,
  },
  h1: {
    fontSize: theme.fontSizes.xLarge,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  h2: {
    fontSize: theme.fontSizes.large,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  h3: {
    fontSize: theme.fontSizes.medium,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
});

export default function ExpText({
  h1,
  h2,
  h3,
  hidden,
  children,
  style,
  ...props
}) {
  const stylesText = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    style,
  ];

  const textProps = hidden && { numberOfLines: 1, ellipsizeMode: "tail" };

  return (
    <Text style={stylesText} {...textProps} {...props}>
      {children}
    </Text>
  );
}
