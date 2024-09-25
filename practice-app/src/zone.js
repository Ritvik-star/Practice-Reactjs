import { useDroppable } from "@dnd-kit/core";
import React from "react";

export default function DropZone({ id, children }) {
    const { isOver, setNodeRef } = useDroppable({
      id,
    });
  
    const style = {
      backgroundColor: isOver ? "lightgreen" : "#ccc",
      padding: "20px",
      margin: "16px",
      minHeight: "200px",
      border: "2px dashed #999",
    };
  
    return (
      <div ref={setNodeRef} style={style}>
        {children}
      </div>
    );
  }
  