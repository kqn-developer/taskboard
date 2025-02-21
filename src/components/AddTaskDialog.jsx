import { tasks as initialTasks } from "@/data/taskData.js";
import { cn } from "@/lib/utils.js";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DueDatePicker from "./DueDatePicker.jsx";
import LabelPicker from "./LabelPicker.jsx";
import PriorityPicker from "./PriorityPicker.jsx";
import StatusPicker from "./StatusPicker.jsx";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog.jsx";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
export default function AddTaskDialog({ defaultStatus }) {
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
            taskName: "",
            taskDesc: "",
            dueDate: new Date(),
            priority: null,
            labels: [],
            status: defaultStatus,
        },
    });
    const taskNameValue = watch("taskName");
    const isDisabled = !taskNameValue?.trim() || Object.keys(errors).length > 0;

    function onSubmit(data) {
        const newTask = {
            id: Date.now(), // Tạo ID duy nhất
            name: data.taskName,
            description: data.taskDesc,
            dueDate: data.dueDate.toISOString(),
            labels: data.labels,
            priority: +data.priority,
            status: data.status,
        };

        setTasks([...tasks, newTask]);
        setOpen(false);
        reset();
    }

    function handleDialogChange(isOpen) {
        setOpen(isOpen);
        if (!isOpen) reset();
    }

    return (
        <Dialog open={open} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
                <button className="text-md flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 font-semibold text-gray-800 hover:text-red-400">
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                    Thêm công việc
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Thêm công việc</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="gap-4 flex flex-col">
                        {/* task name input */}
                        <Controller
                            name="taskName"
                            control={control}
                            rules={{
                                required: "Điền tên công việc",
                                minLength: { value: 1, message: "Phải chứa tối thiểu 1 kí tự" },
                            }}
                            render={({ field }) => <Input {...field} type="text" placeholder="Nhập tên công việc" />}
                        />
                        {/* task desc textarea */}
                        <Controller name="taskDesc" control={control} render={({ field }) => <Textarea {...field} placeholder="Mô tả công việc" />} />

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
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        {/* select status task */}
                        <StatusPicker defaultStatus={defaultStatus} control={control} />
                        <button type="submit" disabled={isDisabled} className={cn("cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-white shadow-xs", isDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-red-400 hover:bg-red-500")}>
                            Lưu
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
