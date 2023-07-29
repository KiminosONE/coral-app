import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import globalsStyles from "../styles/globals";
import Search from "./Chats/Search";
import { Link } from "expo-router";
import ExpText from "./Utils/ExpText";
import theme from "../styles/theme";

export default function Header({ children }) {
  // Renderiza el encabezado con el botón, el TextInput animado y el ícono
  return (
    <View style={[globalsStyles.container]}>
      <View
        style={[
          globalsStyles.header,
          { paddingTop: Constants.statusBarHeight + 10 },
        ]}
      >
        <Link href="/" style={styles.logo}>
          <ExpText h1 style={styles.textLogo}>
            Astro
          </ExpText>
        </Link>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginRight: "auto",
  },
  textLogo: {
    color: theme.colors.primary,
  },
});
