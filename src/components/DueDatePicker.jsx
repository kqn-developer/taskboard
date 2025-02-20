import { displayDueDate } from "@/utils/date.js";
import { Controller } from "react-hook-form";
import { Calendar } from "./ui/calendar.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover.jsx";

export default function DueDatePicker({ control }) {
    return (
        <Controller
            name="dueDate"
            control={control}
            render={({ field }) => (
                <Popover>
                    <PopoverTrigger asChild>
                        <button className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 px-2 py-1 text-sm font-medium text-gray-600 shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
                            </svg>

                            {field.value ? displayDueDate(field.value) : "Đến hạn"}
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                    </PopoverContent>
                </Popover>
            )}
        />
    );
}
