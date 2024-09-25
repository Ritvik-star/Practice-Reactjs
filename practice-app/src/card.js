import { useDraggable } from "@dnd-kit/core";
import {useSortable} from "@dnd-kit/sortable"
import React from "react";

export default function DraggableCard({ id, position, children }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id,
    });
  
    const style = {
      transform: CSS.Translate?.toString(transform),
      transition,
      border: "1px solid black",
      padding: "16px",
      margin: "8px",
      width: "100px",
      backgroundColor: "red",
    };
  
    return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
      </div>
    );
  }