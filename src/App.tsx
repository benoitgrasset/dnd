import { DndContext, DragEndEvent } from "@dnd-kit/core";

import { useState } from "react";
import "./App.css";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

const App = () => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  };

  const draggableMarkup = <Draggable>Drag me</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
    </DndContext>
  );
};

export default App;
