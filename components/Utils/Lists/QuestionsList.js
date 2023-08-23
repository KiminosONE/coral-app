import Question from "./Cards/Question";
import { useState } from "react";
import QuestionModal from "../../Modals/QuestionModal";
import ListNewQuestion from "../../Modals/Settings/ListNewQuestion";

export default function QuestionsList({
  data,
  setMainModalVisibility,
  setChildrenMainModal,
  setEventMainModal,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dataClick, setDataClick] = useState({});

  return (
    <>
      {data.map((item) => (
        <Question
          key={item.id}
          accion={() => {
            setDataClick(item);
            setModalVisible(true);
          }}
          question={item.pregunta}
          text={item.respuesta}
        />
      ))}

      {data.length <= 2 && (
        <Question
          key={0}
          accion={() => {
            setModalVisible(false);
            setChildrenMainModal(
              <ListNewQuestion blocked={data} setChildrenMainModal={setChildrenMainModal} />
            );
            setMainModalVisibility(true);
          }}
          question="Anade una pregunta"
        />
      )}

      <QuestionModal
        data={data}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setChildrenMainModal={setChildrenMainModal}
        setMainModalVisibility={setMainModalVisibility}
        dataClick={dataClick}
      />
    </>
  );
}
