import { Controller, useForm } from "react-hook-form";
import DueDatePicker from "./DueDatePicker.jsx";
import TaskStatusSelect from "./TaskStatusSelect.jsx";
import { Button } from "./ui/button.jsx";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog.jsx";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
export default function AddTaskDialog() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            taskName: "",
            taskDesc: "",
            dueDate: new Date(),
        },
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <Dialog>
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
                            <div>{/* <PriorityButton /> */}</div>
                            {/* Labels */}
                            {/* <LabelsButton /> */}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        {/* select status task */}
                        <TaskStatusSelect />
                        <Button type="submit" className="cursor-pointer rounded-md bg-red-400 px-3 py-2 text-sm font-medium text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">
                            Lưu
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
