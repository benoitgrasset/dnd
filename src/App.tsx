import { DndContext } from "@dnd-kit/core";

import "./App.css";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

function App() {
  return (
    <>
      <DndContext>
        <Draggable />
        <Droppable />
      </DndContext>
    </>
  );
}

export default App;
