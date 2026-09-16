import TaskCard from './components/TaskCard';
import TaskList from './components/TaskList';
import TaskApp from './components/TaskApp';

function App() {
  return (
    <div>
      <h1>React Exercises</h1>

      <h2>Task Card</h2>
      <TaskCard title="Finish assignment" priority="high">
        <p>Due tomorrow</p>
      </TaskCard>

      <h2>Task List</h2>
      <TaskList />

      <h2>Advanced Task App</h2>
      <TaskApp />
    </div>
  );
}

export default App;