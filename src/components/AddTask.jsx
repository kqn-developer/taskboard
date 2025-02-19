import DueDateButton from "./DueDateButton.jsx";
import LabelsButton from "./LabelsButton.jsx";
import PriorityButton from "./PriorityButton.jsx";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.jsx";
import { Textarea } from "./ui/textarea.jsx";
export default function AddTask() {
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
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Thêm công việc</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                <div className="gap-4 flex flex-col">
                    <Input type="text" placeholder="Nhập tiêu đề" />
                    <Textarea placeholder="Mô tả" />
                    <div className="flex flex-wrap gap-2">
                        {/* Due date */}
                        <DueDateButton />
                        {/* Priority */}
                        <div>
                            <PriorityButton />
                        </div>
                        {/* Labels */}
                        <LabelsButton />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <Select>
                        <SelectTrigger className="w-auto gap-1">
                            <SelectValue placeholder="Việc cần làm" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="apple">Việc cần làm</SelectItem>
                            <SelectItem value="banana">Đang làm</SelectItem>
                            <SelectItem value="blueberry">Hoàn thành</SelectItem>
                        </SelectContent>
                    </Select>
                    <button className="cursor-pointer rounded-md bg-red-400 px-3 py-2 text-sm font-medium text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">Lưu</button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
