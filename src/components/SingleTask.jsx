import DueDateButton from "./DueDateButton.jsx";
import LabelsButton from "./LabelsButton.jsx";
import PriorityButton from "./PriorityButton.jsx";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
export default function SingleTask() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="flex w-full cursor-pointer flex-col rounded-md bg-white p-3 hover:shadow-md hover:outline-1 hover:outline-gray-400">
                    <p className="text-md font-medium text-gray-800">Công việc 1</p>
                    <p className="mt-2 text-sm text-gray-800">Mô tả 1</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Default</span>
                        <span className="rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Default</span>
                    </div>
                </button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle asChild>
                        <h1 className="text-lg leading-none font-semibold tracking-tight">Công việc 1</h1>
                    </DialogTitle>
                    <DialogDescription>Mô tả công việc</DialogDescription>
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
                <DialogFooter>
                    <button className="cursor-pointer rounded-md bg-red-400 px-3 py-2 text-sm font-medium text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">Lưu</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
