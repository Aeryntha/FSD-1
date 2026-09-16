import { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    console.log('Component mounted');

    return () => console.log('Component unmounted');
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return <div>{tasks.length} tasks saved locally</div>;
}

export default TaskList;