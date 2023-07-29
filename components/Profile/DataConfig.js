import { useState } from "react";
import Section from "../Utils/Section";
import Icons from "../Utils/Icons";
import MainModal from "../Modals/MainModal";

export default function DataConfig({ compModal = <></>, title, children }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Section
        title={title}
        titleIcon={<Icons icon="arrowRight" size={17} />}
        evento={() => {
          setModalVisible(true);
        }}
      >
        {children}
      </Section>
      {modalVisible ? (
        <MainModal title={title} hideModal={() => setModalVisible(false)}>
          {compModal}
        </MainModal>
      ) : null}
    </>
  );
}
