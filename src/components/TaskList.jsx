export const TaskList = ({ tasks }) => {
  return (
    <div className="container2">
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
