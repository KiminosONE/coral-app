import { Modal, Pressable, StyleSheet } from "react-native";
import Icons from "../Utils/Icons";
import ExpText from "../Utils/ExpText";
import ExpView from "../Utils/ExpView";
import ExpScrollView from "../Utils/ExpScrollView";

export default function MainModal({
  modalVisible,
  setModalVisible,
  title,
  children,
  event = () => {},
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible()}
    >
      <Pressable
        style={{ height: "5%", marginBottom: 10 }}
        onPress={() => setModalVisible(false)}
      />

      <ExpView style={styles.modal}>
        <ExpView container header>
          <Pressable onPress={() => setModalVisible(false)}>
            <Icons icon="cierre" />
          </Pressable>
          {title && <ExpText h2>{title}</ExpText>}
          <Pressable onPress={() => event()}>
            <Icons icon="check" />
          </Pressable>
        </ExpView>
        <ExpScrollView>
          <ExpView container>{children}</ExpView>
        </ExpScrollView>
      </ExpView>
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
