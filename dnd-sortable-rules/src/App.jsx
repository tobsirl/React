import { useState } from "react";
import { rules } from "./rules";
import "./App.css";

function App() {
  const [rulesList, setRulesList] = useState(rules);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-start justify-center p-6">
      <div className="max-w-xl w-full rounded-xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">
          Drag and Drop Sortable Demo
        </h1>
        <p className="text-sm text-gray-600">
          If Tailwind is working, this card has padding, rounded corners, and a
          subtle shadow.
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition">
            Primary
          </button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-800">
            Secondary
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
          <div className="p-3 rounded-lg bg-gray-100">grid-cols-2</div>
          <div className="p-3 rounded-lg bg-gray-100">gap-2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
