import AddTaskButton from "./components/AddTaskButton.jsx";
import SingleTask from "./components/SingleTask.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar.jsx";
import { taskTypes } from "./data/taskData.js";

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
                                    <AddTaskButton />
                                </div>
                                {/* Task list */}
                                <div className="-mx-3 mt-3 space-y-3">
                                    <SingleTask />

                                    <button className="flex w-full cursor-pointer flex-col rounded-md bg-white p-3 hover:shadow-md hover:outline-1 hover:outline-gray-400">
                                        <p className="text-md font-medium text-gray-800">Công việc 2</p>
                                        <p className="mt-2 text-sm text-gray-800">Mô tả 2</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <span className="rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Default</span>
                                            <span className="rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
