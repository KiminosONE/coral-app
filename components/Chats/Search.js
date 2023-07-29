// AnimatedTextInput.js
import React, { useRef } from "react";
import { View, TextInput, Animated, StyleSheet, Pressable } from "react-native";
import Icons from "../Utils/Icons";
import theme from "../../styles/theme";

export default function Search() {
  // Referencia para el TextInput
  const textInputRef = useRef(null);

  // Animaciones para el desplazamiento (translateX) y la opacidad del TextInput
  const textInputAnim = useRef(new Animated.Value(300)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  // Función para manejar la animación al presionar el botón
  const handleAnimate = () => {
    Animated.parallel([
      // Animación de resorte para el desplazamiento hacia la izquierda
      Animated.spring(textInputAnim, {
        toValue: 0,
        speed: 5,
        duration: 500,
        useNativeDriver: true,
      }),

      // Animación lineal para cambiar la opacidad del TextInput
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Renderiza el TextInput animado
  return (
    <>
      <Animated.View
        style={[
          styles.inputContainer,
          { transform: [{ translateX: textInputAnim }], opacity: opacityAnim },
        ]}
      >
        <TextInput
          ref={textInputRef}
          style={styles.input}
          placeholder="Busca en tu Coral"
        />
      </Animated.View>
      <Pressable onPress={handleAnimate} style={styles.logoSearch}>
        <Icons icon="buscar" />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "70%",
    transform: [{ translateX: 300 }],
    opacity: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
    borderRadius: 13,
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    fontSize: 16,
  },
  logoSearch: {
    marginLeft: "auto",
  },
});
