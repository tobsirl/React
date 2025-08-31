import { useState } from "react";
import { rules } from "./rules";
import RulesList from "./components/RulesList";
import "./App.css";

function App() {
  const [rulesList, setRulesList] = useState(rules);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-start justify-center p-6">
      <div className="max-w-2xl w-full rounded-xl border border-gray-200 bg-white shadow-sm p-6 space-y-4 text-left">
        <h2 className="text-2xl font-bold tracking-tight">
          Drag and Drop Sortable Demo
        </h2>
        <p className="text-sm text-gray-600">
          Create rules to tell us how much more certain audiences are worth to
          your business. Our system will optimise for outcomes based on these
          rules.
        </p>
        <div className="flex gap-3"></div>
        <div className="grid grid-cols-1 gap-2 text-xs text-gray-500">
          <RulesList rulesList={rulesList} />
        </div>
        <pre className="mt-6 p-1 bg-gray-100 rounded">
          <code className="text-xs text-gray-800">
            {JSON.stringify(rulesList, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default App;
