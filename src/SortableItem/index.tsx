import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  children: React.ReactNode;
};

export function SortableItem({ children, id }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px",
    width: "50px",
    borderRadius: "5px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: isDragging ? "2px solid #2194f3" : "1px solid #ccc",
    backgroundColor: isDragging ? "#e3f2fd" : "white",
    cursor: "pointer",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}
