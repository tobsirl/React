import RulesItem from "./RulesItem";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { actions } from "../constants";

export default function RulesList({ state, dispatch }) {
  function handleDragEnd(event) {
    const { active, over } = event;
    // Only proceed if we have a valid drop target and it's not the same item
    if (!over || active.id === over.id) return;

    // State is an array of rules
    const from = state.findIndex((rule) => rule.id === active.id);
    const to = state.findIndex((rule) => rule.id === over.id);

    if (from !== -1 && to !== -1) {
      dispatch({
        type: actions.REORDER_RULES,
        payload: { from, to },
      });
    }
  }
  return (
    <>
      <DndContext
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={state.map((r) => r.id)}>
          {state.map((rule, idx) => (
            <RulesItem key={rule.id} rule={rule} index={idx + 1} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
}
