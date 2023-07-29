import { Pressable, Text } from "react-native";
import { useState } from "react";
import Icons from "../Utils/Icons";
import MainModal from "../Modals/MainModal";

export default function filter() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <Icons icon="filter" />
      </Pressable>

      {modalVisible ? (
        <MainModal hideModal={() => setModalVisible(false)}>
          <Text>hols</Text>
        </MainModal>
      ) : null}
    </>
  );
}
