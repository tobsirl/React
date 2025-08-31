export const rules = [
  {
    name: "Testing Conversion Value Rules - SM",
    adjust_sign: "INCREASE",
    adjust_value: 1,
    criterias: [
      {
        criteria_type: "AGE",
        operator: "CONTAINS",
        criteria_values: ["18-24"],
        criteria_value_types: ["NONE"],
        id: "542279348417816",
      },
      {
        criteria_type: "GENDER",
        operator: "CONTAINS",
        criteria_values: ["male"],
        criteria_value_types: ["NONE"],
        id: "521501700798533",
      },
    ],
    id: "1087733916088472",
  },
  {
    name: "Testing Conversion Value Rules - IR01",
    adjust_sign: "INCREASE",
    adjust_value: 20,
    criterias: [
      {
        criteria_type: "AGE",
        operator: "CONTAINS",
        criteria_values: ["35-44"],
        criteria_value_types: ["NONE"],
        id: "577502364933746",
      },
      {
        criteria_type: "GENDER",
        operator: "CONTAINS",
        criteria_values: ["female"],
        criteria_value_types: ["NONE"],
        id: "1125844302601209",
      },
    ],
    id: "457500186973329",
  },
  {
    name: "Testing Conversion Value Rules - IR02",
    adjust_sign: "INCREASE",
    adjust_value: 20,
    criterias: [
      {
        criteria_type: "OS_TYPE",
        operator: "CONTAINS",
        criteria_values: ["ios"],
        criteria_value_types: ["NONE"],
        id: "951463240239838",
      },
      {
        criteria_type: "AGE",
        operator: "CONTAINS",
        criteria_values: ["55-64"],
        criteria_value_types: ["NONE"],
        id: "1078512000206753",
      },
    ],
    id: "1110164134024490",
  },
  {
    name: "Testing Conversion Value Rules - IR03",
    adjust_sign: "INCREASE",
    adjust_value: 20,
    criterias: [
      {
        criteria_type: "AGE",
        operator: "CONTAINS",
        criteria_values: ["45-54"],
        criteria_value_types: ["NONE"],
        id: "541971158681528",
      },
    ],
    id: "1371516167146678",
  },
];
