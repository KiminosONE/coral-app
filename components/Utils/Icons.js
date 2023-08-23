import {
  Ionicons,
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";
import React from "react";
export default function Icons({ icon = "cierre", style, size = 24 }) {
  const iconsList = {
    corazon: <AntDesign name="heart" size={24} color="black" />,
    chat: <Ionicons name="chatbubble" size={24} color="black" />,
    perfil: <FontAwesome5 name="user-alt" size={24} color="black" />,
    notificaciones: <Ionicons name="planet" size={24} color="black" />,
    geminis: (
      <MaterialCommunityIcons name="zodiac-gemini" size={24} color="black" />
    ),
    buscar: <Ionicons name="search" size={24} color="black" />,
    filter: <Ionicons name="filter" size={24} color="black" />,
    cierre: <Ionicons name="close" size={24} color="black" />,
    check: <Ionicons name="checkmark-sharp" size={24} color="black" />,
    estrella: <AntDesign name="star" size={24} color="black" />,
    trabajo: <MaterialIcons name="work-outline" size={24} color="black" />,
    ubicacion: <Ionicons name="location-outline" size={24} color="black" />,
    arrowRight: (
      <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
    ),
    musica: <Ionicons name="musical-notes" size={24} color="black" />,
    popcorn: <MaterialCommunityIcons name="popcorn" size={24} color="black" />,
    sports: <MaterialIcons name="sports-football" size={24} color="black" />,
    airplane: (
      <MaterialCommunityIcons name="airplane" size={24} color="black" />
    ),
    pizza: <FontAwesome5 name="pizza-slice" size={24} color="black" />,
    plus: <AntDesign name="plus" size={24} color="black" />,
    question: <AntDesign name="question" size={24} color="black" />,
  };

  const respaldo = iconsList[icon] === undefined ? "cierre" : icon;

  return React.cloneElement(iconsList[respaldo], { style: style, size: size });
}
