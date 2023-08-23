import Section from "../Utils/Section";
import Icons from "../Utils/Icons";

export default function DataConfig({
  compModal = <></>,
  title = "titulo",
  children,
  setMainModalVisibility,
  setChildrenMainModal,
}) {
  return (
    <>
      <Section
        title={title}
        titleIcon={<Icons icon="arrowRight" size={17} />}
        evento={() => {
          setChildrenMainModal(compModal);
          setMainModalVisibility(true);
        }}
      >
        {children}
      </Section>
    </>
  );
}