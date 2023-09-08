import { useDroppable } from "@dnd-kit/core";

type Props = {
  children?: React.ReactNode;
  id: string;
};

const Droppable = ({ children, id }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    color: isOver ? "green" : undefined,
    backgroundColor: isOver ? "lightgreen" : undefined,
    height: "150px",
    width: "150px",
    border: "1px solid black",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
