import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import ModalComp from "../Modals/ModalComp";

export default function filter() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <Ionicons name="filter" size={24} color="black" />
      </Pressable>

      {modalVisible ? (
        <ModalComp hideModal={() => setModalVisible(false)}>
          <Text>hols</Text>
        </ModalComp>
      ) : null}
    </>
  );
}
