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
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <p>Dialog</p>
                <DialogFooter>
                    <button type="submit">Save changes</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
