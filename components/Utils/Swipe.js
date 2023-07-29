import { useRef } from "react";
import { StyleSheet, PanResponder, Animated, Dimensions } from "react-native";
import ExpView from "./ExpView";
import theme from "../../styles/theme";

export default function Swipe({ left, icon, style }) {
  const ballPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // Ancho del carril
  const carrilWidth = Dimensions.get("window").width - 71;

  // Configura el PanResponder para la bola roja
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      // Obtenemos la posición actual de la bola roja
      const { dx } = gesture;

      let newX = 0;
      // Calculamos los limites del carril
      if (left) {
        newX = dx > 0 ? 0 : Math.max(dx, -carrilWidth);
        //se invierte el signo para que la bola se mueva hacia la izquierda
        newX = -newX;
      } else {
        newX = dx > 0 ? Math.min(dx, carrilWidth) : 0;
      }

      // Realizar la acción cuando la bola roja llegue al punto x = 150
      //   if (newX >= 150) {
      //     // Aquí puedes realizar la acción que desees
      //     Alert.alert(
      //       "¡Acción realizada!",
      //       "La bola roja llegó al punto x = 150"
      //     );
      //   }

      // Actualizamos la posición de la bola roja
      ballPosition.setValue({ x: newX, y: 0 });
    },
    onPanResponderRelease: () => {
      Animated.spring(ballPosition, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  const stylesSwipe = [
    styles.cont,
    left && { alignSelf: "flex-end", },
    style
  ]

  return (
    <ExpView style={stylesSwipe}>
      <ExpView style={styles.carril}>
        <Animated.View
          style={[
            styles.bola,
            left ? { right: ballPosition.x } : ballPosition.getLayout(),
          ]}
          {...panResponder.panHandlers}
        >
          {icon}
        </Animated.View>
      </ExpView>
    </ExpView>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: theme.colors.tertiary,
    padding: 5,
    borderRadius: 50,
    marginBottom: 10,
    width: "80%",
  },
  carril: {
    width: "100%",
    height: 47,
    position: "relative",
  },
  bola: {
    alignItems: "center",
    justifyContent: "center",
    width: 47,
    height: 47,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    position: "absolute",
    top: 0,
  },
});
