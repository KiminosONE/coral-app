import { useState } from "react";

export const ModalProvider = () => {
  const [mainModalVisibility, setMainModalVisibility] = useState(false);
  const [childrenMainModal, setChildrenMainModal] = useState(<></>);
  const [eventMainModal, setEventMainModal] = useState({});

  return {
    mainModalVisibility,
    setMainModalVisibility,
    childrenMainModal,
    setChildrenMainModal,
    eventMainModal,
    setEventMainModal,
  };
};
