import TaskCard from './components/TaskCard';

const tasks = [
  { id: 1, title: 'Finish assignment', priority: 'high' },
  { id: 2, title: 'Read chapter 4', priority: 'low' },
];

function App() {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          priority={task.priority}
        >
          <p>Due tomorrow</p>
        </TaskCard>
      ))}
    </div>
  );
}

export default App;