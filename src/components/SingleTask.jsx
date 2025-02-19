import DueDateButton from "./DueDateButton.jsx";
import LabelsButton from "./LabelsButton.jsx";
import PriorityButton from "./PriorityButton.jsx";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.jsx";
export default function SingleTask({ task }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="flex w-full cursor-pointer flex-col rounded-md bg-white p-3 hover:shadow-md hover:outline-1 hover:outline-gray-400">
                    <p className="text-md font-medium text-gray-800">{ task.name}</p>
                    <p className="mt-2 text-sm text-gray-800 text-left">{ task.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Default</span>
                        <span className="rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Default</span>
                    </div>
                </button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader className={"flex flex-row gap-3 items-start"}>
                    <button className="group cursor-pointer">
                        {/* default icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-4 mt-0.5 block group-hover:hidden">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                        </svg>
                        {/* hover icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-4 mt-0.5 hidden group-hover:block">
                            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                        </svg>
                    </button>
                    <div className="flex flex-col gap-1 grow">
                        <DialogTitle asChild>
                            <h1 className="text-lg leading-none font-semibold tracking-tight">Công việc 1</h1>
                        </DialogTitle>
                        <DialogDescription>Mô tả công việc</DialogDescription>
                    </div>
                </DialogHeader>
                <div className="flex flex-wrap gap-1">
                    <span className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm">
                        Default
                        <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-xs hover:bg-blue-200 hover:text-blue-900">
                            <svg className="size-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </span>
                    <span className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm">
                        Default
                        <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-xs hover:bg-blue-200 hover:text-blue-900">
                            <svg className="size-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </span>
                </div>
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
                    <div className="flex items-center gap-3">
                        <button className="cursor-pointer rounded-md bg-gray-400 px-3 py-2 text-sm font-medium text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">Xóa</button>
                        <button className="cursor-pointer rounded-md bg-red-400 px-3 py-2 text-sm font-medium text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">Lưu</button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
