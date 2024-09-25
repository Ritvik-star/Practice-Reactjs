import './App.css';
import React, { useState } from 'react';
// import {DndContext, closestCenter } from "@dnd-kit/core"
// import DraggableCard from './card';
// import DropZone from './zone';

import { DndContext} from '@dnd-kit/core';
import { useDraggable, useDroppable } from '@dnd-kit/core';

function App() {

  const Draggable = useDraggable({
    id: 'draggable-1',
  });

  const Droppable = useDroppable({
    id: 'droppable',
  });

  const handleDragEnd = (event) => {
    if (event.over.id === 'droppable') {
      console.log('Draggable card dropped on drop zone!');
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Draggable id="draggable-1">
        <div>Draggable Card 1</div>
      </Draggable>
      <Droppable id="droppable">
        <div>Drop Zone</div>
      </Droppable>
    </DndContext>
  );
}

export default App;
