export default function breed(state = "Havanese", action) {
  switch (action.type) {
    case "CHANGE_BREED": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
