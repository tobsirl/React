export const rules = [
  {
    name: "High age",
    adjust_sign: "INCREASE",
    adjust_value: 20,
    criterias: [
      {
        criteria_type: "AGE",
        operator: "CONTAINS",
        criteria_values: ["18-24", "65+"],
        criteria_value_types: ["NONE", "NONE"],
        id: "1992718838161786",
      },
      {
        criteria_type: "GENDER",
        operator: "CONTAINS",
        criteria_values: ["female"],
        criteria_value_types: ["NONE"],
        id: "624391207140536",
      },
    ],
    id: "1093039576293787",
  },
  {
    name: "Toby's Test rule",
    adjust_sign: "INCREASE",
    adjust_value: 25,
    criterias: [
      {
        criteria_type: "AGE",
        operator: "CONTAINS",
        criteria_values: ["25-34"],
        criteria_value_types: ["NONE"],
        id: "2262334934211788",
      },
      {
        criteria_type: "GENDER",
        operator: "CONTAINS",
        criteria_values: ["male"],
        criteria_value_types: ["NONE"],
        id: "1311484126989224",
      },
    ],
    id: "765591229186179",
  },
];
