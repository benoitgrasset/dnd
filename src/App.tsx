import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";

import { useState } from "react";
import "./App.css";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

const App = () => {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    setParent(event.over ? event.over.id : null);
  };

  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}
      {containers.map((id) => (
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : "Drop here"}
        </Droppable>
      ))}
    </DndContext>
  );
};

export default App;
