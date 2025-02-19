import { priorities } from "@/data/taskData.js";
import { cn } from "@/lib/utils.js";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select.jsx";

export default function PriorityButton() {
    return (
        <Select>
            <SelectTrigger className="[&_svg]:last:hidden flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 px-2 py-1 text-sm font-medium text-gray-600 shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 64 0 350.5 0 400l0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-100 80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52l0-28zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8l0 241.8-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5l0-237z" />
                </svg>
                Ưu tiên
            </SelectTrigger>
            <SelectContent>
                {priorities.map(({ id, name, slug, color }) => (
                    <SelectItem value={slug} key={id} className={""}>
                        <svg className={cn("size-4", color)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z" />
                        </svg>
                        {name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
