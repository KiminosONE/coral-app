import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import globalsStyles from "../../styles/globals";
import Icons from "../Utils/Icons";

export default function ModalComp({ hideModal, children }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => hideModal()}
    >
      <Pressable
        style={{ height: "5%", marginBottom: 10 }}
        onPress={() => hideModal()}
      />

      <View style={styles.modal}>
        <View style={globalsStyles.container}>
          <View style={globalsStyles.header}>
            <Pressable onPress={() => hideModal()}>
              <Icons icon="cierre" />
            </Pressable>
            <Icons icon="check" />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
});
