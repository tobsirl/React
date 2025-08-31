import React from "react";
import { formatList, formatAdjust } from "../utils";

export default function RulesItem({ rule, index }) {
  const allValues = (rule?.criterias || []).flatMap((c) =>
    Array.isArray(c?.criteria_values)
      ? c.criteria_values
      : c?.criteria_values != null
      ? [c.criteria_values]
      : []
  );

  const criteriaText = formatList(allValues);
  const adjustText = formatAdjust(rule?.adjust_value);

  return (
    <div className="p-3 rounded-lg border border-gray-200 text-left shadow-md bg-gray-100">
      <h3 className="font-semibold mt-1 text-lg">
        {typeof index === "number" ? `Rule ${index}: ` : ""}
        {rule?.name}
      </h3>
      {adjustText && (
        <p className="text-sm text-gray-700">
          {adjustText}
          {criteriaText ? ` (${criteriaText})` : ""}
        </p>
      )}
    </div>
  );
}
