import { useDraggable } from "@dnd-kit/core";

type Props = {
  children?: React.ReactNode;
  id: string;
};

const Draggable = ({ children, id }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = {
    backgroundColor: "lightblue",
    ...(transform
      ? {
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
      : undefined),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
};

export default Draggable;
