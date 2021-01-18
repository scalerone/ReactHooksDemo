import React, { useReducer } from 'react';
// interface stateType {
//   count: number
// }
// interface actionType {
//   type: string
// }
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>useReducer Count:{state.count}</div>
      <button onClick={() => { dispatch({ type: 'decrement' }); }}>useReducer 减少</button>
      <button onClick={() => { dispatch({ type: 'increment' }); }}>useReducer 增加</button>
    </div>
  );
};

export default UseReducer;
