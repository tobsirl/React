import React from "react";
import RulesItem from "./RulesItem";

export default function RulesList({ rulesList }) {
  return (
    <>
      {rulesList.map((rule, idx) => (
        <RulesItem key={rule.id} rule={rule} index={idx + 1} />
      ))}
    </>
  );
}
