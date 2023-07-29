import { Image, StyleSheet, View } from "react-native";
import ExpText from "../Utils/ExpText";
import ExpView from "../Utils/ExpView";
import Icons from "../Utils/Icons";
import theme from "../../styles/theme";
import BtnLike from "../Utils/Buttons/BtnLike";

export default function Banner({ height = 300 }) {
  return (
    <ExpView style={{ height }}>
      <Image
        style={styles.image}
        source={{
          uri: "https://picsum.photos/400/500",
        }}
      />
      <ExpView
        style={styles.contInfo}
        linearGradient={["transparent", "#000000bf"]}
      >
        <ExpView container>
          <ExpView>
            <ExpText h1 style={styles.text}>
              Camil@
            </ExpText>
          </ExpView>

          <InfoLabel
            icon={<Icons icon="trabajo" size={20} style={{ color: "white" }} />}
            text="Programador donde mi mama me llamaba feo"
          />
          <InfoLabel
            icon={<Icons icon="ubicacion" size={20} style={{ color: "white" }} />}
            text="Medellin"
          />
          <BtnLike style={{ marginTop: 10 }} />
        </ExpView>
      </ExpView>
    </ExpView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  contInfo: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: "5%",
    paddingTop: "15%",
  },
  text: {
    color: "white",
  },
});

const InfoLabel = ({ icon, text }) => {
  const stylesInfoLabel = StyleSheet.create({
    info: {
      marginTop: 4,
      flexDirection: "row",
      alignItems: "center",
      width: "95%",
    },
    text: {
      marginLeft: "2%",
      color: "white",
    },
  });

  return (
    <ExpView style={stylesInfoLabel.info}>
      {icon}
      <ExpText bold hidden style={stylesInfoLabel.text}>
        {text}
      </ExpText>
    </ExpView>
  );
};
