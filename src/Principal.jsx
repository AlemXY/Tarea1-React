import { ColorChanger } from "./components/ColorChanger";
import { TaskList } from "./components/TaskList";

export const Principal = () => {
  const tasks = [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true },
    { id: 3, text: "Task 3", completed: false },
  ];
  return (
    <div>
      <div>
        <h2>Color Changer</h2>
        <ColorChanger color="blue" />
        <hr/>
        <h2>Task List</h2>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};
