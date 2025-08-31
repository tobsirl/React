import React from "react";
import RulesItem from "./RulesItem";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

export default function RulesList({ rulesList }) {
  function handleDragEnd(event) {
    const { active, over } = event;
    console.log("Dragged item:", active, "Dropped over:", over);
  }
  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={rulesList}>
          {rulesList.map((rule, idx) => (
            <RulesItem key={rule.id} rule={rule} index={idx + 1} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
}
