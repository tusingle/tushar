import React, {usestate, useeffect, useReducer} from "react";
import './App.css';
const initialState = {count: 0, op: ''};


<<<<<<< HEAD
function reducer(state, action) {
=======
function reducer (state, action) {
>>>>>>> 47b0a6563642eb2cc78478625678162d62404351
  switch (action.type) {
    case 'increment':
      return {count: state.count + 2 , op: 'increment' };
    case 'decrement':
      return {count: state.count - 2, op: 'decrement'};
    default:
     throw new Error();
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="width100">
     
     <span>Health App</span>
     <>
      Count: {state.count}
      op: {state.op}

      <br/>

       <button onClick={() => dispatch({type: 'increment'})}>+</button>

      <br/>

      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
         </div>
  );
}

export default App;
