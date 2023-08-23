import { Modal, Pressable, StyleSheet } from "react-native";
import ExpText from "../Utils/ExpText";
import ExpView from "../Utils/ExpView";
import theme from "../../styles/theme";
import Biography from "./Settings/Biography";
import ListNewQuestion from "./Settings/ListNewQuestion";

export default function QuestionModal({
  data,
  modalVisible,
  setModalVisible,
  setChildrenMainModal,
  setMainModalVisibility,
  dataClick,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => hideModal()}
    >
      <ExpView style={styles.modal}>
        <Pressable style={{ flex: 1 }} onPress={() => setModalVisible(false)} />
        <ExpView container style={styles.contCard}>
          <ExpView container style={styles.contHeader}>
            <ExpText h3 style={styles.titleModal}>
              Que quieres hacer con tu pregunta?
            </ExpText>

            <Pressable
              style={styles.botos}
              onPress={() => {
                setModalVisible(false);
                setChildrenMainModal(
                  <Biography
                    title={dataClick.pregunta}
                    data={dataClick.respuesta}
                  />
                );
                setMainModalVisibility(true);
              }}
            >
              <ExpText bold>Actualizar</ExpText>
            </Pressable>
            <Pressable
              style={styles.botos}
              onPress={() => {
                setModalVisible(false);
                setChildrenMainModal(
                  <ListNewQuestion
                    blocked={data}
                    setChildrenMainModal={setChildrenMainModal}
                  />
                );
                setMainModalVisibility(true);
              }}
            >
              <ExpText bold>Remplazar</ExpText>
            </Pressable>
            <Pressable style={[styles.botos]}>
              <ExpText bold style={{ color: "red" }}>
                Eliminar
              </ExpText>
            </Pressable>
            <Pressable
              style={styles.botos}
              onPress={() => setModalVisible(false)}
            >
              <ExpText bold>Cancelar</ExpText>
            </Pressable>
          </ExpView>
        </ExpView>
      </ExpView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "flex-end",
  },
  contCard: {
    borderRadius: 13,
    backgroundColor: "white",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  contHeader: {
    alignItems: "center",
    paddingVertical: 12,
  },
  titleModal: {
    marginBottom: 10,
  },
  botos: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 13,
    backgroundColor: theme.colors.backgroundPrimary,
    alignItems: "center",
  },
});
