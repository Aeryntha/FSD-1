import {
  useReducer,
  useContext,
  createContext,
  useRef,
  useMemo,
} from 'react';

const ThemeContext = createContext('light');

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'remove':
      return state.filter((t) => t.id !== action.id);

    case 'toggle':
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t
      );

    default:
      return state;
  }
}

function TaskApp() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const inputRef = useRef(null);
  const theme = useContext(ThemeContext);

  const completedCount = useMemo(
    () => tasks.filter((t) => t.done).length,
    [tasks]
  );

  const addTask = () => {
    const text = inputRef.current.value.trim();

    if (!text) return;

    dispatch({
      type: 'add',
      payload: {
        id: Date.now(),
        text,
        done: false,
      },
    });

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div className={theme}>
      <h1>Task App</h1>

      <input
        ref={inputRef}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>

      <p>Completed: {completedCount}</p>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() =>
                dispatch({ type: 'toggle', id: task.id })
              }
              style={{
                textDecoration: task.done
                  ? 'line-through'
                  : 'none',
                cursor: 'pointer',
              }}
            >
              {task.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: 'remove', id: task.id })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;