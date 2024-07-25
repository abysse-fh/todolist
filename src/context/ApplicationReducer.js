function ApplicationReducer(
  state = { tasks: [], basket: [], users: [] },
  action
) {
  const { type = "", data = {} } = action;
  switch (type) {
    case "SET_TASKS":
      return { ...state, tasks: data };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, data] };
    case "ADD_USER":
      return { ...state, users: [...state.users, data] };

    default:
      return state;
  }
}

export { ApplicationReducer };
