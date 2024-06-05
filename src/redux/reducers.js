const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { text: action.payload, completed: false }],
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((_, index) => index !== action.payload),
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
            index === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
            index === action.payload.index ? { ...task, text: action.payload.newText } : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  