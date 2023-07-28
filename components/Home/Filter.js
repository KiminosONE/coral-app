import { Pressable, Text } from "react-native";
import { useState } from "react";
import ModalComp from "../Modals/ModalComp";
import Icons from "../Utils/Icons";

export default function filter() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <Icons icon="filter" />
      </Pressable>

      {modalVisible ? (
        <ModalComp hideModal={() => setModalVisible(false)}>
          <Text>hols</Text>
        </ModalComp>
      ) : null}
    </>
  );
}
