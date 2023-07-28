import { Slot } from "expo-router";
import Nav from "../components/Nav";

export default function Layout() {
  return (
    <>
      <Slot />
      <Nav />
    </>
  );
}
