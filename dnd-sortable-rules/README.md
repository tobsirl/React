# DnD Sortable Rules (React + Vite)

A minimal demo that lets you reorder “rules” using drag-and-drop, and renders a human-friendly summary for each rule. Built with React, Vite, Tailwind CSS v4 (via the Vite plugin), and dnd-kit. State is managed with `useReducer` and Immer.

## Stack

- React 19, Vite 7 (SWC plugin)
- Tailwind CSS v4 via `@tailwindcss/vite` (CSS uses `@import "tailwindcss";`)
- dnd-kit: `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/modifiers`
- Immer for reducer ergonomics
- ESLint configured for React

## Getting started

Prereqs:

- Node.js 20.19.0+ (Vite 7 requires >=20.19). If you use `nvm`:
  - `nvm install 20.19.0`
  - `nvm use 20.19.0`

Install and run:

- `npm install`
- `npm run dev` (starts Vite dev server)

Other scripts:

- `npm run build` (production build)
- `npm run preview` (serve the build)
- `npm run lint` (ESLint)

## Project structure

- `src/App.jsx` — App shell. Uses `useReducer(produce(ruleSetReducer), rules)` and renders the list + a JSON preview for debugging.
- `src/components/RulesList.jsx` — Drag-and-drop wiring with dnd-kit. Handles `onDragEnd` and dispatches a reorder action.
- `src/components/RulesItem.jsx` — Sortable item. Applies drag attributes/listeners, translates during drag, and formats rule text with helpers. Tailwind classes style the card.
- `src/utils.js` — Shared helpers:
  - `formatList(values)` → joins values with proper “and” grammar.
  - `formatAdjust(adjust)` → outputs “Increase/Decrease bid by X%” (handles string or number inputs).
  - `ruleSetReducer(draft, action)` → Immer-friendly reducer. Supports `REORDER_RULES` by reordering the array in-place.
- `src/index.css` — Imports Tailwind v4: `@import "tailwindcss";` and includes Vite’s starter styles.
- `vite.config.js` — Enables `@tailwindcss/vite` and React SWC.
- `package.json` — Scripts and dependencies.

## How drag-and-drop works

1. `RulesItem` calls `useSortable({ id: rule.id })`, attaching `attributes`, `listeners`, `setNodeRef`, and style transforms.
2. `RulesList` wraps items with `<DndContext modifiers={[restrictToVerticalAxis]}>` and `<SortableContext items={state.map(r => r.id)}>`.
3. On drop, `handleDragEnd` computes `from`/`to` indices by matching `active.id` and `over.id` against the current `state`, and dispatches `{ type: REORDER_RULES, payload: { from, to } }`.
4. The reducer creates a reordered array with `arrayMove` and mutates the draft in-place (clear + push) so Immer applies the change.

Common pitfalls avoided here:

- Passing `items={state.map(r => r.id)}` to `SortableContext` (must be a list of ids or items with unique ids).
- Using `modifiers` (not `mondifers`) to apply `restrictToVerticalAxis`.
- Mutating the Immer draft instead of reassigning it in the reducer.

## Tailwind v4 setup

- Plugin: `@tailwindcss/vite` added in `vite.config.js`.
- CSS: `src/index.css` uses `@import "tailwindcss";` (no PostCSS config needed for Tailwind).

## Extending

- Add more reducer actions in `utils.js` (e.g., add/remove rule, edit values).
- Enhance `RulesItem` formatting to include criteria types/operators if needed.
- Persist state to localStorage or an API.

## Rules data model

The app expects state to be an array of rule objects. Each rule looks like:

```json
{
  "id": "rule-1",
  "name": "High age",
  "adjust_value": "20%", // can be a number (e.g. 20) or string with % ("20%", "-10%")
  "criterias": [
    {
      "id": "crit-1",
      "criteria_type": "gender",
      "operator": "in",
      "criteria_values": ["women"]
    },
    {
      "id": "crit-2",
      "criteria_type": "age",
      "operator": "in",
      "criteria_values": ["18-24", "65+"]
    }
  ]
}
```

Notes:

- `id` must be unique per rule — it’s used by dnd-kit for sorting.
- `adjust_value` may be a number or string. The UI formats it as “Increase/Decrease bid by X%”.
- `criterias[].criteria_values` can be a string or array of strings — the UI will join values with proper grammar.

## Notes

- The JSON preview in `App.jsx` helps verify order/state during development.
- If you see Node engine warnings, upgrade Node to 20.19+ for Vite 7.
