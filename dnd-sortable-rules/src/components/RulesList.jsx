import RulesItem from "./RulesItem";
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

export default function RulesList({ rulesList, setRulesList }) {
  function handleDragEnd(event) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setRulesList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  return (
    <>
      <DndContext
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={rulesList}>
          {rulesList.map((rule, idx) => (
            <RulesItem key={rule.id} rule={rule} index={idx + 1} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
}
