function TaskCard({ title, priority, children }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <span className={`priority ${priority}`}>{priority}</span>
      <div>{children}</div>
    </div>
  );
}

export default TaskCard;