import { Badge } from "./ui/badge.jsx";
import { Separator } from "./ui/separator.jsx";

export default function MainContent() {
    return (
        <div className="bg-[#f6f8f9] h-screen px-4 py-3">
            <div className="flex gap-3">
                <div className="w-72 text-gray-800 bg-gray-200 rounded-sm">
                    <div className="px-4 py-3 font-semibold">Việc cần làm</div>
                    <Separator className="bg-gray-400" />
                    <div className="px-4 py-3">
                        <button className="flex items-center gap-2 font-medium w-full cursor-pointer hover:text-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Thêm công việc
                        </button>
                        <div className="mt-3 space-y-3">
                            {/* Task 1 */}
                            <div className="-mx-2 relative">
                                <div className="hover:bg-white pl-8 py-2 rounded-sm z-10 cursor-pointer">
                                    <div className="mb-1">Công việc 1</div>
                                    <div className="text-sm text-gray-600">Mô tả 1</div>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        <Badge className="text-gray-800 bg-white border border-gray-500">Due</Badge>
                                        <Badge className="text-gray-800 bg-white border border-gray-500">Priority</Badge>
                                        <Badge className="text-gray-800 bg-white border border-gray-500">Tags</Badge>
                                    </div>
                                </div>
                                <span className="absolute top-2 left-2 z-50">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-4 mt-1">
                                        <circle cx="12" cy="12" r="11" fill="none" stroke="black" strokeWidth="2" />
                                    </svg>
                                </span>
                            </div>

                            {/* Task 2 */}
                            <div className="-mx-2 relative">
                                <div className="hover:bg-white pl-8 py-2 rounded-sm z-10 cursor-pointer">
                                    <div className="mb-1">Công việc 1</div>
                                    <div className="text-sm text-gray-600">Mô tả 1</div>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        <Badge className="text-gray-800 bg-white border border-gray-500">Due</Badge>
                                        <Badge className="text-gray-800 bg-white border border-gray-500">Priority</Badge>
                                        <Badge className="text-gray-800 bg-white border border-gray-500">Tags</Badge>
                                    </div>
                                </div>
                                <span className="absolute top-2 left-2 z-50">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-4 mt-1">
                                        <circle cx="12" cy="12" r="11" fill="none" stroke="black" strokeWidth="2" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="w-72 text-gray-800 bg-yellow-200 rounded-sm">
                    <div className="px-4 py-3 font-semibold">Đang làm</div>
                    <Separator className="bg-gray-400" />
                    <div className="px-4 py-3">
                        <button className="flex items-center gap-2 font-medium w-full cursor-pointer hover:text-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Thêm công việc
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
