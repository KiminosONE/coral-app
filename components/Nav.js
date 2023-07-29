import { StyleSheet, View } from "react-native";
import globalsStyles from "../styles/globals";
import { Link, usePathname } from "expo-router";
import React, { useEffect, useState } from "react";
import Icons from "./Utils/Icons";

const style = StyleSheet.create({
  active: {
    color: "black",
  },
  iconNav: {
    color: "#999999",
  },
});

const NavTab = ({ children, href }) => {
  const pathname = usePathname();
  const active = pathname === href;

  const stylesNavTab = [style.iconNav, active && style.active];

  return (
    <Link href={href}>
      {React.cloneElement(children, { style: stylesNavTab })}
    </Link>
  );
};

export default function Nav() {
  return (
    <View style={[globalsStyles.container, { marginTop: "auto" }]}>
      <View style={globalsStyles.header}>
        <NavTab href="/chats">
          <Icons icon="chat"/>
        </NavTab>
        <NavTab href="/chats">
          <Icons icon="corazon" />
        </NavTab>
        <NavTab href="/">
          <Icons icon="geminis" />
        </NavTab>
        <NavTab href="/notices">
          <Icons icon="notificaciones" />
        </NavTab>
        <NavTab href="/profile">
          <Icons icon="perfil" />
        </NavTab>
      </View>
    </View>
  );
}
