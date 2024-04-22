import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

import { SortableItem } from "./SortableItem";

const _items = [
  {
    label: "Item 1",
  },
  {
    label: "Item 2",
  },
  {
    label: "Item 3",
  },
  {
    label: "Item 4",
  },
  {
    label: "Item 5",
  },
].map((item, index) => ({ ...item, index, id: crypto.randomUUID() }));

function App() {
  const [items, setItems] = useState(_items);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div
        style={{
          backgroundColor: "lightgray",
          margin: "10px",
        }}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map(({ id, label }) => (
            <SortableItem key={id} id={id}>
              {label}
            </SortableItem>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    console.log("active:", active);

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.map((e) => e.id).indexOf(active.id as string);
        const newIndex = items.map((e) => e.id).indexOf(over.id as string);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

export default App;
