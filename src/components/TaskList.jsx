import { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input,
        done: false,
      },
    ]);

    setInput('');
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            onClick={() => toggleTask(t.id)}
            style={{
              textDecoration: t.done ? 'line-through' : 'none',
            }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;