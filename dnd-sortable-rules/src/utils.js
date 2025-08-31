// Formatting utilities shared across components
import { actions } from "./constants";
import { arrayMove } from "@dnd-kit/sortable";

export function formatList(values = []) {
  const arr = (values || []).filter(Boolean).map(String);
  if (arr.length <= 1) return arr.join("");
  if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
  return `${arr.slice(0, -1).join(", ")} and ${arr[arr.length - 1]}`;
}

export function formatAdjust(adjust) {
  if (adjust == null) return "";
  if (typeof adjust === "string") {
    const num = parseFloat(adjust);
    if (!isNaN(num)) {
      const dir = num > 0 ? "Increase" : num < 0 ? "Decrease" : "No change";
      const magnitude = Math.abs(num);
      const hasPercent = adjust.includes("%");
      const value = `${magnitude}${hasPercent ? "%" : "%"}`; // assume % if not provided
      return dir === "No change" ? dir : `${dir} bid by ${value}`;
    }
    return `Adjust: ${adjust}`;
  }
  if (typeof adjust === "number") {
    const dir = adjust > 0 ? "Increase" : adjust < 0 ? "Decrease" : "No change";
    const magnitude = Math.abs(adjust);
    return dir === "No change" ? dir : `${dir} bid by ${magnitude}%`;
  }
  return `Adjust: ${String(adjust)}`;
}

export function ruleSetReducer(draft, action) {
  switch (action.type) {
    case actions.REORDER_RULES: {
      const { from, to } = action.payload;
      // mutate the draft in-place to keep Immer working correctly
      const moved = arrayMove(draft, from, to);
      draft.length = 0;
      draft.push(...moved);
      break;
    }
  }
  return draft;
}
