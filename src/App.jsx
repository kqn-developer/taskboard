import AddTask from "./components/AddTask.jsx";
import SingleTask from "./components/SingleTask.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar.jsx";
import { tasks, taskTypes } from "./data/taskData.js";

export default function App() {
    return (
        <div id="app">
            <div className="px-5 py-2">
                {/* <!-- Heading --> */}
                <div className="flex items-center gap-3">
                    <div className="flex shrink-0 cursor-pointer items-center rounded-full hover:outline-2 hover:outline-offset-2 hover:outline-gray-400">
                        <Avatar className={"size-10"}>
                            <AvatarImage className={"size-10"} src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="user's avatar" />
                            <AvatarFallback>UK</AvatarFallback>
                        </Avatar>
                    </div>
                    <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
                </div>

                {/* <!-- Main --> */}
                <div className="mt-5 flex h-screen items-start justify-start overflow-x-auto">
                    <div className="flex shrink-0 flex-nowrap items-start gap-3">
                        {taskTypes.map(({ type, displayName, bgColor }) => (
                            <div className={`w-72 shrink-0 rounded-sm px-5 py-2 ${bgColor}`} key={type}>
                                <div className="text-md mb-3 font-medium text-gray-800">{displayName}</div>
                                {/* Add task */}
                                <div className="-mx-3">
                                    <AddTask />
                                </div>
                                {/* Task list */}
                                <div className="-mx-3 mt-3 space-y-3">
                                    {tasks
                                        .filter((task) => task.type === type)
                                        .map((task) => (
                                            <SingleTask key={task.id} task={task} />
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
