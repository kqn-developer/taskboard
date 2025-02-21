import { taskStatuses } from "@/data/taskData.js";
import AddTaskDialog from "./AddTaskDialog.jsx";
import TaskList from "./TaskList.jsx";

export default function TaskBoard() {
    return (
        <div className="flex shrink-0 flex-nowrap items-start gap-3">
            {taskStatuses.map(({ name: taskName, value: taskStatus, bgColor }) => (
                <div className={`w-72 shrink-0 rounded-sm px-5 py-2 ${bgColor}`} key={taskStatus}>
                    <div className="text-md mb-3 font-medium text-gray-800">{taskName}</div>
                    <div className="-mx-3">
                        {/* features: adding a task */}
                        <AddTaskDialog defaultStatus={taskStatus} />
                    </div>
                    {/* show task list */}
                    <div className="-mx-3 mt-3">
                        <TaskList taskStatus={taskStatus} />
                    </div>
                </div>
            ))}
        </div>
    );
}
