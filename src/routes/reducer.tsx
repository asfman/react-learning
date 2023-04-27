
import { useReducer } from 'react';

type Action = Record<string, any>;
type State = Record<string, any>;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'decremented_age': {
      return {
        name: state.name,
        age: state.age - 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
    default:
    throw Error('Unknown action: ' + action.type);
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42, name: "asfman" });
  function handleInputChange(e: { target: HTMLInputElement; }) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    });
  }

  return (
    <div style={{borderRadius: "10px", padding: "12px", border: "1px solid #ccc", margin: "12px"}}>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <div>
        <button onClick={() => {
          dispatch({ type: 'incremented_age' })
        }}>
          Increment age
        </button>
    &#160;
    <button onClick={() => {
      dispatch({ type: 'decremented_age' })
    }}>
      Increment age
    </button>
  </div>
  <p>Hello! <strong>{state.name}</strong> You are {state.age}.</p>
</div>
  );
}
