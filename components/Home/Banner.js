import { Image, StyleSheet, View } from "react-native";
import ExpText from "../Utils/ExpText";
import ExpView from "../Utils/ExpView";
import Icons from "../Utils/Icons";

export default function Banner({ height = 300 }) {
  return (
    <ExpView style={{ height }}>
      <Image
        style={styles.image}
        source={{
          uri: "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
        }}
      />
      <ExpView
        style={styles.contInfo}
        linearGradient={["transparent", "#0000008f"]}
      >
        <ExpView container>
          <ExpView>
            <ExpText h1 style={styles.text}>
              Camil@
            </ExpText>
          </ExpView>

          <InfoLabel
            icon={<Icons icon="trabajo" style={{ color: "white" }} />}
            text="Programador donde mi mama me llamaba feo"
          />
          <InfoLabel
            icon={<Icons icon="ubicacion" style={{ color: "white" }} />}
            text="Medellin"
          />
        </ExpView>
      </ExpView>
    </ExpView>
  );
}

const InfoLabel = ({ icon, text }) => {
  const stylesInfoLabel = StyleSheet.create({
    info: {
      marginTop: 4,
      flexDirection: "row",
      alignItems: "center",
      color: "white",
    },
    text: {
      marginLeft: "2%",
      color: "white",
    },
  });

  return (
    <ExpView style={stylesInfoLabel.info}>
      {icon}
      <ExpText h3 hidden style={stylesInfoLabel.text}>
        {text}
      </ExpText>
    </ExpView>
  );
};

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
