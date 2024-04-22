import { useDroppable } from "@dnd-kit/core";

type Props = {
  children?: React.ReactNode;
};

const Droppable = ({ children }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
    backgroundColor: isOver ? "lightgreen" : undefined,
    height: "150px",
    width: "150px",
    border: "2px dashed #bfbfbf",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
