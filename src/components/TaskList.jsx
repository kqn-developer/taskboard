import { tasks } from "@/data/taskData.js";
import Task from "./Task.jsx";

export default function TaskList({ taskStatus }) {
    return (
        <div className="space-y-3">
            {tasks
                .filter((task) => task.status === taskStatus)
                .map((task) => (
                    <Task key={task.id} task={task} />
                ))}
        </div>
    );
}
