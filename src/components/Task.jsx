import { tasks as initialTasks, taskPriorities } from "@/data/taskData.js";
import { cn } from "@/lib/utils.js";
import { displayDueDate, formattedDate } from "@/utils/date.js";
import { isPast } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DueDatePicker from "./DueDatePicker.jsx";
import LabelPicker from "./LabelPicker.jsx";
import PriorityPicker from "./PriorityPicker.jsx";
import StatusPicker from "./StatusPicker.jsx";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog.jsx";
export default function Task({ task }) {
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState(initialTasks);
    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            taskName: task.name,
            taskDesc: task.description,
            dueDate: formattedDate(task.dueDate),
            priority: task.priority,
            labels: task.labels,
            status: task.status,
        },
    });

    const priorityColor = taskPriorities.find((prior) => prior.level === task.priority)?.color;
    function dueDateColor(dueDate) {
        if (isPast(formattedDate(dueDate))) return "text-yellow-500";
        return "text-blue-500";
    }

    function handleDeleteTask(e) {
        e.preventDefault();
        const updatedTasks = tasks.filter(({ id }) => id !== task.id);
        console.log(updatedTasks);
        setTasks(updatedTasks);
    }

    function handleUpdateTask(e) {
        e.preventDefault();
    }

    function handleToggleTask(e) {
        e.preventDefault();
        const updatedTasks = tasks.map((t) => (t.id === task.id ? { ...t, status: t.status === "completed" ? "todo" : "completed" } : t));
        setTasks(updatedTasks);
        console.log(updatedTasks);
    }

    function handleDialogChange(isOpen) {
        setOpen(isOpen);
        if (!isOpen) reset();
    }

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <Dialog open={open} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
                <button className="flex w-full cursor-pointer flex-col rounded-md bg-white p-3 hover:shadow-md hover:outline-1 hover:outline-gray-400 text-left">
                    <p className={cn("text-md font-medium text-gray-800 no-underline", task.status === "completed" && "line-through")}>{task.name}</p>
                    <p className={cn("mt-2 text-sm text-gray-800 no-underline", task.status === "completed" && "line-through")}>{task.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {task.dueDate && <span className={cn("rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800", dueDateColor(task.dueDate))}>{displayDueDate(task.dueDate)}</span>}
                        {task.priority && <span className={cn("rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800", priorityColor)}>Ưu tiên {task.priority}</span>}
                        {task.labels.length !== 0 &&
                            task.labels.map((label) => (
                                <span key={label} className="rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                    @{label}
                                </span>
                            ))}
                    </div>
                </button>
            </DialogTrigger>
            <DialogContent>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader className={"flex flex-row gap-3 items-start"}>
                        <button className="group cursor-pointer" onClick={handleToggleTask}>
                            {/* default icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={cn("size-4 mt-0.5", task.status === "completed" ? "hidden" : "block group-hover:hidden")}>
                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                            </svg>
                            {/* hover icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={cn("size-4 mt-0.5", task.status === "completed" ? "block" : " hidden group-hover:block")}>
                                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                            </svg>
                        </button>
                        <div className="flex flex-col gap-1 grow">
                            <DialogTitle asChild>
                                <h1 className={cn("text-lg leading-none font-semibold tracking-tight mb-1 no-underline", task.status === "completed" && "line-through")}>{task.name}</h1>
                            </DialogTitle>
                            <DialogDescription className={task.status === "completed" && "line-through"}>{task.description}</DialogDescription>
                        </div>
                    </DialogHeader>

                    <div className="flex flex-wrap gap-2">
                        {/* Due date */}

                        <DueDatePicker control={control} />
                        {/* Priority */}
                        <div>
                            <PriorityPicker control={control} />
                        </div>
                        {/* Labels */}
                        <LabelPicker control={control} />
                    </div>

                    <div className="flex justify-between items-center">
                        <StatusPicker defaultStatus={task.status} control={control} />
                        <div className="flex items-center gap-3">
                            <button className="cursor-pointer rounded-md bg-gray-400 px-3 py-2 text-sm font-medium text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400" onClick={handleDeleteTask}>
                                Xóa
                            </button>
                            <button type="submit" className="cursor-pointer rounded-md bg-red-400 px-3 py-2 text-sm font-medium text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400" onClick={handleUpdateTask}>
                                Lưu
                            </button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
