import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Nav from "../components/Nav";

export default function Layout() {
  return (
    <>
      <Slot />
      <Nav />
    </>
  );
}
