import React from "react";
import RulesItem from "./RulesItem";
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";

export default function RulesList({ rulesList, setRulesList }) {
  function handleDragEnd(event) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setRulesList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(rulesList, oldIndex, newIndex);
      });
    }
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
